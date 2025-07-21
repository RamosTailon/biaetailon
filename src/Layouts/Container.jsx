// CSS
import styles from "./Container.module.css";

//PAGES
import Home from "../Pages/Home";
import Countdown from "../Pages/Countdown";
import Couple from "../Pages/Couple";
import Place from "../Pages/Place";
import GiftList from "../Pages/GiftList";
import ConfirmPresence from "../Pages/ConfirmPresence";

const Container = () => {
  return (
    <main className={styles.container}>
      <Home />
      <Countdown />
      <Couple />
      <Place />
      <GiftList />
      <ConfirmPresence />
    </main>
  );
};

export default Container;
