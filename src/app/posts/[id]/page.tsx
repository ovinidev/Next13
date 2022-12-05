import { use } from "react";

async function getDetails(id: any) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }: any) {
  const { title, body } = use(getDetails(params.id));

  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}
