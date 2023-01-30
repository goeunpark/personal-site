import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { getAllPosts } from "../lib/api";

const Home: NextPage = () => {
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
          <p>🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍</p>
          <p>🏠 goeun.co is under construction!</p>
          <p>🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤</p>
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
