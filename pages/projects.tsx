import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Projects: NextPage = () => {
  return (
    <div>
      {Header()}
      <div className="page-content">this is proj page</div>
    </div>
  );
}

export default Projects;
