import style from "./Pix.module.css";

//IMAGES
import pixImage from "../images/PIX.png";
import copiedIcon from "../icons/ICON_COPIED.png";

const Pix = () => {
  const valorPix = "tailon05@hotmail.com";

  const copied = async () => {
    try {
      await navigator.clipboard.writeText(valorPix);
      alert("Pix Copiado. Cole no App do seu banco!");
    } catch (error) {
      alert("falha na copia de pix");
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.pixIcon}>
        <img src={pixImage} alt="qr code do pix" id={style.pixImage} />
        <div className={style.confirmBtn}>
          <p>
            Chave pix: <br />
            <b> {valorPix}</b> <br />
            Banco: Mercado Pago <br />
            Tailon Ramos Sampaio
          </p>

          <img
            src={copiedIcon}
            alt="Copiar"
            id={style.copiedIcon}
            onClick={() => copied()}
          />
        </div>
      </div>
      <p className={style.text}>
        Preparamos nossa lista de presentes nestes sites, mas, se for mais fácil
        para você, sinta-se à vontade para contribuir com nosso casamento via
        Pix.
      </p>
    </div>
  );
};

export default Pix;
