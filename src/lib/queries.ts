import { defineQuery } from 'next-sanity'

// Archive cards need these flattened fields; avoid unused media and category references.
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
    "pdfUrl": pdfFile.asset->url,
    keywords
  }
`)

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`)

// Article pages request full body content but only the author fields they render.
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
    "author": author->{ name },
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