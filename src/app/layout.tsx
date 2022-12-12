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
        <script
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "ex63wnhjkq");`,
          }}
        />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />

          <Flex direction="column" px="24">
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
