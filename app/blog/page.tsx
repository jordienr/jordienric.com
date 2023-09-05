// import { createClient } from "@znd/client";
// import Link from "next/link";

export default async function Blog() {
  // const cms = createClient({
  //   blogId: "2df4362a-69a1-40a9-8e88-0aec66a70341",
  // });

  // const posts = await cms.posts.getAll();

  return (
    <div className="p-4">
      {/* <h1 className="font-semibold text-lg">Jordi Enric</h1>
      <h2>Blog</h2>
      {posts.map((p) => (
        <Link
          className="block text-blue-500 hover:underline"
          href={"/blog/" + p.slug}
          key={p.slug}
        >
          {p.title}
        </Link>
      ))} */}
    </div>
  );
}
