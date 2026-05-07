import { MetadataRoute } from "next";
import { blog } from "@/lib/cms";
import { getPostUrl, getValidDate, siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts } = await blog.posts.list({});

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: now,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getPostUrl(post),
    lastModified: getValidDate(post.published_at) || now,
  }));

  return [...staticRoutes, ...postRoutes];
}
