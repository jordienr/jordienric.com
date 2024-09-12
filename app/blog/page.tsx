import { blog } from "@/lib/cms";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Jordi Enric - Blog",
  description: "A blog about design, engineering and other things.",
};
export default async function Blog() {
  const posts = await blog.posts.list();

  return (
    <div className="p-2 tracking-tight max-w-4xl mx-auto">
      <div className="p-2 py-8">
        <h1 className="text-2xl font-medium">/blog</h1>
        <p className="text-slate-400">
          Powered by zenblog.com, my blogging CMS.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            className="flex flex-col hover:text-orange-500 text-slate-800 transition-all p-1.5  border-b border-transparent"
            key={post.slug}
            href={"/blog/" + post.slug}
          >
            {post.cover_image ? (
              <img
                className="w-full h-44 object-cover rounded-xl"
                width="400"
                height="200"
                src={post.cover_image}
                alt={post.title}
              />
            ) : (
              <div className="w-full h-44 bg-slate-100 rounded-xl text-4xl flex justify-center items-center">
                ✏️
              </div>
            )}
            <span className="font-medium col-span-3 font-serif text-xl mt-1">
              {post.title}
            </span>
            <span className="text-slate-400 font-mono">
              {new Date(post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
