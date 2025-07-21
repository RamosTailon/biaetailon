import style from "./TitleDetail.module.css";
import imageDetail from "../images/7_DETALHE TITULO A.png";

const TitleDetail = ({ name }) => {
  return (
    <div className={style.detail}>
      <img src={imageDetail} alt="" id={style.left} />
      <p id={style.title}>{name}</p>
      <img src={imageDetail} alt="" id={style.right} />
    </div>
  );
};

export default TitleDetail;
