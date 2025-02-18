import PropTypes from "prop-types";
import Styles from "./SkillBox.module.scss";

function SkillBox({ icon, skillName }) {
  return (
    <div className={Styles.skillBox}>
      <div className={Styles.icon}>{icon}</div>
      <span className={Styles.skillName}>{skillName}</span>
    </div>
  );
}

SkillBox.propTypes = {
  icon: PropTypes.element.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillBox;
