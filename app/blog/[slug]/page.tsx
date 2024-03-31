/* eslint-disable @next/next/no-img-element */
import { ContentRenderer } from "@/components/ContentRenderer";
import { blog } from "@/lib/cms";

export const dynamic = "force-dynamic";

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

        {/* <pre className="overflow-auto">
          {JSON.stringify(post.content, null, 2)}
        </pre> */}
      </div>
    </main>
  );
}
