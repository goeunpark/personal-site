import { useRouter } from "next/router";
import Link from "next/link";
import bio from "../pages/bio";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">Goeun Park</Link>
      </div>
      <ul>
        <li>
          <Link href="/bio">bio</Link>
        </li>
        <li>
          <Link href="/log">log</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
      </ul>
    </header>
  );
}
