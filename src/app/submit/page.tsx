import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 dark:bg-slate-900">
      <div className="relative mb-12 overflow-hidden border-b-8 border-emerald-700 px-4 py-16 text-white">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c8a?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/90 to-emerald-950" />
        </div>
        <div className="container relative z-10 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-extrabold">Submit Article</h1>
          <p className="mx-auto max-w-3xl text-lg font-light opacity-90">Send your manuscript and payment receipt to the Harit Chetna editorial team.</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4">
        <Card className="border-t-4 border-t-emerald-600 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 dark:text-emerald-400">Online Submission Form</CardTitle>
            <CardDescription>Complete all required fields and attach your manuscript and payment receipt.</CardDescription>
          </CardHeader>
          <CardContent><SubmissionForm /></CardContent>
        </Card>
      </div>
    </div>
  );
}