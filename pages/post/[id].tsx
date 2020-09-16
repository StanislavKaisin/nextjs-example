import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MyPost } from "../../inerfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps {
  post: MyPost;
}

export default function Post({ post: serverPost }: PostsPageProps) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `${process.env.API_URL}/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!post) {
    return (
      <MainLayout>
        <h2>Loading...</h2>
      </MainLayout>
    );
  }
  return (
    <>
      <MainLayout>
        {/* <h1>Post {router.query.id}</h1> */}
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`http://localhost:3000/posts`}>
          <a>Back to posts</a>
        </Link>
      </MainLayout>
    </>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async (ctx: PostNextPageContext) => {
  if (!ctx.req) {
    return { post: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
  const post: MyPost = await response.json();
  return { post };
};

/*
export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return { props: { post } };
}
*/
