import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {

  return (
    <article className="project-card">

      <div className="project-card__image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>


      <div className="project-card__content">

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>


        <div className="project-card__tech">

          {project.technologies.map((tech)=>(
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>


        <div className="project-card__buttons">

          <a 
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <FiArrowUpRight />
          </a>


          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            GitHub
          </a>

        </div>


      </div>

    </article>
  );
}