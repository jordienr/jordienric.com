import { PostList } from "@/components/blog";
import { blog } from "@/lib/cms";
import {
  author,
  getPostDescription,
  getPostImage,
  getPostUrl,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tag: string }>;
}) {
  const { tag } = await searchParams;
  const { data: posts } = await blog.posts.list({
    tags: tag ? [tag] : undefined,
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}#blog`,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: getPostDescription(post),
      url: getPostUrl(post),
      image: getPostImage(post),
      datePublished: post.published_at,
    })),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="mt-4">
        <PostList posts={posts} />
      </section>
    </div>
  );
}
