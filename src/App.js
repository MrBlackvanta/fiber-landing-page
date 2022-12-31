import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import styles from "./App.module.scss";

function App() {
  return (
    <Fragment>
      <div className={styles["heading-section"]}>
        <NavBar />
        <Hero />
      </div>
    </Fragment>
  );
}

export default App;



