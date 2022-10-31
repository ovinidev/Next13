/* eslint-disable @next/next/no-html-link-for-pages */
import NavBar from "./navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />

        <div>{children}</div>
      </body>
    </html>
  );
}
