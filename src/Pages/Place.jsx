import TittleDetail from "../components/TitleDetail";

import style from "./Place.module.css";

// IMAGE
import Ice from "../images/5_ IGREJA ICE.png";
import MAPA from "../images/6_MAPA.png";

const Place = () => {
  return (
    <div id="cerimonia">
      <TittleDetail name="Cerimônia" />
      <div className={style.container}>
        <img src={Ice} alt="" id={style.Ice} />
        <div className={style.text}>
          <p>
            &nbsp;Gostaríamos muito de contar com a presença de todos vocês no
            momento em que nossa união será abençoada diante de Deus! Contamos
            com vocês! Dia 06 de dezembro de 2025, às 16h.
          </p>
          <p>
            <b>Igreja Cristã Evangélica do Gama</b>
          </p>
          <p>St. Oeste EQ 11/15 - Gama Oeste, Brasília - DF</p>
        </div>
      </div>
      <div className={style.map}>
        <a
          href="https://www.google.com/maps/place/Igreja+Crist%C3%A3+Evang%C3%A9lica+de+Gama/@-16.013376,-48.0727767,705m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935980080b79ff77:0xd2e6f2115cb9e2be!8m2!3d-16.0133812!4d-48.0702018!16s%2Fg%2F11bbrpb1vr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MAPA} alt="" id={style.mapa} />
        </a>
      </div>
    </div>
  );
};

export default Place;
