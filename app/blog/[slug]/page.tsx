/* eslint-disable @next/next/no-img-element */
import { ContentRenderer } from "@/components/ContentRenderer";
import { blog } from "@/lib/cms";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { slug },
}: any): Promise<Metadata> {
  const post = await blog.posts.getBySlug(slug);

  return {
    title: `${post.title} - Jordi Enric`,
    description: "A blog about design, engineering and other things.",
    openGraph: {
      images: [
        {
          url: `https://www.zenblog.com/api/og?title=${post.title}&emoji=🌴&url=jordienric.com`,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function Home({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await blog.posts.getBySlug(slug);

  return (
    <main className="px-2">
      {post.cover_image && (
        <img
          className="mx-auto max-w-4xl border"
          src={post.cover_image}
          alt={post.title}
        />
      )}
      <div className="prose mx-auto max-w-xl p-4">
        <h1 className="text-2xl font-medium mb-4">{post.title}</h1>
        <ContentRenderer content={post.content}></ContentRenderer>
      </div>
      <footer className="max-w-xl mx-auto py-16 border-t mt-6 px-4 text-slate-600 text-sm grid gap-2">
        <Link href="/blog">Back to blog</Link>
        <Link href="https://twitter.com/jordienr">find me on twitter</Link>
      </footer>
    </main>
  );
}
