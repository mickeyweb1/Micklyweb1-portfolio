import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Project.css";

export default function Project() {
  return (
    <main className="projects-page">
      <section className="projects-page__intro">
        <p className="content-page__eyebrow">02 - Selected work</p>
        <h1>Projects I&apos;ve built.</h1>
        <p>
          A growing collection of experiments and real projects made while
          learning frontend and full-stack development.
        </p>
      </section>
      <section className="projects-page__grid" aria-label="All projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
