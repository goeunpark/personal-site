import type { NextPage } from "next";
import styles from "./colophon.module.scss";
import Layout from "../../components/Layout";

const Colophon: NextPage = () => {
  return (
    <Layout>
      <div className={styles.index}>
        <h1 className={styles.colophonHeader}>colophon</h1>
        <div className={styles.textBlock}>
          This website was first created in November, 2021. According to weather
          records, it was overcast and drizzling that day in Seattle, a high of
          45°F (7.2°C) and low of 39°F (3.9°C). I was likely sitting next to a
          large window facing a barren, half-shaven maple tree. For over a year,
          this website was mostly a blank page that said{" "}
          <i>Under construction!</i>
          <p></p>I worked on this website again between late January and early
          Feburary 2023. Afterwards, I wrote: {'"'}This website is created using
          Next.js and deployed on Vercel, which in turn is hosted by Amazon Web
          Services (AWS). I am writing this from my computer in Seattle, WA. The
          computer that is loading this page on your phone or laptop or desktop
          lives in one of
          <a
            className={styles.link}
            href="https://vercel.com/docs/concepts/edge-network/regions#region-list"
          >
            {" "}
            these cities
          </a>
          . This entire website was overkill and I wouldn{"'"}t do this again.
          {'"'} It{"'"}s true, I don{"'"}t know why I made this with Next.js!
          This doesn{"'"}t need server side rendering! Astro might have been a
          nice alternative. Or any other static site generator, really.
          <p />
          For the next three and a half years, I rearranged some words in my
          bio. On June 2026, I added this colophon while sitting next to friends
          in an air conditioned cafe. Outside, it was about 90°F (32.2°C) and
          very sunny and humid. I used iTerminal and VS Code. It took me hours
          to figure out what anything was! So tempting to trash this{" "}
          <a
            className={styles.link}
            href="https://github.com/goeunpark/personal-site"
          >
            repository
          </a>{" "}
          and just do everything in HTML and CSS like I did twenty years
          ago...but I also like knowing that at one point, I sort of knew what I
          was doing and wrote/copy-pasted everything by hand. I would like to
          continue building a website this way: slowly, laboriously, cheerfully.
          🍊
          <p />
          <div className={styles.signature}>
            Goeun <p />
            <i>
              Iowa City, Iowa <p />
              30 June 2026
            </i>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Colophon;
