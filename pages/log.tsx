import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header";

const Log: NextPage = () => {
  return (
    <div>
      {Header()}
     this is log page
    </div>
  )
}

export default Log;
