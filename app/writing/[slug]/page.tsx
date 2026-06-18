import { ContentRenderer } from "@/components/content-renderer";
import { blog } from "@/lib/cms";
import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { CustomImage } from "@/components/CustomImage";
import {
  author,
  getPostDescription,
  getPostImage,
  getPostJsonLd,
  getPostKeywords,
  getPostUrl,
  getValidDate,
  siteName,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await blog.posts.get({ slug });
  const postUrl = getPostUrl(post);
  const description = getPostDescription(post);
  const image = getPostImage(post);
  const publishedAt = getValidDate(post.published_at)?.toISOString();
  const authorNames = Array.from(
    new Set([author.name, ...post.authors.map((postAuthor) => postAuthor.name)])
  );
  const metadataAuthors = authorNames.map((name) =>
    name === author.name ? author : { name }
  );

  return {
    title: post.title,
    description,
    authors: metadataAuthors,
    keywords: getPostKeywords(post),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description,
      siteName,
      publishedTime: publishedAt,
      authors: authorNames,
      tags: post.tags.map((tag) => tag.name),
      images: [
        {
          url: image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { slug } = await params;
  const { data: post } = await blog.posts.get({ slug });
  const jsonLd = getPostJsonLd(post);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div className="p-3">
          <p className="text-sm font-medium text-slate-400">
            {formatDate(post.published_at || "")}
          </p>
          <h1 className="text-3xl font-medium text-slate-800">{post.title}</h1>
        </div>
      <div className="bg-white border max-w-6xl mx-auto mt-6 px-4 py-2 rounded-2xl">
        {post.cover_image && (
          <div className="p-3">
            <CustomImage
              className=""
              src={post.cover_image}
              height="400"
              width={(16 / 9) * 400}
              loading="lazy"
              alt={post.title || "Cover image"}
            />
          </div>
        )}
        <div className="overflow-auto p-3">
          <ContentRenderer content={post.html_content || ""} />
        </div>
      </div>      
    </div>
  );
}
