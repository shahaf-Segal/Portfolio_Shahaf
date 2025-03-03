import Styles from "./Projects.module.scss";
import { projects } from "./ProjectsArr";

const Projects = () => {
  return (
    <div className={Styles.projects}>
      <h1>Projects</h1>
      <div className={Styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={Styles.projectItem}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
