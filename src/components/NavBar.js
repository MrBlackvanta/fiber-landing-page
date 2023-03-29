import { useState } from "react";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isPhoneNavOpened, setisPhoneNavOpened] = useState(false);

  const phoneNavHandler = () => {
    setisPhoneNavOpened((prev) => !prev);
  };
  const links = [
    { id: Math.random(), title: "Community", target: "#" },
    { id: Math.random(), title: "Pricing", target: "#" },
    { id: Math.random(), title: "Features", target: "#" },
  ];

  return (
    <div className={styles["sticky"]}>
      <nav className={styles["nav"]}>
        <a className={styles["nav-title"]} href="#">
          Fiber
        </a>

        <button className={styles["nav-toggler"]}>
          <img src={hamburgerMenu} alt="menu button" />
        </button>

        <ul className={styles["nav-links"]}>
          {links.map((link) => (
            <li key={link.id} className={styles["nav-links__link"]}>
              <a href={link.target}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className={styles["nav-buttons"]}>
          <button className={styles["nav-buttons__button"]}>Sign In</button>
          <button
            className={`${styles["nav-buttons__button"]} ${styles["nav-buttons__button-sign-up"]}`}
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
