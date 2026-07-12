import Icon from "../Icon.jsx";
import Section from "../Section.jsx";
import { projects } from "../../data/projects.js";

export default function Projects() {
  return (
    <Section id="projects" kicker="Portfolio" title={<>Recent <em>Projects</em></>}>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="project-card reveal-item"
            style={{ "--stagger": `${i * 0.12}s` }}
          >
            <div className="project-top">
              <span className="project-folder">
                <Icon name="folder" />
              </span>
              <span className="project-top-links">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source code"
                  >
                    <Icon name="github" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                  >
                    <Icon name="external-link" />
                  </a>
                )}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
