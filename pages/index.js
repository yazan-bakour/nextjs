import Layout from '../comps/Mainlayout';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/posts?id=${props.id}`} as={`/posts/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink id="iphone-10" />
        <PostLink id="iphone-11" />

        {/* <li>
          <Link href="/posts/[id]/[hello]" as={`/posts/${id}/iphone-10`}>
            <a>iphone-10</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/[hello]" as={`/posts/iphone-11`}>
            <a>iphone-11</a>
          </Link>
        </li> */}
      </ul>
    </Layout>
  );
}