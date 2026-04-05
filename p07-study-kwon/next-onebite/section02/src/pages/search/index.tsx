import { useRouter } from "next/router";

export default function Page() {
  /**
   * 쿼리스트링을 어떻게 전달하고 받아서 쓸 수있게 할거냐
   * 예시) localhost:3000/search?q=이정환
   * -> useRouter를 불어오면 된다. "next/router"는 페이지 라우터 // "next/navigator"는 앱 라우터
   */

  const router = useRouter();
  // console.log(router);
  /**
   *  로그가 두번 찍힌다. localhost:3000/search?q=이정환 를 입력해도 선  로그가 두번 찍힌다. 선) localhost:3000/search -> 후) localhost:3000/search?q=이정환가 차례대로 url 브라우저가 요청하게끔 V8엔진이 돌기 때문이다.
   */

  const { q } = router.query;
  return <h1>Search</h1>;
}
