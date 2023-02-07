import PostPreview from "./PostPreview";
import styles from "./PostIndex.module.scss";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
};

type Props = {
  posts: Post[];
};

const PostIndex = ({ posts }: Props) => {
  return (
    <section>
      <div className={styles.index}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default PostIndex;
