import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/posts">posts</Link>
      <Link href="/">home</Link>
    </nav>
  );
}
