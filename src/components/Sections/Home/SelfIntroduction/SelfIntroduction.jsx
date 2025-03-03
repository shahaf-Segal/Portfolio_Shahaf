/* eslint-disable react/no-unescaped-entities */
import Styles from "./SelfIntroduction.module.scss";

function SelfIntroduction() {
  return (
    <div className={Styles.selfIntroduction}>
      <h1>Get To Know Me</h1>
      <p>
        <span className={Styles.highlight_text}>Full-Stack developer</span>{" "}
        specializing in React,Node.js and PHP.
        <br />I create consistent, efficient, and innovative solutions to
        complex problems.
        <br />
        I'm a quick learner, a team player, and a problem solver.
        <br /> Always learning new technologies and improving my skills.
      </p>
      <p className={Styles.highlight_text}>When I'm not coding, I enjoy</p>
      <ul>
        <li>Playing video games</li>
        <li>Learning Japanese</li>
        <li>Hiking and camping</li>
      </ul>
    </div>
  );
}

export default SelfIntroduction;
