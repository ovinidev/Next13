/* eslint-disable react/jsx-key */
import Link from "next/link";
import { use } from "react";

async function getPosts() {
  const posts = await fetch("https://dummyjson.com/posts?limit=6");

  return posts.json();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { posts } = use(getPosts());

  return (
    <div>
      <ul>
        {posts.map((product: any) => {
          return (
            <Link href={`/posts/${product.id}`}>
              <h1>{product.title}</h1>
            </Link>
          );
        })}
      </ul>
      <div>{children}</div>
    </div>
  );
}
