import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/lib/queries";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const revalidate = 60;

type ArchivePost = {
  _id: string;
  title: string;
  subtitle?: string;
  slug?: string;
  publishedAt?: string;
  volume?: string;
  issue?: string;
  doi?: string;
  isPeerReviewed?: boolean;
  authorName?: string;
  coAuthors?: Array<{ name?: string }>;
  pdfUrl?: string;
  keywords?: string[];
};

const formatPublicationDate = (date?: string) =>
  date
    ? new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date))
    : null;

export default async function ArchivesPage() {
  const articles = await client.fetch<ArchivePost[]>(ALL_POSTS_QUERY);

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
        <div className="space-y-6">
          {articles.map((article) => (
            <Card key={article._id} className="overflow-hidden hover:border-emerald-300 transition-colors border-emerald-100 dark:border-emerald-900/50 shadow-sm">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 pb-4">
                <CardTitle className="text-xl text-emerald-900 dark:text-emerald-300 leading-snug">
                  {article.slug ? (
                    <Link href={`/posts/${article.slug}`} className="hover:underline">
                      {article.title}
                    </Link>
                  ) : article.title}
                </CardTitle>
                <div className="text-sm font-medium text-muted-foreground mt-2 space-y-1">
                  <p>
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">Lead Author:</span>
                    {article.authorName || "Author unavailable"}
                    {article.coAuthors?.length
                      ? `; Co-Authors: ${article.coAuthors.map((author) => author.name).filter(Boolean).join(", ")}`
                      : ""}
                  </p>
                  <p>
                    {[article.volume && `Volume ${article.volume}`, article.issue && `Issue ${article.issue}`, formatPublicationDate(article.publishedAt)]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  <strong className="text-foreground mr-2 text-sm font-semibold">Abstract:</strong>
                  {article.subtitle || "No abstract available."}
                </p>
                {article.isPeerReviewed && (
                  <span className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                    Peer-reviewed
                  </span>
                )}
                {article.keywords?.length ? (
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Index keywords:</strong> {article.keywords.join(", ")}
                  </p>
                ) : null}
              </CardContent>
              {article.pdfUrl && (
                <CardFooter className="bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 justify-end py-3">
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                  >
                    Download PDF
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
          {articles.length === 0 && (
            <p className="rounded-lg border border-dashed border-emerald-200 p-8 text-center text-muted-foreground dark:border-emerald-900">
              No articles have been published yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
