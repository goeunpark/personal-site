import type { NextPage } from "next";
import Header from "../../components/Header";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <div>
      {Header()}
      <div className="page-content">this is a blog page</div>
    </div>
  );
};

export default Blog;
