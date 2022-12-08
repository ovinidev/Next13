"use client";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import Header from "./Header";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />

          <div>{children}</div>
        </ChakraProvider>
      </body>
    </html>
  );
}
