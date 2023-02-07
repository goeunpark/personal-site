import type { NextPage } from "next";
import { getAllPosts } from "../../lib/api";
import Layout from "../../components/Layout";
import PostIndex from "../../components/PostIndex";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
};

type Props = {
  allPosts: Post[];
};
const Blog = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <Layout>
      <div className="blog-page">
        <PostIndex posts={posts} />
      </div>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
