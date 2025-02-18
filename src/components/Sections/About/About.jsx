import {
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillContainer from "../../Molecules/SkillContainer/SkillContainer";
import Styles from "./About.module.css";

function About() {
  const skills = [
    { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
    { icon: <FontAwesomeIcon icon={faJs} />, name: "TypeScript" },
    { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
    { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
    { icon: <FontAwesomeIcon icon={faNode} />, name: "Node.js" },
    { icon: <FontAwesomeIcon icon={faPhp} />, name: "PHP" },
    { icon: <FontAwesomeIcon icon={faDatabase} />, name: "MongoDB" },
  ];

  return (
    <div className={Styles["section_about"]} id="about">
      <SkillContainer skills={skills} />
    </div>
  );
}

export default About;
