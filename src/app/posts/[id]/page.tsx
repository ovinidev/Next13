"use client";
import { Flex, Text } from "@chakra-ui/react";
import { use } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

async function getDetails(id: string) {
  const post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }: PageProps) {
  const { title, body } = use(getDetails(params.id));

  return (
    <Flex px="24" direction="column" mt="2rem">
      <Text>{title}</Text>
      <Text>{body}</Text>
    </Flex>
  );
}
