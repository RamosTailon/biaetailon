import style from "./Couple.module.css";

import TitleDetail from "../components/TitleDetail";

//IMAGES
import BiaTailon from "../images/4_FOTO CASAL 2.png";

const Couple = () => {
  return (
    <div className={style.container} id="casal">
      <TitleDetail name="Boas Novas" />
      <p className={style.paragraph}>
        &nbsp;&nbsp;Criamos esse site para compartilhar com vocês os detalhes da
        organização do nosso casamento. Estamos muito felizes e contamos com a
        presença de todos no nosso grande dia.
        <br />
        &nbsp;&nbsp;Ah, é importante também <b> conﬁrmar sua presença. </b> Para
        isto contamos com sua ajuda clicando no menu{" "}
        <u>“Conﬁrme sua Presença”</u> e preenchendo os dados necessários.
      </p>
      <TitleDetail name="O Casal" />
      <div className={style.content}>
        <img src={BiaTailon} alt="" id={style.casalP} />
        <p className={style.textoCasal}>
          Tailon e Bia se conheceram em 2024, apresentados por amigos em comum.
          Desde as primeiras conversas, perceberam o quanto tinham afinidades —
          e, de uma bela amizade, nasceu uma paixão que logo se transformou em
          amor. <br />
          &nbsp;&nbsp;Vieram então os primeiros momentos: o primeiro encontro, o
          primeiro livro lido juntos, a primeira EBD, o primeiro louvor
          compartilhado, o primeiro beijo... Cada experiência aproximava ainda
          mais seus corações. E, com o tempo, perceberam que a vida a dois se
          tornava mais leve, madura, sólida e abençoada. <br />
          &nbsp;&nbsp;Agora, chegou o momento de oficializar esse amor diante de
          Deus, da igreja e da família. Chegou o grande dia: o CASAMENTO! <br />
          &nbsp;&nbsp;Estamos cheios de alegria e gratidão por celebrar esse
          momento tão especial ao lado de pessoas que amamos.
        </p>
      </div>
    </div>
  );
};

export default Couple;
