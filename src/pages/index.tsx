import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

const Home: NextPage = () => {
  const persimmonAltTag =
    "This is a photo of persimmon trees next to my grandmother's backyard.";

  const rocksAltTag = "This is a photo of rocks on the way to Mount Pilchuck. ";
  return (
    <>
      <Layout>
        <Head>
          <title>goeun park 💌</title>
          <meta
            name="description"
            content="website of goeun park, writer & developer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="home-page">
          <Image
            className="landing-pic"
            src="/persimmons.jpeg"
            alt={persimmonAltTag}
            width="379"
            height="506"
          />
          <Image
            className="landing-pic"
            src="/rocks.jpeg"
            alt={rocksAltTag}
            width="379"
            height="506"
          />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author"]);

  return {
    props: { allPosts },
  };
};

export default Home;
