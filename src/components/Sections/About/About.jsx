import {
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faNode,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillContainer from "../../Molecules/SkillContainer/SkillContainer";
import Styles from "./About.module.scss";

const SkillSet = [
  { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
  { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
  { icon: <FontAwesomeIcon icon={faJs} />, name: "TypeScript" },
  { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
  { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
  { icon: <FontAwesomeIcon icon={faNode} />, name: "Node.js" },
  { icon: <FontAwesomeIcon icon={faPhp} />, name: "PHP" },
  { icon: <FontAwesomeIcon icon={faDatabase} />, name: "MongoDB" },
];

const SkillTools = [
  { icon: <FontAwesomeIcon icon={faGithub} />, name: "GitHub" },
  { icon: <FontAwesomeIcon icon={faPython} />, name: "Python" },
  { icon: <FontAwesomeIcon icon={faJava} />, name: "Java" },
  { icon: <FontAwesomeIcon icon={faToolbox} />, name: "Assembly" },
  { icon: <FontAwesomeIcon icon={faLaravel} />, name: "Laravel" },
];

function About() {
  return (
    <div className={Styles["section_about"]} id="about">
      <div className={Styles.skillSection}>
        <h1>
          My <span className="highlight_text">Skillset</span>
        </h1>
        <SkillContainer skills={SkillSet} />
      </div>
      <div className={Styles.skillSection}>
        <h1>
          <span className="highlight_text">Tools</span> I know
        </h1>
        <SkillContainer skills={SkillTools} />
      </div>
    </div>
  );
}

export default About;
