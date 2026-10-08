import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
    (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");
  const paths = ["", "/about", "/editorial-board", "/archives", "/submit"];
  const articles = await client.fetch<Array<{ slug?: string; publishedAt?: string }>>(ALL_POSTS_QUERY);
  const staticEntries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
  const articleEntries: MetadataRoute.Sitemap = articles.flatMap((article) =>
    article.slug
      ? [{
          url: new URL(`/posts/${article.slug}`, baseUrl).toString(),
          lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        }]
      : [],
  );

  return [...staticEntries, ...articleEntries];
}