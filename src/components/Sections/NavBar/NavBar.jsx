import ThemeButton from "@atoms/ThemeButton/ThemeButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";
import Styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={Styles.NavBar}>
      <div className={Styles.LogoContainer}>
        <a href="#App">
          SH
          <span>{"{"}</span>S<span>{"}"}</span>
        </a>
      </div>

      <div className={Styles.RightSide}>
        <div className={Styles.SocialsContainer}>
          <ThemeButton />
          {/* Add your social links here */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <div className={Styles.NavLinks}>
          <Link to="/#top">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="#projects">Projects</Link>
          <Link to="/#background">Background</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
