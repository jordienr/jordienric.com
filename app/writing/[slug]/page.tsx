/* eslint-disable @next/next/no-img-element */

import { ContentRenderer } from "@/components/content-renderer";
import { blog } from "@/lib/cms";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params: { slug },
}: any): Promise<Metadata> {
  const { data: post } = await blog.posts.get({ slug });

  return {
    title: `${post.title} - Jordi Enric`,
    description: post.excerpt,
    authors: {
      name: "Jordi Enric",
      url: "https://jordienric.com",
    },
    alternates: {
      canonical: `https://jordienric.com/writing/${post.slug}`,
    },
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
  const { data: post } = await blog.posts.get({ slug });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="container">
        <Link
          href="/"
          className="flex items-center gap-2 size-8 justify-center mx-1 hover:bg-slate-50 rounded-xl text-slate-500 hover:text-slate-700 transition-all"
        >
          <HiArrowUturnLeft className="w-4 h-4" />
        </Link>
        <div className="p-3">
          <p className="text-sm font-medium text-slate-400">
            {formatDate(post.published_at || "")}
          </p>
          <h1 className="text-3xl font-medium font-serif text-slate-800">
            {post.title}
          </h1>
        </div>
        <div className="p-3">
          {post.cover_image && (
            <img
              className="rounded-lg"
              src={post.cover_image}
              height="400"
              width={(16 / 9) * 400}
              loading="lazy"
              alt={post.title || "Cover image"}
            />
          )}
        </div>
        <div className="overflow-auto p-3">
          <ContentRenderer content={post.html_content || ""} />
        </div>
      </div>
    </div>
  );
}
