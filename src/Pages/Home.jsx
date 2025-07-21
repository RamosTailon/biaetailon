// HOOKS
import { Link } from "react-scroll";

// CSS AND IMAGES
import styles from "./Home.module.css";
import detail from "../images/7_DETALHE TITULO B.png";
import photoCouple from "../images/2_FOTO CASAL 1.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeCenter}>
        <div className={styles.couple}>
          <img src={photoCouple} alt="Tailon e Beatriz" />
        </div>

        <div className={styles.textSide}>
          <div className={styles.title}>
            Tailon <br id={styles.quebraLinha} /> E <br />
            Beatriz
          </div>
          <img src={detail} alt="detalhe" />
          <div className={styles.texts}>
            <p className={styles.save}>
              Save <span>the</span> Date
            </p>
            <p className={styles.schedule}>
              SÁBADO,
              <br /> <span>6 de dezembro</span> <br /> 16 Hrs
            </p>
            <p className={styles.invite}>
              CONVIDAMOS VOCÊ PARA SE JUNTAR A <br />
              NOSSA CELEBRAÇÃO DO NOSSO CASAMENTO
            </p>
          </div>
          <Link to="confirmar" smooth={true} duration={700}>
            <button>Confirmar Presença</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
