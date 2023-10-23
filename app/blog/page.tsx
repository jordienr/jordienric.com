// import { createClient } from "@znd/client";

export default async function Blog() {
  // const cms = createClient({
  //   blogId: "2df4362a-69a1-40a9-8e88-0aec66a70341",
  // });

  // const posts = await cms.posts.getAll();

  return (
    <div className="p-4">
      <h1 className="font-semibold text-lg">Blog</h1>
      {/* {JSON.stringify(posts)} */}
    </div>
  );
}
