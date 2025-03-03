import Styles from "./About.module.scss";
import Skills from "./Skills/Skills";

function About() {
  return (
    <div className={Styles["section_about"]} id="skills">
      <Skills />
    </div>
  );
}

export default About;
