import { use } from "react";

async function getDetails(id: any) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }: any) {
  const post = use(getDetails(params.id));

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
