import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const runtime = "nodejs";

const json = (body: { success: boolean; message: string }, status = 200) =>
  Response.json(body, { status });

export async function POST(request: Request) {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    console.warn("SANITY_API_WRITE_TOKEN is missing; submission writes are disabled.");
    return Response.json(
      { success: false, error: "Server missing write permissions" },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const articleTitle = formData.get("articleTitle");
    const message = formData.get("message");
    const manuscript = formData.get("manuscriptFile");
    const paymentReceipt = formData.get("paymentReceipt");

    if (
      typeof firstName !== "string" || !firstName.trim() ||
      typeof lastName !== "string" || !lastName.trim() ||
      typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      typeof articleTitle !== "string" || !articleTitle.trim() ||
      !(manuscript instanceof File) || manuscript.size === 0 ||
      !(paymentReceipt instanceof File) || paymentReceipt.size === 0
    ) {
      return json({ success: false, message: "Complete all required fields and attach both files." }, 400);
    }

    const manuscriptName = manuscript.name.toLowerCase();
    if (!/\.(doc|docx|pdf)$/.test(manuscriptName)) {
      return json({ success: false, message: "The manuscript must be a .doc, .docx, or .pdf file." }, 400);
    }

    const receiptName = paymentReceipt.name.toLowerCase();
    const isReceiptPdf = receiptName.endsWith(".pdf");
    const isReceiptImage = paymentReceipt.type.toLowerCase().startsWith("image/") ||
      /\.(png|jpe?g|webp|gif|bmp|tiff?|avif|heic|heif)$/.test(receiptName);
    if (!isReceiptPdf && !isReceiptImage) {
      return json({ success: false, message: "The payment receipt must be an image or PDF file." }, 400);
    }

    const sanityWriteClient = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
    const [manuscriptAsset, receiptAsset] = await Promise.all([
      sanityWriteClient.assets.upload("file", manuscript, {
        filename: manuscript.name,
        contentType: manuscript.type || "application/octet-stream",
      }),
      sanityWriteClient.assets.upload("file", paymentReceipt, {
        filename: paymentReceipt.name,
        contentType: paymentReceipt.type || "application/octet-stream",
      }),
    ]);

    await sanityWriteClient.create({
      _type: "submission",
      authorName: `${firstName.trim()} ${lastName.trim()}`,
      authorEmail: email.trim(),
      paperTitle: articleTitle.trim(),
      abstractText: typeof message === "string" ? message.trim() : "",
      manuscriptFile: { _type: "file", asset: { _type: "reference", _ref: manuscriptAsset._id } },
      paymentReceipt: { _type: "file", asset: { _type: "reference", _ref: receiptAsset._id } },
      status: "Pending Review",
      submittedAt: new Date().toISOString(),
    });

    return json({ success: true, message: "Manuscript submitted successfully!" });
  } catch (error) {
    console.error("Article submission failed:", error);
    return Response.json(
      { success: false, error: "Your submission could not be sent. Please try again later." },
      { status: 500 },
    );
  }
}