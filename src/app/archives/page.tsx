import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const placeholderArticles = [
  {
    title: "Innovative Approaches to Sustainable Water Management in Arid Regions",
    authors: "Dr. A. Sharma, Prof. R. Kumar",
    abstract: "This paper explores novel water conservation techniques implemented in drought-prone areas, demonstrating a 40% increase in crop yield through precision drip irrigation and soil moisture monitoring.",
  },
  {
    title: "Impact of Organic Bio-fertilizers on Soil Health and Wheat Productivity",
    authors: "Dr. S. Patil, Dr. K. Verma",
    abstract: "A comprehensive analysis of long-term organic farming practices. Results indicate significant improvements in soil microbial biomass and nutrient retention compared to conventional chemical fertilizer applications.",
  },
  {
    title: "Digital Agriculture: Integration of IoT Sensors for Crop Disease Prediction",
    authors: "Mr. Anil Das, Dr. M. Singh",
    abstract: "Presenting a framework for early detection of fungal diseases in tomato crops using affordable IoT sensors and machine learning algorithms, reducing pesticide usage by optimizing application timing.",
  }
];

export default function ArchivesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <div className="relative text-white py-16 px-4 mb-12 border-b-8 border-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c8a?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/90 to-emerald-950" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-in slide-in-from-bottom-6 duration-500">Current Issue & Archives</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto font-light animate-in fade-in duration-700 delay-150">
            Browse our collection of peer-reviewed articles, research papers, and agricultural innovations.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl animate-in fade-in duration-1000 delay-300">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">Volume 1, Issue 1 (Current Issue)</h2>
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full">March 2026</span>
        </div>
        
        <div className="space-y-6">
          {placeholderArticles.map((article, idx) => (
            <Card key={idx} className="overflow-hidden hover:border-emerald-300 transition-colors border-emerald-100 dark:border-emerald-900/50 shadow-sm">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 pb-4">
                <CardTitle className="text-xl text-emerald-900 dark:text-emerald-300 leading-snug">
                  {article.title}
                </CardTitle>
                <div className="text-sm font-medium text-muted-foreground mt-2">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">Authors:</span> 
                  {article.authors}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  <strong className="text-foreground mr-2 text-sm font-semibold">Abstract:</strong>
                  {article.abstract}
                </p>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 justify-end py-3">
                <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
