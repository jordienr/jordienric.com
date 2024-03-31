import { blog } from "@/lib/cms";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export default async function Blog() {
  const posts = await blog.posts.getAll();

  return (
    <div className="p-2 tracking-tight">
      <div className="flex items-center gap-2">
        <Link href="/" className="p-2">
          <ArrowLeft className="w-5 h-5 text-slate-500 hover:text-orange-500" />
        </Link>
        <h1 className="font-semibold text-lg">Jordi Enric · Blog</h1>
      </div>
      <div className="flex flex-col gap-1 mt-4 max-w-xl">
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
