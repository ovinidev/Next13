"use client";
import { Stack, Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/link";
import { use } from "react";

async function getPosts() {
  const posts = await fetch("https://dummyjson.com/posts?limit=6");

  return posts.json();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { posts } = use(getPosts());

  return (
    <Box>
      <title>Posts</title>
      {children}

      <Stack spacing="2" mt="2rem" fontSize="1.2rem">
        {posts?.map((product: any) => {
          return (
            <Link key={product.id} href={`/posts/${product.id}`}>
              <ChakraLink>{product.title}</ChakraLink>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}
