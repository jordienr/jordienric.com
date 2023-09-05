"use client";
// import { createClient } from "@znd/client";
// import { ContentRenderer } from "@znd/ui";

export default async function Blog({ params }: { params: { slug: string } }) {
  // const cms = createClient({
  //   blogId: "2df4362a-69a1-40a9-8e88-0aec66a70341",
  // });

  const { slug } = params;

  // const post = await cms.posts.getBySlug(slug as string);

  return (
    <div className="p-4">
      {/* <h1 className="font-semibold text-lg">Blog</h1>
      <h2 className="font-semibold text-lg">{post.title}</h2> */}
      {/* <ContentRenderer content={post.content} /> */}
    </div>
  );
}
