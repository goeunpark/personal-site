import Link from "next/link";
import styles from "./PostPreview.module.scss";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, author, slug }: Props) => {
  return (
    <div className={styles.preview}>
      <Link as={`/blog/${slug}`} href="/blog/[slug]" className={styles.title}>
        {title}
      </Link>
      <p>
        <i>{date}</i>
      </p>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
