// src/components/Sections/Home/Home.jsx

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Home.module.scss";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DownloadButton from "@molecules/DownloadButton/DownloadButton";
function Home() {
  return (
    <div className={Styles.section_home}>
      <div className={Styles.hero}>
        <p className={Styles.greeting}>Hi,</p>
        <div className={Styles.name_container}>
          <span className={Styles.name_prefix}>I'm </span>
          <span className={Styles.name}>Shahaf Segal</span>
        </div>
        <p className={Styles.title}>
          Full-Stack <br></br> Developer
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
      <img
        src="/images/demo_profilepic.png"
        alt="Profile Picture"
        className={Styles.profile_picture}
      />
    </div>
  );
}

export default Home;
