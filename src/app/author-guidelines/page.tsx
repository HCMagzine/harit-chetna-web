import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthorGuidelines() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <div className="relative text-white py-16 px-4 mb-12 border-b-8 border-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c8a?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/90 to-emerald-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-in slide-in-from-bottom-6 duration-500">Author Guidelines</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto font-light animate-in fade-in duration-700 delay-150">
            Comprehensive instructions for preparing and submitting your manuscript to Harit Chetna.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl animate-in fade-in duration-1000 delay-300">
        <Card className="mb-10 shadow-sm border-emerald-100 dark:border-emerald-900/50">
          <CardContent className="p-6 md:p-8 prose prose-emerald dark:prose-invert max-w-none text-muted-foreground">
            <p className="lead font-medium text-lg text-emerald-900 dark:text-emerald-400">
              Harit Chetna is a monthly agricultural magazine dedicated to providing farmers, rural youth, women, researchers, extension workers, students, and policymakers with practical, science-based information.
            </p>
            <p>
              The magazine presents innovations, recent developments, and success stories in agriculture in an easy-to-understand style. Content includes articles, editorials, interviews, photo features, book reviews, and special issues on relevant topics. All authors must strictly follow these guidelines when submitting their articles to ensure smooth processing and publication.
            </p>
          </CardContent>
        </Card>

        {/* @ts-expect-error Radix UI React 19 types issue */}
        <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900/50 p-2 md:p-6">
          <AccordionItem value="item-1" className="border-b border-emerald-100 dark:border-emerald-900/50">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">Submission Methods</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-4 pt-2 pb-6 px-4">
              <p>Authors can submit their articles through three convenient methods:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li><strong>Email Submission:</strong> Send the manuscript as an attachment to Editor.haritchetna@gmail.com.</li>
                <li><strong>Online Submission:</strong> Upload the article directly using the “Submit Article” option available on the website.</li>
                <li><strong>WhatsApp Submission:</strong> Share the article via WhatsApp to +91 7009571328 or +91 8152069607.</li>
              </ul>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mt-6">
                <strong>Submission Requirements:</strong> The article must be submitted along with the payment receipt or screenshot by the corresponding author. 
                <br/><br/>
                <em className="text-sm">Note: Only original articles (Popular or Technical) that have not been previously published or submitted elsewhere will be considered.</em>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-emerald-100 dark:border-emerald-900/50">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">General Guidelines</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-3 pt-2 pb-6 px-4">
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Articles should be limited to 2–4 pages in length.</li>
                <li>Each article must include a clear introduction and a concluding paragraph.</li>
                <li>Content should be informative, innovative, and aligned with current trends.</li>
                <li>Inclusion of tables, figures, and high-quality photographs is encouraged.</li>
                <li>The title should be concise and descriptive, formatted in Times New Roman, 14 pt, bold.</li>
                <li>Full author details must be provided below the title in Times New Roman, 12 pt, and the corresponding author’s email should be included in 12 pt, bold.</li>
                <li>The main text should be in 12 pt font, with headings in 14 pt and subheadings in 12 pt bold.</li>
                <li>Use the metric system throughout; all abbreviations used in tables must be defined, and data sources should be clearly cited.</li>
                <li>Language: English and Hindi</li>
                <li>Measurements and dosages should be expressed in SI (metric) units.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-emerald-100 dark:border-emerald-900/50">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">Manuscript Organization</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-5 pt-2 pb-6 px-4">
              <p>Authors are required to prepare their manuscripts in the following sequence:</p>
              
              <div className="pl-4 border-l-2 border-emerald-200 dark:border-emerald-800 space-y-5 mt-4">
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-500">1. Title & Authors</h4>
                  <p className="text-sm mt-1">Short, clear, engaging. Maximum 2 authors normally (up to 4 for interdisciplinary). Must include full names, affiliations, and emails.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-500">2. Abstract & Keywords</h4>
                  <p className="text-sm mt-1">Summary of up to 150 words. 4-5 keywords in alphabetical order.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-500">3. Introduction</h4>
                  <p className="text-sm mt-1">Written as the opening paragraph without a heading, highlighting topic relevance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-500">4. Main Text</h4>
                  <p className="text-sm mt-1">Logically organized with headings/subheadings. Emphasis on practical applicability and field relevance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-500">5. Conclusion (100-150 words)</h4>
                  <p className="text-sm mt-1">Highlight key findings and their practical implications.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-emerald-100 dark:border-emerald-900/50">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">References (APA Format)</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pt-2 pb-6 px-4">
              <p className="mb-4">One should strictly follow the APA format as given below:</p>
              <div className="space-y-4 text-sm font-serif bg-slate-100 dark:bg-slate-900 p-5 rounded-lg">
                <p><strong>Single Author:</strong> Sharma, R. (2020). Effect of organic farming on soil health. <em>Journal of Agricultural Science</em>, 12(3), 45–52.</p>
                <p><strong>Two Authors:</strong> Kumar, A., & Singh, P. (2021). Impact of fertilizers on crop yield. <em>Indian Journal of Agronomy</em>, 66(2), 120–125.</p>
                <p><strong>Multiple (3+):</strong> Reddy, M., Patel, S., Kumar, V., & Rao, D. (2022). Integrated pest management strategies in vegetables. <em>Crop Protection</em>, 45(1), 78–85.</p>
                <p><strong>Textbook:</strong> Gupta, P. K. (2018). <em>Soil, plant, water and fertilizer analysis</em> (2nd ed.). Agrobios.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-emerald-100 dark:border-emerald-900/50">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">Figures & Photographs</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2 pb-6 px-4">
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Place photos, tables, and figures close to their corresponding references in the text.</li>
                <li>Submit high-quality images during the initial submission (min resolution of 600 dpi, CMYK format).</li>
                <li>Ensure that all text within images is readable (at least 2 mm in size).</li>
                <li>Accepted formats: .jpg, .jpeg, .png, .tif, .eps, .ppt, .doc, .rtf, .xls, and .ai. <strong>(PDF files are not accepted)</strong>.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="text-lg font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 px-2">Revision & Acceptance</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-4 pt-2 pb-6 px-4">
              <p>All manuscripts undergo peer review. Authors must submit revised versions within 7 days of receiving comments.</p>
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-300 mt-4">Revised submission must include:</h4>
              <ul className="list-disc pl-6 space-y-1 marker:text-emerald-500">
                <li>Updated manuscript (with tracked changes or highlighted revisions)</li>
                <li>Proof of active journal subscription (at least one author mandatory)</li>
                <li>Payment proof (receipt or screenshot)</li>
                <li>Point-wise response to reviewer comments</li>
              </ul>
              <p className="text-sm text-emerald-600 font-medium italic mt-4">Note: Incomplete submissions will not be processed.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
