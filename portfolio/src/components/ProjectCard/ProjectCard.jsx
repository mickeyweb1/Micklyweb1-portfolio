import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="project-card__content">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p>{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="project-card__tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        {(project.live || project.github) && (
          <div className="project-card__buttons">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
                <FiArrowUpRight />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <FiGithub />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
