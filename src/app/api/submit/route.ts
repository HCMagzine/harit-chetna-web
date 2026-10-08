import { createSanityWriteClient } from "@/sanity/lib/writeClient";

export const runtime = "nodejs";

const json = (body: { success: boolean; message?: string; error?: string }, status = 200) =>
  Response.json(body, { status });

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    const error = "SANITY_API_WRITE_TOKEN is missing on server";
    console.error(error);
    return json({ success: false, error }, 500);
  }

  try {
    const formData = await request.formData();
    const suppliedAuthorName = formData.get("authorName");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const authorEmail = formData.get("authorEmail") ?? formData.get("email");
    const paperTitle = formData.get("paperTitle") ?? formData.get("articleTitle");
    const abstractText = formData.get("abstractText") ?? formData.get("message");
    const manuscript = formData.get("manuscriptFile") ?? formData.get("manuscript");
    const paymentReceipt = formData.get("paymentReceipt") ?? formData.get("receipt");
    const authorName = typeof suppliedAuthorName === "string"
      ? suppliedAuthorName.trim()
      : [firstName, lastName]
          .filter((name): name is string => typeof name === "string" && Boolean(name.trim()))
          .join(" ");

    if (
      !authorName ||
      typeof authorEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorEmail.trim()) ||
      typeof paperTitle !== "string" || !paperTitle.trim() ||
      !(manuscript instanceof File) || manuscript.size === 0 ||
      !(paymentReceipt instanceof File) || paymentReceipt.size === 0
    ) {
      return json({ success: false, error: "Complete all required fields and attach both files." }, 400);
    }

    const manuscriptName = manuscript.name.toLowerCase();
    if (!/\.(doc|docx|pdf)$/.test(manuscriptName)) {
      return json({ success: false, error: "The manuscript must be a .doc, .docx, or .pdf file." }, 400);
    }

    const receiptName = paymentReceipt.name.toLowerCase();
    const isReceiptPdf = receiptName.endsWith(".pdf");
    const isReceiptImage = paymentReceipt.type.toLowerCase().startsWith("image/") ||
      /\.(png|jpe?g|webp|gif|bmp|tiff?|avif|heic|heif)$/.test(receiptName);
    if (!isReceiptPdf && !isReceiptImage) {
      return json({ success: false, error: "The payment receipt must be an image or PDF file." }, 400);
    }

    const sanityWriteClient = createSanityWriteClient();
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

    const normalizedAuthorEmail = authorEmail.trim();
    const normalizedPaperTitle = paperTitle.trim();
    const normalizedAbstractText = typeof abstractText === "string" ? abstractText.trim() : "";

    await sanityWriteClient.create({
      _type: "submission",
      authorName,
      authorEmail: normalizedAuthorEmail,
      paperTitle: normalizedPaperTitle,
      abstractText: normalizedAbstractText,
      manuscriptFile: { _type: "file", asset: { _type: "reference", _ref: manuscriptAsset._id } },
      paymentReceipt: { _type: "file", asset: { _type: "reference", _ref: receiptAsset._id } },
      status: "Pending Review",
      submittedAt: new Date().toISOString(),
    });

    return json({ success: true, message: "Manuscript and payment receipt saved successfully!" });
  } catch (error) {
    console.error("Article submission failed:", error);
    return json({ success: false, error: "Your submission could not be sent. Please try again later." }, 500);
  }
}