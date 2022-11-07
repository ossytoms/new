import { useRouter } from "next/router";

function Article() {
  const router = useRouter();

  const articlename = router.query.newsId;
  return <h1>{articlename}</h1>;
}

export default Article;
