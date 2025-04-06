import { createZenblogClient } from "zenblog";

export const blog = createZenblogClient({
  blogId: process.env.ZENBLOG_BLOG_ID!,
});
