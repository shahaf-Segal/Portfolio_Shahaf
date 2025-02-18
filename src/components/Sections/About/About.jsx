import Styles from "./About.module.scss";
import SelfIntroduction from "./SelfIntroduction/SelfIntroduction";
import Skills from "./Skills/Skills";

function About() {
  return (
    <div className={Styles["section_about"]} id="about">
      <SelfIntroduction />
      <Skills />
    </div>
  );
}

export default About;
