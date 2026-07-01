import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="page-content about-page">
        <p>
          Goeun Park (b. 1994, Busan) is a writer from Minnesota. They are a
          graduate of Pomona College and the Iowa Writers{"'"} Workshop.
        </p>
        <p>
          <a href="mailto:contact@goeun.co">contact@goeun.co</a>
        </p>

        <br></br>
        <div className="colophon">
          <Link href="/colophon" passHref>
            <b>
              <i>colophon</i>
            </b>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
