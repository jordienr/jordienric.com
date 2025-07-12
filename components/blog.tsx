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
      <h2 className="font-semibold p-1 mb-4 px-3 group mt-12">
        <Link href={getHref("thought")} className={classNames("thought")}>
          Thoughts
        </Link>
        ,{" "}
        <Link href={getHref("note")} className={classNames("note")}>
          notes
        </Link>{" "}
        <span className="font-serif italic font-thin text-lg text-slate-600">
          &
        </span>{" "}
        <Link href={getHref("bookmark")} className={classNames("bookmark")}>
          bookmarks
        </Link>
      </h2>

      <div className="grid gap-px">
        {posts.length === 0 && (
          <div className="text-slate-500 p-3 font-serif italic">
            Nothing here yet.
          </div>
        )}
        <div className="border-x border-t">
          {posts?.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="group hover:bg-white"
            >
              <Link
                href={`/writing/${post.slug}`}
                className="transition-colors py-2 text-slate-800 grid relative group-hover:bg-blue-500 group-hover:text-white"
              >
                <div className="flex gap-2 px-3 py-2.5">
                  <div className="flex items-center mr-2 ml-1">
                    {post.tags.length > 0 && (
                      <Icon
                        className="text-slate-400 group-hover:text-white"
                        icon={post.tags[0].name}
                      />
                    )}
                  </div>
                  <div className="grid">
                    <span className="font-medium">{post.title}</span>
                    <span className="text-muted-foreground group-hover:text-white/80">
                      {post.excerpt}
                    </span>
                  </div>
                  <div className="opacity-0 flex items-center group-hover:opacity-100 ml-auto mr-1.5 transition-all group-hover:text-white">
                    <Icon icon="arrowRight" height={18} width={18} />
                  </div>
                </div>
              </Link>
              <hr className="border-slate-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
