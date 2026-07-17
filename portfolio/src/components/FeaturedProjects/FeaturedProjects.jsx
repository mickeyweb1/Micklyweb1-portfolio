import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="featured-projects">
{console.log(projects)}
      <div className="container">

        <div className="section-heading">

          <p className="section-subtitle">
            Selected Work
          </p>

          <h2>
            Projects I've Built
          </h2>

          <p>
            A collection of projects focused on responsive
            interfaces, user experience, and clean code.
          </p>

        </div>

        <div className="projects-grid">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}