import styles from "./NavBar.module.scss";

const NavBar = () => {
  const links = [
    { id: Math.random(), title: "Community", target: "#" },
    { id: Math.random(), title: "Pricing", target: "#" },
    { id: Math.random(), title: "Features", target: "#" },
  ];

  return (
    <nav className={styles["nav"]}>
      <h2 className={styles["nav-title"]}>Fiber</h2>

      <ul className={styles["nav-links"]}>
        {/* manage portals */}
        {links.map((link) => (
          <li key={link.id} className={styles["nav-links__link"]}>
            <a href={link.target}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className={styles["nav-buttons"]}>
        {/* manage portals */}
        <button className={styles["nav-buttons__button"]}>Sign In</button>
        <button
          className={`${styles["nav-buttons__button"]} ${styles["nav-buttons__button-sign-up"]}`}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
