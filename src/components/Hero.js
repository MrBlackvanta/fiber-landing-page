import star from "../assets/star.svg";
import checkmark from "../assets/checkmark.svg";
import hero from "../assets/hero-illustration.png";

import styles from "./Hero.module.scss";

const Hero = () => {
  const stars = (
    <div className={styles["hero-stars"]}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );

  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-text"]}>
        <div className={styles["hero-rate-box"]}>
          {stars}
          <p>Rated 4.8/5 (243 reviews)</p>
        </div>

        <h1 className={styles["hero-title"]}>
          Create your portfolio in minutes.
        </h1>

        <p className={styles["hero-description"]}>
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>

        <div className={styles["hero-btns"]}>
          <button className={styles["btn"]}>Start Free Trial</button>
          <a className={styles["link"]} href="#">
            View Examples
          </a>
        </div>

        <div className={styles["hero-offers"]}>
          <div className={styles["offer"]}>
            <img src={checkmark} alt="Check mark" />
            <p>No Credit Card Required</p>
          </div>

          <div className={styles["offer"]}>
            <img src={checkmark} alt="Check mark" />
            <p>10 Free Templates</p>
          </div>
        </div>
      </div>

      <div className={styles["hero-img"]}>
        <img
          src={hero}
          alt="vr person wearing vr goggles and icons floating above his head"
          className={styles["hero"]}
        />
      </div>
    </section>
  );
};

export default Hero;
