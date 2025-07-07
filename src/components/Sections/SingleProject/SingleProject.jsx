// src/components/Sections/SingleProject/SingleProject.jsx

import { useParams } from "react-router-dom";
import { projects } from "../Projects/ProjectsArr";
import Styles from "./SingleProject.module.scss";

const SingleProject = () => {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={Styles.singleProject}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className={Styles.buttons}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.button}
          style={{
            pointerEvents: project.github ? "auto" : "none",
            opacity: project.github ? 1 : 0.5,
          }}
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.button}
          style={{
            pointerEvents: project.live ? "auto" : "none",
            opacity: project.live ? 1 : 0.5,
          }}
        >
          Live
        </a>
      </div>
      <div className={Styles.featuresAndTechnologies}>
        <div className={Styles.features}>
          <h3>Features:</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={Styles.technologies}>
          <h3>Technologies:</h3>
          <ul>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={Styles.challenges}>Challenges: {project.challenges}</p>
    </div>
  );
};

export default SingleProject;
