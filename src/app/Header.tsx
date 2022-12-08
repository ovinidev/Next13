"use client";
import { Flex, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex
      as="nav"
      bg="gray.900"
      w="100%"
      p="6"
      borderRadius="5px"
      align="center"
      px="24"
      fontSize="1.2rem"
    >
      <HStack>
        <Link href="/posts">
          <ChakraLink as="p">posts</ChakraLink>
        </Link>
        <Link href="/">
          <ChakraLink as="p">home</ChakraLink>
        </Link>
      </HStack>
    </Flex>
  );
}
