"use client";
import { Stack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { use } from "react";

async function getPosts() {
  const posts = await fetch("https://dummyjson.com/posts?limit=6");

  return posts.json();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { posts } = use(getPosts());

  return (
    <main>
      <title>Posts</title>
      {children}

      <Stack spacing="2" mt="2rem" px="24" fontSize="1.2rem">
        {posts?.map((product: any) => {
          return (
            <Link key={product.id} href={`/posts/${product.id}`}>
              <ChakraLink>{product.title}</ChakraLink>
            </Link>
          );
        })}
      </Stack>
    </main>
  );
}
