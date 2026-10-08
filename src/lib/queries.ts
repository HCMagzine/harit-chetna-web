import { defineQuery } from 'next-sanity'

// 1. Query for listing all posts on the Homepage / Magazine Index
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    volume,
    issue,
    doi,
    isPeerReviewed,
    "authorName": author->name,
    "coAuthors": coAuthors[]->{ name },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt,
      "caption": mainImage.caption
    },
    "pdfUrl": pdfFile.asset->url,
    videoUrl,
    keywords,
    "categories": categories[]->{ title }
  }
`)

// 2. Query for fetching a single full article page by slug
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    publishedAt,
    volume,
    issue,
    doi,
    isPeerReviewed,
    videoUrl,
    keywords,
    body,
    "author": author->{ name, image, bio },
    "coAuthors": coAuthors[]->{ name },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt,
      "caption": mainImage.caption
    },
    "pdfUrl": pdfFile.asset->url,
    "pdfDescription": pdfFile.description,
    "categories": categories[]->{ title }
  }
`)