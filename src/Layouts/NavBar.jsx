import styles from "./NavBar.module.css";

// HOOKS
import { Link } from "react-scroll";
import { useState } from "react";

// IMAGENS
import imageNav from "../icons/ICON_NAVBAR.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <ul className={`${styles.lists} ${isOpen ? styles.responsiveNav : ""}`}>
        <Link to="casal" smooth={true} duration={700}>
          <li>CASAL</li>
        </Link>
        <Link to="cerimonia" smooth={true} duration={700}>
          <li>CERIMÔNIA</li>
        </Link>
        <Link to="presentes" smooth={true} duration={700}>
          <li>LISTA DE PRESENTES</li>
        </Link>
        <Link to="confirmar" smooth={true} duration={700}>
          <li>CONFIRMAR PRESENÇA</li>
        </Link>
      </ul>
      <div className={styles.imageNavbar} onClick={toggle}>
        <img src={imageNav} alt="botão de toggle da navbar" />
      </div>
    </nav>
  );
};

export default NavBar;
