import { useRouter } from "next/router";
import Link from "next/link";
// import about from "../pages/about";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">Goeun Park</Link>
      </div>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </header>
  );
}
