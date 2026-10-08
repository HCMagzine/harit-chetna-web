import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubmissionForm } from "@/components/SubmissionForm";

export default function SubmitContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <div className="relative text-white py-16 px-4 mb-12 border-b-8 border-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c8a?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/90 to-emerald-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-in slide-in-from-bottom-6 duration-500">Submit Article & Contact Us</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto font-light animate-in fade-in duration-700 delay-150">
            Send us your manuscript or reach out to our editorial team for any queries.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl animate-in fade-in duration-1000 delay-300">
        <div className="grid md:grid-cols-5 gap-10">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-emerald-100 dark:border-emerald-900/50 shadow-sm">
              <CardHeader className="bg-emerald-50/50 dark:bg-emerald-950/20 pb-4">
                <CardTitle className="text-xl text-emerald-800 dark:text-emerald-400">Get in Touch</CardTitle>
                <CardDescription>Reach out to the editorial team.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full text-emerald-700 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-300 mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm break-all">Editor.haritchetna@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full text-emerald-700 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-900 dark:text-emerald-300 mb-1">Phone / WhatsApp</h4>
                    <p className="text-muted-foreground text-sm mb-1">+91 9984149456</p>
                    <p className="text-muted-foreground text-sm">+91 7009571328</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 dark:border-emerald-900/50 shadow-sm bg-emerald-800 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Important Note</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Only original articles (Popular or Technical) that have not been previously published or submitted elsewhere will be considered. A confirmation of successful submission will be sent to the corresponding author within one week.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Submission Form */}
          <div className="md:col-span-3">
            <Card className="border-t-4 border-t-emerald-600 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800 dark:text-emerald-400">Online Submission Form</CardTitle>
                <CardDescription>
                  Please fill out the details below and attach your manuscript along with the payment receipt.
                </CardDescription>
              </CardHeader>
              <CardContent><SubmissionForm /></CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
