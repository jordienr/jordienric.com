import { PostList } from "@/components/blog";
import { blog } from "@/lib/cms";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tag: string }>;
}) {
  const { tag } = await searchParams;
  const { data: posts } = await blog.posts.list({
    tags: tag ? [tag] : undefined,
  });

  return (
    <div className="container">
      <section className="mt-4">
        <PostList posts={posts} />
      </section>
    </div>
  );
}
