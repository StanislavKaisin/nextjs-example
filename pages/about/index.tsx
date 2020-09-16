import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { NextPageContext } from "next";

interface AboutPageProps {
  title: string;
}

export default function About({ title }: AboutPageProps) {
  const clickHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <MainLayout title={"About page"}>
        <h1>{JSON.stringify(title)}</h1>
        <button
          onClick={() => {
            Router.push("/");
          }}
        >
          Go back home
        </button>
        <button
          onClick={() => {
            Router.push("/posts");
          }}
        >
          Go to posts
        </button>
      </MainLayout>
    </>
  );
}

About.getInitialProps = async (ctx: NextPageContext) => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data: AboutPageProps = await response.json();
  return { title: data };
};
