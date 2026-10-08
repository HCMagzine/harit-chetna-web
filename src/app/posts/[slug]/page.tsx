import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from "@/lib/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await client.fetch<Array<{ slug?: string }>>(POST_SLUGS_QUERY);
  return articles.flatMap(({ slug }) => (slug ? [{ slug }] : []));
}

type Article = {
  title: string;
  subtitle?: string;
  publishedAt?: string;
  volume?: string;
  issue?: string;
  doi?: string;
  isPeerReviewed?: boolean;
  videoUrl?: string;
  keywords?: string[];
  body?: PortableTextBlock[];
  author?: { name?: string } | null;
  coAuthors?: Array<{ name?: string }>;
  mainImage?: { url?: string; alt?: string; caption?: string };
  pdfUrl?: string;
  pdfDescription?: string;
  categories?: Array<{ title?: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch<Article | null>(POST_BY_SLUG_QUERY, { slug });

  if (!article) return { title: "Article not found | Harit Chetna" };

  const authors = [article.author?.name, ...(article.coAuthors || []).map((author) => author.name)]
    .filter((name): name is string => Boolean(name));

  return {
    title: article.title,
    description: article.subtitle,
    other: {
      citation_title: article.title,
      ...(authors.length ? { citation_author: authors } : {}),
      ...(article.publishedAt ? { citation_publication_date: article.publishedAt.slice(0, 10).replace(/-/g, "/") } : {}),
      citation_journal_title: "Harit Chetna",
      ...(article.volume ? { citation_volume: article.volume } : {}),
      ...(article.issue ? { citation_issue: article.issue } : {}),
      ...(article.pdfUrl ? { citation_pdf_url: article.pdfUrl } : {}),
    },
  };
}

function formatPublicationDate(date?: string) {
  return date
    ? new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date))
    : null;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await client.fetch<Article | null>(POST_BY_SLUG_QUERY, { slug });

  if (!article) notFound();

  const publicationDate = formatPublicationDate(article.publishedAt);
  return (
    <article className="mx-auto min-h-screen max-w-4xl px-4 py-16">
      <header className="border-b border-emerald-100 pb-8 dark:border-emerald-900">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {article.volume && <span>Volume {article.volume}</span>}
          {article.issue && <span>Issue {article.issue}</span>}
          {publicationDate && <time dateTime={article.publishedAt}>{publicationDate}</time>}
          {article.isPeerReviewed && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
              Peer-reviewed
            </span>
          )}
        </div>
        <h1 className="font-heading text-3xl font-bold leading-tight text-emerald-950 dark:text-emerald-100 md:text-5xl">
          {article.title}
        </h1>
        {article.doi && (
          <p className="mt-4 text-sm text-muted-foreground">
            DOI:{" "}
            <a
              href={`https://doi.org/${article.doi.replace(/^https?:\/\/doi\.org\//i, "")}`}
              className="text-emerald-700 underline dark:text-emerald-400"
            >
              {article.doi}
            </a>
          </p>
        )}
        <div className="mt-6 text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Lead Author: </span>
            {article.author?.name || "Author unavailable"}
          </p>
          {article.coAuthors?.length ? (
            <p className="mt-1">
              <span className="font-semibold text-foreground">Co-Authors: </span>
              {article.coAuthors.map((author) => author.name).filter(Boolean).join(", ")}
            </p>
          ) : null}
        </div>
      </header>

      {article.mainImage?.url && (
        <figure className="my-8">
          <Image
            src={article.mainImage.url}
            alt={article.mainImage.alt || ""}
            width={1200}
            height={800}
            sizes="(max-width: 896px) 100vw, 896px"
            className="max-h-[34rem] w-full rounded-xl object-cover"
          />
          {article.mainImage.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {article.mainImage.caption}
            </figcaption>
          )}
        </figure>
      )}

      {article.subtitle && (
        <section aria-labelledby="abstract-heading" className="my-10 rounded-xl bg-slate-50 p-6 dark:bg-slate-900">
          <h2 id="abstract-heading" className="mb-3 text-xl font-semibold text-emerald-900 dark:text-emerald-300">
            Abstract
          </h2>
          <p className="leading-relaxed text-muted-foreground">{article.subtitle}</p>
        </section>
      )}

      <div className="my-8 flex flex-wrap gap-4">
        {article.pdfUrl && (
          <a
            href={article.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            {article.pdfDescription || "Download Full PDF Article"}
          </a>
        )}
        {article.videoUrl && (
          <a
            href={article.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-700 px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-300 dark:hover:bg-emerald-950"
          >
            Watch supplementary video
          </a>
        )}
      </div>

      {article.categories?.length ? (
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Categories: </span>
          {article.categories.map((category) => category.title).filter(Boolean).join(", ")}
        </p>
      ) : null}
      {article.keywords?.length ? (
        <section aria-labelledby="keywords-heading" className="mb-10">
          <h2 id="keywords-heading" className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Index keywords
          </h2>
          <ul className="flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <li key={keyword} className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {keyword}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {article.body?.length ? (
        <section aria-label="Article text" className="space-y-5 leading-8 text-foreground">
          <PortableText value={article.body} />
        </section>
      ) : null}
    </article>
  );
}
