import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>글로벌 해더</header>
      <Component {...pageProps} />
    </>
  );
}
