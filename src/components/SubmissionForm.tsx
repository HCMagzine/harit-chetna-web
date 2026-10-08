"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/submit", { method: "POST", body: formData });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || "Your submission could not be sent. Please try again.");
      }

      form.reset();
      setFeedback({ type: "success", message: result.message });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Your submission could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <section aria-labelledby="payment-instructions" className="space-y-3 border-l-4 border-emerald-600 bg-emerald-50 p-5 dark:bg-emerald-950/30">
        <h2 id="payment-instructions" className="font-semibold text-emerald-950 dark:text-emerald-200">Payment and contact details</h2>
        <p className="text-sm text-muted-foreground">
          Primary Phone / WhatsApp / UPI Number: <a className="font-semibold text-emerald-800 underline dark:text-emerald-300" href="tel:+919984149456">+91 9984149456</a>
        </p>
        <p className="text-sm text-muted-foreground">
          Secondary Contact: <a className="font-semibold text-emerald-800 underline dark:text-emerald-300" href="tel:+917009571328">+91 7009571328</a>
        </p>
        <p className="text-sm text-muted-foreground">
          Email: <a className="break-all font-semibold text-emerald-800 underline dark:text-emerald-300" href="mailto:Editor.haritchetna@gmail.com">Editor.haritchetna@gmail.com</a>
        </p>
        <p className="text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
          Transfer publication/processing fee via UPI to 9984149456 (PhonePe / Google Pay / Paytm), take a screenshot, attach it below along with your manuscript, and click Submit Article.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="articleTitle">Article Title <span className="text-red-500">*</span></Label>
        <Input id="articleTitle" name="articleTitle" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message to Editor (Optional)</Label>
        <Textarea id="message" name="message" placeholder="Abstract or additional information..." className="min-h-[100px]" />
      </div>

      <div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="space-y-2">
          <Label htmlFor="manuscriptFile" className="font-semibold text-emerald-800 dark:text-emerald-400">Manuscript (.doc, .docx, or .pdf) <span className="text-red-500">*</span></Label>
          <Input id="manuscriptFile" name="manuscriptFile" type="file" accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="paymentReceipt" className="font-semibold text-emerald-800 dark:text-emerald-400">Payment Receipt / Screenshot (image or PDF) <span className="text-red-500">*</span></Label>
          <Input id="paymentReceipt" name="paymentReceipt" type="file" accept="image/*,.pdf,application/pdf" required />
        </div>
      </div>

      {feedback && (
        <p role={feedback.type === "error" ? "alert" : "status"} className={feedback.type === "success" ? "rounded-md bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "rounded-md bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950/40 dark:text-red-200"}>
          {feedback.message}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-700 py-6 text-lg text-white hover:bg-emerald-800">
        {isSubmitting && <LoaderCircle aria-hidden="true" className="animate-spin" />}
        {isSubmitting ? "Uploading Manuscript & Payment Receipt..." : "Submit Article"}
      </Button>
    </form>
  );
}