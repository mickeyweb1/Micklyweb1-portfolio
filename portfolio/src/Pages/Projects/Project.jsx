import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";

import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Project.css";

export default function Project() {
  const products = projects.filter((project) => project.type === "product");
  const earlier = projects.filter((project) => project.type !== "product");

  return (
    <main className="projects-page">
      <section className="projects-page__intro">
        <h1>Things I've built.</h1>
        <p className="projects-page__lead">
          Real products first, practice projects after.
        </p>
        <p className="projects-page__text">
          Start with Noted. It's the one with real teachers and students using
          it. Below that are the earlier projects where I learned the basics.
        </p>
      </section>

      {/* REAL PRODUCTS */}
      <section aria-label="Products" className="products">
        {products.map((project) => (
          <article className="product" key={project.slug}>
            <div className="product__body">
              <div className="product__top">
                {project.status && (
                  <span className="product__status">{project.status}</span>
                )}
                {project.highlight && (
                  <span className="product__highlight">{project.highlight}</span>
                )}
              </div>

              <h2>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>

              <p className="product__description">{project.description}</p>

              <dl className="product__meta">
                <div>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                </div>
                {project.technologies.length > 0 && (
                  <div>
                    <dt>Built with</dt>
                    <dd>
                      <ul className="product__tech">
                        {project.technologies.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="product__links">
                <Link className="product__primary" to={`/projects/${project.slug}`}>
                  See the details
                  <FiArrowRight />
                </Link>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live site
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
            </div>

            <div className="product__media">
              {project.image ? (
                <img src={project.image} alt={`${project.title} screenshot`} />
              ) : (
                <div className="product__placeholder" aria-hidden="true">
                  <span>{project.title}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* EARLIER WORK */}
      <section className="earlier" aria-label="Earlier projects">
        <h2 className="earlier__title">Earlier projects</h2>
        <p className="earlier__text">
          Where I started: smaller builds that taught me HTML, CSS, JavaScript
          and React.
        </p>
        <div className="projects-page__grid">
          {earlier.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
