import { blog } from "@/lib/cms";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jordi Enric - Blog",
  description: "A blog about design, engineering and other things.",
};
export default async function Blog() {
  const posts = await blog.posts.getAll();

  return (
    <div className="p-2 tracking-tight max-w-xl mx-auto">
      <div className="flex items-center p-2">
        <h1 className="text-sm">Blog</h1>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        {posts.map((post) => (
          <Link
            className="grid grid-cols-4 gap-1.5 text-sm items-center font-medium hover:text-orange-500 text-slate-800 transition-all p-1.5 hover:border-slate-300 border-b border-transparent"
            key={post.slug}
            href={"/blog/" + post.slug}
          >
            <span className="text-slate-500">
              {new Date(post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="font-medium col-span-3">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
