import Link from "next/link";

import { MainLayout } from "../components/MainLayout";

export default function Index(params) {
  //
  return (
    <>
      <MainLayout>
        <h1>Hello NEXT.js</h1>
        <Link href="/about">
          <a>about</a>
        </Link>
        <hr />
        <Link href="/posts">
          <a>posts</a>
        </Link>
      </MainLayout>
      <p>lorem</p>
    </>
  );
}
