import SkillBox from "@atoms/SkillBox/SkillBox";
import PropTypes from "prop-types";
import Styles from "./SkillContainer.module.scss";

function SkillContainer({ skills }) {
  return (
    <div className={Styles.skillContainer}>
      {skills.map((skill, index) => (
        <SkillBox key={index} icon={skill.icon} skillName={skill.name} />
      ))}
    </div>
  );
}

SkillContainer.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillContainer;
