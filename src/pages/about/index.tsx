import type { NextPage } from "next";
import Layout from "../../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="page-content about-page">
        <p>
          Goeun Park (b. 1994 Busan) is a writer from Minnesota. They are a
          graduate of Pomona College and the Iowa Writers' Workshop.
        </p>
        <p>
          <br></br>
          <a href="mailto:contact@goeun.co">contact@goeun.co</a>
        </p>
      </div>
    </Layout>
  );
};

export default About;
