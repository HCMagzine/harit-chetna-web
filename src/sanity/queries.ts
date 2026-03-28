/**
 * Sanity GROQ Queries
 */

export const latestBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishDate desc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    publishDate,
    author,
    content,
    "featuredImageUrl": featuredImage.asset->url,
    youtubeVideoUrl
  }
`;

export const latestMagazineIssueQuery = `
  *[_type == "magazineIssue"] | order(monthYear desc, volumeNumber desc, issueNumber desc)[0] {
    _id,
    volumeNumber,
    issueNumber,
    monthYear,
    "coverImageUrl": coverImage.asset->url,
    "pdfUrl": pdfFile.asset->url
  }
`;
