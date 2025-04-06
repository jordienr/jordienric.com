import { PostList } from "@/components/blog";
import { blog } from "@/lib/cms";

export default async function Home() {
  const { data: posts } = await blog.posts.list();

  return (
    <div className="container">
      <section className="mt-4">
        <h2 className="font-semibold p-1 mb-4 px-3">
          Thoughts, notes{" "}
          <span className="font-serif italic font-thin text-lg text-slate-600">
            &
          </span>{" "}
          bookmarks
        </h2>

        <PostList posts={posts} />
      </section>
    </div>
  );
}
