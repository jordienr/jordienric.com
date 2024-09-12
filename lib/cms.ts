import { createZenblogClient } from "zenblog";

export const blog = createZenblogClient({
  accessToken: process.env.ZENBLOG_ACCESS_TOKEN!,
});
