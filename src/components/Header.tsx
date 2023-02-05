import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const page = router.pathname.substring(1);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">Goeun Park</Link>
      </div>
      <ul>
        <li>
          <Link
            href="/about"
            className={page == "about" ? styles.page : styles.a}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={page.includes("blog") ? styles.page : styles.a}
          >
            blog
          </Link>
        </li>
      </ul>
    </header>
  );
}
