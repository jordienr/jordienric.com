"use client";

import Link from "next/link";
import { Post } from "zenblog/dist/types";
import { Icon } from "./icon";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <div className="">
          {posts?.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: idx * 0.1 + 0.1 }}
              className="group"
            >
              <Link
                href={`/writing/${post.slug}`}
                className="transition-colors rounded-xl duration-150 border  text-slate-800 border-slate-200 bg-white grid group-hover:border-slate-300"
              >
                {post.cover_image ? (
                  <div className="relative px-1.5 pt-1.5">
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="object-cover h-[280px] w-full rounded-lg object-top"
                    />
                  </div>
                ) : null}
                <div className="flex gap-2 px-3 py-2.5">
                  <div className="mt-1">
                    {post.tags.length > 0 && (
                      <Icon
                        className="text-slate-400"
                        icon={post.tags[0].name}
                      />
                    )}
                  </div>
                  <div className="grid">
                    <span className="font-medium">{post.title}</span>
                    <span className="text-muted-foreground">
                      {post.excerpt}
                    </span>
                  </div>
                </div>
              </Link>
              <hr className="my-2 mx-4 border-slate-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
