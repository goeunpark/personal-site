import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Log: NextPage = () => {
  return (
    <div>
      {Header()}
      <div className="page-content">this is log page</div>
    </div>
  );
};

export default Log;
