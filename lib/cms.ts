import { createClient } from "zenblog";

function getBlogId() {
  const blogId = process.env.BLOG_ID;
  if (!blogId) {
    throw new Error("Please set BLOG_ID in .env.local");
  }

  return blogId;
}

export const blog = createClient({
  blogId: getBlogId(),
  debug: true,
});
