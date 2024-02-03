import Image from "next/image";
import styles from "./singlepost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/8125318/pexels-photo-8125318.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>SinglePostPage</h1>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/8125318/pexels-photo-8125318.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />

          <div className={styles.detailsText}>
            <h3 className={styles.detailTitle}>Author</h3>
            <span className={styles.detailsValue}>Karl Kemadjou</span>
          </div>
          <div className={styles.detailsText}>
            <h3 className={styles.detailTitle}>Published</h3>
            <span className={styles.detailsValue}>02/02/2024</span>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quae, quos, voluptatem voluptatibus doloribus nemo
            consequatur repellat pariatur voluptatum dolorum. Quisquam voluptas,
            quae, quos, voluptatem voluptatibus doloribus nemo consequatur
            repellat pariatur voluptatum dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
