import { useRouter } from "next/router";
/**
 *
 * Optional Catch All Segment -- index.tsx 없이 동적 경로인 ...id를 포함하여 해당 페이지를 대응한다
 */
export default function Page() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  console.log(id);
  return <h1>book id: {id}</h1>;
}
