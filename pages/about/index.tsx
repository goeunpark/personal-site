import type { NextPage } from "next";
import Header from "../../components/Header";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      {Header()}
      <div className="page-content">this is an about page</div>
    </div>
  );
};

export default About;
