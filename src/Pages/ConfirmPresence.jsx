//HOOK
import { useState } from "react";
import emailjs from "@emailjs/browser";

// COMPONENTS
import TitleDetail from "../components/TitleDetail";
import Tabs from "../components/Tabs";
import Input from "../components/Input";
// import PhoneInput from "../components/PhoneInput";

import style from "./ConfirmPresence.module.css";

const ConfirmPresence = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [userPanela, setUserPanela] = useState({
    nome: "",
    tel: "",
    recado: "",
    option: "CHÁ DE PANELA",
    qtdKids: 0,
    qtdAdult: 1,
  });

  const optionsKCha = [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
  ];
  const optionsACha = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
  ];
  const [userCasa, setUserCasa] = useState({
    nome: "",
    tel: "",
    recado: "",
    option: "CASAMENTO",
    qtdKids: 0,
    qtdAdult: 1,
  });
  const optionsKCasa = [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
  ];
  const optionsACasa = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
  ];

  const handlePhoneChangeP = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 0) {
      value = "(" + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ") " + value.slice(3);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + "-" + value.slice(10);
    }

    setUserPanela({ ...userPanela, tel: value });
  };

  const handleChangePanela = (e) => {
    setUserPanela({ ...userPanela, [e.target.name]: e.target.value });
  };

  function handleSubmitPanela(e) {
    e.preventDefault();

    if (
      userPanela.nome === "" ||
      userPanela.tel === "" ||
      userPanela.recado === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    // console.log(userPanela);

    //EMAIL JS

    emailjs.send(serviceId, templateId, userPanela, publicKey).then(
      (response) => {
        console.log("EMAIL ENVIADO!", response.status, response.text);
      },
      (err) => {
        console.log("ERRO: " + err);
        alert(
          "não foi possível fazer a confirmação por conta da caixa de email estar cheia"
        );
      }
    );

    //-----------------------------
    alert(
      `${userPanela.nome}.
    Ficamos muito felizes em saber que você e sua família confirmaram presença no nosso CHÁ DE PANELA!`
    );
    setUserPanela({
      nome: "",
      tel: "",
      recado: "",
      option: "CHÁ DE PANELA",
    });
  }

  const handlePhoneChangeC = (e) => {
    // Remove tudo que não for número
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 0) {
      value = "(" + value;
    }
    if (value.length > 3) {
      value = value.slice(0, 3) + ") " + value.slice(3);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + "-" + value.slice(10);
    }
    setUserCasa({ ...userCasa, tel: value });
  };
  const handleChangeCasa = (e) => {
    setUserCasa({ ...userCasa, [e.target.name]: e.target.value });
  };

  function handleSubmitCasa(e) {
    e.preventDefault();

    if (userCasa.nome === "" || userCasa.tel === "" || userCasa.recado === "") {
      alert("Preencha todos os campos");
      return;
    }
    //console.log(userCasa);

    //EMAIL JS

    emailjs.send(serviceId, templateId, userCasa, publicKey).then(
      (response) => {
        console.log("EMAIL ENVIADO!", response.status, response.text);
      },
      (err) => {
        console.log("ERRO: " + err);
        alert(
          "não foi possível fazer a confirmação por conta da caixa de email estar cheia"
        );
      }
    );

    //------------------------

    alert(`${userCasa.nome}.
    Que alegria saber que você e sua família estarão conosco no nosso CASAMENTO!`);
    setUserCasa({
      nome: "",
      tel: "",
      recado: "",
      option: "CASAMENTO",
    });
  }

  return (
    <div className={style.container} id="confirmar">
      <TitleDetail name="Confirmar Presença" />
      <Tabs
        tit1={<div>Chá de Panela</div>}
        tit2={<div>Casamento</div>}
        item1={
          <div className={style.content1}>
            <span>
              SÁBADO, <b>08 de NOVEMBRO</b>, 16 Hrs
            </span>
            <form onSubmit={handleSubmitPanela} className={style.formContainer}>
              <Input
                text="Nome Completo:"
                type="text"
                name="nome"
                placeholder="Digite o seu Nome Completo"
                handleOnChange={handleChangePanela}
                value={userPanela.nome}
              />
              <Input
                text="Telefone para contato:"
                type="text"
                name="tel"
                placeholder="(99) 99999-9999"
                handleOnChange={handlePhoneChangeP}
                value={userPanela.tel}
              />

              <div className={style.quantidades}>
                <div className={style.adult}>
                  <p>Quantidade de adultos incluindo você: </p>
                  <select
                    className={style.select}
                    onChange={(e) =>
                      setUserPanela({
                        ...userPanela,
                        qtdAdult: e.target.value,
                      })
                    }
                    value={userPanela.qtdAdult}
                  >
                    {optionsACha.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={style.kids}>
                  <p>Quantidade de crianças: </p>
                  <select
                    className={style.select}
                    onChange={(e) =>
                      setUserPanela({
                        ...userPanela,
                        qtdKids: e.target.value,
                      })
                    }
                    value={userPanela.qtdKids}
                  >
                    {optionsKCha.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={style.textArea}>
                <label>Recado para os Noivos:</label>
                <textarea
                  row={10}
                  onChange={(e) =>
                    setUserPanela({
                      ...userPanela,
                      recado: e.target.value,
                    })
                  }
                  placeholder="Insira aqui seu recado para o Chá de panela"
                  value={userPanela.recado}
                ></textarea>
              </div>
              <input
                type="submit"
                value="Confirmar Presença"
                className={style.btnSubmit}
              />
            </form>
          </div>
        }
        item2={
          <div className={style.content1}>
            <span>
              SÁBADO, <b>06 de DEZEMBRO</b>, 16 Hrs
            </span>
            <form onSubmit={handleSubmitCasa} className={style.formContainer}>
              <Input
                text="Nome Completo:"
                type="text"
                name="nome"
                placeholder="Digite o seu Nome Completo"
                handleOnChange={handleChangeCasa}
                value={userCasa.nome}
              />
              <Input
                text="Telefone para contato:"
                type="tel"
                name="tel"
                placeholder="(99) 99999-9999"
                handleOnChange={handlePhoneChangeC}
                value={userCasa.tel}
              />

              <div className={style.quantidades}>
                <div className={style.adult}>
                  <p>Quantidade de adultos incluindo você: </p>
                  <select
                    className={style.select}
                    onChange={(e) =>
                      setUserCasa({
                        ...userCasa,
                        qtdAdult: e.target.value,
                      })
                    }
                    value={userCasa.qtdAdult}
                  >
                    {optionsACasa.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={style.kids}>
                  <p>Quantidade de crianças: </p>
                  <select
                    className={style.select}
                    onChange={(e) =>
                      setUserCasa({
                        ...userCasa,
                        qtdKids: e.target.value,
                      })
                    }
                    value={userCasa.qtdKids}
                  >
                    {optionsKCasa.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={style.textArea}>
                <label>Recado para os Noivos:</label>
                <textarea
                  row={10}
                  onChange={(e) =>
                    setUserCasa({ ...userCasa, recado: e.target.value })
                  }
                  placeholder="Insira aqui seu recado para o Casamento"
                  value={userCasa.recado}
                ></textarea>
              </div>
              <input
                type="submit"
                value="Confirmar Presença"
                className={style.btnSubmit}
              />
            </form>
          </div>
        }
      />
    </div>
  );
};

export default ConfirmPresence;
