import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectDetails.css";

export default function ProjectDetalis() {
  const { id } = useParams();
  const project = projects.find((item) => item.slug === id);

  if (!project) {
    return (
      <main className="project-details">
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <p className="content-page__eyebrow">03 - Project details</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="project-details__tech">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <a href={project.live} target="_blank" rel="noreferrer">
        View live project
      </a>
    </main>
  );
}
