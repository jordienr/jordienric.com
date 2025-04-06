import Link from "next/link";
import { Post } from "zenblog/dist/types";

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid gap-px">
      {posts?.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="grid rounded-xl py-2.5 transition-colors duration-300 px-3 border border-white text-slate-800 hover:border-slate-200"
        >
          <span className="font-medium">{post.title}</span>
          <span className="text-muted-foreground">{post.excerpt}</span>
        </Link>
      ))}
    </div>
  );
};
