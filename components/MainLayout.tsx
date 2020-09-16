import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Nextjs example" }) {
  return (
    <>
      <Head>
        <title>{title} | Nextjs example</title>
        <meta name="keywords" content="nextjs, js" />
        <meta name="description" content="nextjs example" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      {/* <style jsx global>{` */}
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
      <main>{children}</main>
    </>
  );
}
