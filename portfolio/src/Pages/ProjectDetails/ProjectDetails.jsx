import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../data/projects";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.slug === id);

  if (!project) {
    return (
      <main className="project-details project-details--missing">
        <p className="content-page__eyebrow">Project not found</p>
        <h1>This page has moved.</h1>
        <Link className="content-page__link" to="/projects">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <div className="project-details__topline">
        <Link to="/projects" className="project-details__back"><FiArrowLeft /> All projects</Link>
        <p className="content-page__eyebrow">Selected work / {project.slug}</p>
      </div>
      <div className="project-details__intro">
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-details__tech">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="project-details__actions">
            <a className="project-details__primary" href={project.live} target="_blank" rel="noreferrer">
              Visit live project <FiArrowUpRight />
            </a>
            <a className="project-details__secondary" href={project.github} target="_blank" rel="noreferrer">
              <FiGithub /> Source code
            </a>
          </div>
        </div>
        <span className="project-details__index">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
      </div>
      <figure className="project-details__preview">
        <img src={project.image} alt={`${project.title} website preview`} />
      </figure>
    </main>
  );
}
