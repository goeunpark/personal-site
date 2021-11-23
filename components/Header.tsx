import { useRouter } from "next/router";
import Link from "next/link";
import bio from "../pages/bio";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
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
};
