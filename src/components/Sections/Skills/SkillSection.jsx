import Styles from "./SkillSection.module.scss";
import Skills from "./Skills/Skills";

function SkillSection() {
  return (
    <div className={Styles["section_skills"]} id="skills">
      <Skills />
    </div>
  );
}

export default SkillSection;
