import type { NextPage } from 'next';
import Header from "../components/Header";
import Head from 'next/head';

const Bio: NextPage = () => {
  return (
    <div>
      {Header()}
      <div className="page-content">this is bio page</div>
    </div>
  );
}

export default Bio;