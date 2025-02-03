import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";
import Styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={Styles.NavBar}>
      <div className={Styles.LogoContainer}>
        {/* Add your logo here */}
        {/* <img src="logo.png" alt="Logo" /> */}
      </div>
      <div className={Styles.NavLinks}>
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#projects">Projects</Link>
      </div>
      <div className={Styles.SocialsContainer}>
        {/* Add your social links here */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
