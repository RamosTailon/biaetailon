//CSS
import style from "./GiftList.module.css";

//COMPONENTS
import Tabs from "../components/Tabs";

//LAYOUTS
import Pix from "../Layouts/Pix";

const GiftList = () => {
  const linkSiteCasamento =
    "https://lista.havan.com.br/Convidado/ItensListaPresente/847295";
  const linkSiteCha = "/";
  return (
    <div className={style.container} id="presentes">
      <div className={style.title}>
        <h1>Lista de presentes</h1>
      </div>
      <Tabs
        tit1={<div>Lista de presentes</div>}
        tit2={<div>Pix</div>}
        item1={
          <div className={style.linksMarket}>
            <p className={style.linksMarketText}>
              Você pode acessar os sites da nossa lista de presentes pelo site
              da Havan, ou doar um pix para o casal:
            </p>
            <a
              href={linkSiteCasamento}
              className={style.linkH}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lista de presentes para o Casamento
            </a>
          </div>
        }
        item2={
          <div>
            <Pix />
          </div>
        }
      />
    </div>
  );
};

export default GiftList;
