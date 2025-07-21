import styles from "./Countdown.module.css";
//import BGImage from "../images/3_LANDING.png";

import Counter from "../components/Counter";
import useCountDown from "../hooks/useCountDown";

const Countdown = () => {
  const [day, hour, minute] = useCountDown("Dec 6, 2025 16:00:00");

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>CONTAGEM REGRESSIVA</p>
        <div className={styles.crono}>
          <Counter title={"Dias"} number={day} />
          <Counter title={"Horas"} number={hour} />
          <Counter title={"Minutos"} number={minute} />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
