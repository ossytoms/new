import { Fragment } from 'react'
import Link from 'next/link'

function NewsPage(){
return (
  <Fragment>
    <h1>NewsPage</h1>
    <ul>
      <li>
        <Link href="/news/article-1">Article 1</Link>
      </li>
      <li>Article 2</li>
      <li>Article 3</li>
    </ul>
  </Fragment>
);
}

export default NewsPage;