import { MainLayout } from "../components/MainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MyPost } from "../inerfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const json = await response.json();
      setPosts(json);
    }
    load();
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <h1>Posts page</h1>
        <h2>Loading...</h2>
      </MainLayout>
    );
  }
  return (
    <>
      <MainLayout>
        <h1>Posts page</h1>
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </MainLayout>
    </>
  );
}

Posts.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.req) {
    return { posts: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();
  return { posts };
};
