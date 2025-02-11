import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "@molecules/DownloadButton/DownloadButton";
import Styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={Styles.hero}>
      <p className={Styles.greeting}>Hi,</p>
      <div className={Styles.name_container}>
        <span className={Styles.name_prefix}>I'm </span>
        <span className={Styles.name}>Shahaf Segal</span>
      </div>
      <p className={Styles.title}>
        Full-Stack <br />
        Developer
      </p>
      <div className={Styles.button}>
        <span>View my projects</span>
      </div>
      <DownloadButton
        text="Download CV"
        FileLink={"/files/CV_shahaf_segal.pdf"}
      />
      <div className={Styles.socials}>
        <a href="https://github.com" className="social-link">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:your-email@example.com" className="social-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://linkedin.com" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
