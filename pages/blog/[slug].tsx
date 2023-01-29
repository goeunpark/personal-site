import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

type Params = {
  params: {
    slug: string;
  };
};

export default function Post(props: any) {
  const router = useRouter();
  console.log("inside slug txt", props);
  if (!router.isFallback && !props.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </div>
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
