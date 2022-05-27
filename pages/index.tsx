import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>goeun park 💌</title>
        <meta
          name="description"
          content="website of goeun park, writer & developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap`);
        </style>
      </Head>

      {Header()}

      <main className="page-content">
        <p>🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍</p>
        <p>🏠 goeun.co is under construction!</p>
        <p>🖤 🤍 🖤 🤍 🖤 🤍 🖤 🤍 🖤</p>
      </main>
    </div>
  );
};

export default Home;
