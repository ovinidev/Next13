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
        <link
          rel="shortcut icon"
          href="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />

          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
