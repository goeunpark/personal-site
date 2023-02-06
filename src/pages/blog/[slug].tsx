import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/Layout";

type Params = {
  params: {
    slug: string;
  };
};

export default function Post(props: any) {
  const router = useRouter();
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <h1>{props.post.title}</h1>
      <h3>{props.post.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </Layout>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
