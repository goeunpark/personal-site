import { useRouter } from "next/router";
import Link from "next/link";
import bio from "../pages/bio";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          <a>Goeun Park</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/bio">
            <a>bio</a>
          </Link>
        </li>
        <li>
          <Link href="/log">
            <a>log</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
