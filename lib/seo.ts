import { Post, PostWithContent } from "zenblog/dist/types";

export const siteUrl = "https://jordienric.com";
export const siteName = "Jordi Enric";
export const siteDescription =
  "Writing, notes, and bookmarks from Jordi Enric, a software engineer at Supabase.";
export const author = {
  name: "Jordi Enric",
  url: siteUrl,
};

export function absoluteUrl(path = "") {
  if (!path) {
    return siteUrl;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPostUrl(post: Pick<Post, "slug">) {
  return absoluteUrl(`/writing/${post.slug}`);
}

export function getPostDescription(post: Pick<Post, "excerpt" | "title">) {
  return post.excerpt || `Read ${post.title} by ${author.name}.`;
}

export function getPostImage(post: Pick<Post, "cover_image" | "title">) {
  if (post.cover_image) {
    return absoluteUrl(post.cover_image);
  }

  const params = new URLSearchParams({
    title: post.title,
    emoji: "🌴",
    url: "jordienric.com",
  });

  return `https://www.zenblog.com/api/og?${params.toString()}`;
}

export function getValidDate(date?: string) {
  if (!date) {
    return undefined;
  }

  const parsed = new Date(date);

  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

export function getPostKeywords(post: Pick<Post, "tags" | "category">) {
  return [
    post.category?.name,
    ...post.tags.map((tag) => tag.name),
    "Jordi Enric",
    "Supabase",
    "software engineering",
  ].filter(Boolean) as string[];
}

export function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getPostJsonLd(post: PostWithContent) {
  const postUrl = getPostUrl(post);
  const image = getPostImage(post);
  const publishedAt = getValidDate(post.published_at)?.toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: getPostDescription(post),
    image: [image],
    url: postUrl,
    mainEntityOfPage: postUrl,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    keywords: getPostKeywords(post),
    articleSection: post.category?.name,
    articleBody: stripHtml(post.html_content || ""),
  };
}
