import styles from "./blog.module.css";
import PostCard from "@/components/postcard/postcard";

const BlogPage = () => (
  <div className={styles.container}>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
    <div className={styles.post}>
      <PostCard />
    </div>
  </div>
);

export default BlogPage;
