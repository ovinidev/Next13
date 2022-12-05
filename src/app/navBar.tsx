"use client";
import { Flex, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex
      as="nav"
      bg="gray.900"
      w={200}
      p="4"
      borderRadius="5px"
      align="center"
      justify="center"
    >
      <HStack>
        <Link href="/posts">
          <ChakraLink>posts</ChakraLink>
        </Link>
        <Link href="/">
          <ChakraLink>home</ChakraLink>
        </Link>
      </HStack>
    </Flex>
  );
}
