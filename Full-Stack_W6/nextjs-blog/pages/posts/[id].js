import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, //contains the array of known paths returned by `getAllPostIds()`
    fallback: false, //will be explained later
  };
}

export default function Post() {
  return <Layout>...</Layout>;
}
