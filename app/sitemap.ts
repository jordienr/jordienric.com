import { MetadataRoute } from "next";
import { blog } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts } = await blog.posts.list({});

  const baseUrl = "https://jordienric.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(post.published_at || ""),
  }));

  return [...staticRoutes, ...postRoutes];
}
