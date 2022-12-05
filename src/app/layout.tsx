"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import NavBar from "./navBar";

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
          <NavBar />

          <div>{children}</div>
        </ChakraProvider>
      </body>
    </html>
  );
}
