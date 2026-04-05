import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

/** 과연 */
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };
  return (
    <>
      {/* 주석 명령어 까다롭네.. jsx안에서는 이렇게 */}
      {/* shift + alt + a */}
      <Link href="/">index</Link>
      &nbsp;
      <Link href="/search">search</Link>
      &nbsp;
      <Link href="/book/1">book/1</Link>
      &nbsp;
      <div>
        <button onClick={onClickButton}>/test 페이지 이동</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}
