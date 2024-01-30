import { blog } from "@/lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await blog.posts.getAll();

  return (
    <div className="p-4">
      <h1 className="font-semibold text-lg">Blog</h1>
      <div className="flex flex-col gap-2 mt-4">
        {posts.map((post) => (
          <Link
            className="flex gap-6"
            key={post.slug}
            href={"/blog/" + post.slug}
          >
            <span className="text-slate-500">
              {new Date(post.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="font-medium">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
