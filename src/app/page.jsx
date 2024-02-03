import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          {" "}
          We are a creative agency that specializes in branding, web design, and
          digital marketing.{" "}
        </p>
        <div className={styles.buttonList}>
          <button className={styles.button}> Learn More </button>
          <button className={styles.button}> Contact Us </button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/images/brands.png"
            className={styles.socialMediaIcon}
            alt=""
            fill
          />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/images/hero.gif" alt="home" fill />
      </div>
    </div>
  );
};

export default Home;
