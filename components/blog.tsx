"use client";

import Link from "next/link";
import { Post } from "zenblog/dist/types";
import { Icon } from "./icon";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const PostList = ({ posts }: { posts: Post[] }) => {
  const params = useSearchParams();

  const hasTag = params.get("tag");
  const isActive = (tag: string) => {
    return hasTag === tag;
  };

  const classNames = (tag: string) =>
    cn("text-slate-800 py-2 hover:underline transition-all", {
      "text-slate-400": hasTag,
      "text-slate-800": isActive(tag),
    });

  const getHref = (tag: string) => {
    if (hasTag && isActive(tag)) {
      return `/`;
    }
    return `/?tag=${tag}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="font-medium group my-4 space-x-1 *:px-3 *:h-10 *:bg-slate-100 *:rounded-full">
        <Link href={getHref("thought")} className={classNames("thought")}>
          Thoughts
        </Link>
        
        <Link href={getHref("note")} className={classNames("note")}>
          Notes
        </Link>

        <Link href={getHref("bookmark")} className={classNames("bookmark")}>
          Bookmarks
        </Link>
      </div>

      <div className="grid gap-px">
        {posts.length === 0 && (
          <div className="text-slate-500 p-3 font-serif italic">
            Nothing here yet.
          </div>
        )}
        <div className="divide-y">
          {posts?.map((post, idx) => (
            <div
              className="group"
            >
              <Link
                href={`/writing/${post.slug}`}
                className="py-3 px-3 text-slate-800 flex"
              >
                
                  <div className="grid">
                    <span className="font-medium">{post.title}</span>
                    <span className="text-muted-foreground group-hover:text-blue-500/80">
                      {post.excerpt}
                    </span>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
