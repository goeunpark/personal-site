import type { NextPage } from "next";
import Layout from "../../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="page-content about-page">
        <p>Goeun Park is a writer and computer science educator.</p>
        <p>
          Goeun has a BA in Psychology from Pomona College and DACA from the
          United States government. Formerly, they worked as a research
          specialist, software engineer, and hotline crisis counselor.
          Currently, they are working on a speculative short story collection
          and this website.
        </p>
        <p>
          <a href="https://read.cv/goeun">cv</a>
          <br></br>
          <a href="mailto:contact@goeun.co">contact@goeun.co</a>
        </p>
      </div>
    </Layout>
  );
};

export default About;
