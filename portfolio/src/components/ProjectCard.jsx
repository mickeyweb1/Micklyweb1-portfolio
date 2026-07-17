import React from "react";

export function ProjectCard({ project, index }) {
  const CardWrapper = project.liveUrl ? "a" : "div";
  const wrapperProps = project.liveUrl
    ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper {...wrapperProps} className="p-card-group">
      <div className="p-card-media-wrapper">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="p-card-img"
        />
        <div aria-hidden className="p-card-overlay" />
        <div className="p-card-badge-index">0{index + 1}</div>
        <div className="p-card-badge-year">{project.year}</div>
      </div>
      <div className="p-card-content">
        <h3 className="p-card-title">{project.title}</h3>
        <p className="p-card-blurb">{project.blurb}</p>
        <p className="p-card-description">{project.description}</p>
        <div className="p-card-tags">
          {project.stack.map((s) => (
            <span key={s} className="p-card-tag">
              {s}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.sourceUrl) && (
          <div className="p-card-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-card-link-live"
              >
                Live site ↗
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-card-link-source"
              >
                Source ↗
              </a>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
