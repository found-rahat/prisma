import { Suspense } from "react";
import Menu from "../menu";
import Author from "./Auther";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export default async function PostSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filterPosts = posts.filter((posts) => posts.id % 10 === 1);

  return (
    <>
      <Menu />
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filterPosts.map((post) => (
            <div
              key={post.id}
              className="bg-amber-400 shadow-md rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
              <Suspense
                fallback={
                  <div className="text-sm text-black">Loading......</div>
                }
              >
                <Author userId={post.userId} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
