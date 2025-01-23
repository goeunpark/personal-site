import type { NextPage } from "next";
import Layout from "../../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="page-content about-page">
        <p>
          Goeun Park (b. Busan, Korea) is a writer from Northern Minnesota. They
          are currently a Truman Capote Fellow at the Iowa Writers Workshop.
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
