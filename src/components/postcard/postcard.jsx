import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";

const PostCard = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/8125318/pexels-photo-8125318.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <span className={styles.date}>12.12.2020</span>
    </div>

    <div className={styles.bottom}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, quae, quos, voluptatem voluptatibus doloribus nemo consequatur
        repellat pariatur voluptatum dolorum. Quisquam voluptas, quae, quos,
        voluptatem voluptatibus doloribus nemo consequatur repellat pariatur
        voluptatum dolorum.
      </p>
      <Link className={styles.link} href="/blog/post">
        Read More
      </Link>
    </div>
  </div>
);

export default PostCard;
