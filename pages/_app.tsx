import "../styles/main.css";
import NextNprogress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition="0.3"
        stopDelayMs="500"
        height="4"
      />
      <Component {...pageProps} />
    </>
  );
}
