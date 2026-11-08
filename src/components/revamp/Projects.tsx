import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  House,
  Workflow,
} from "lucide-react";
import { projects } from "@/lib/site-content";

function ProjectIllustration({
  kind,
  legacy,
}: {
  kind: string;
  legacy: boolean;
}) {
  if (kind === "workflow")
    return (
      <div className="project-art workflow-art" aria-hidden="true">
        <div className="art-path" />
        <div className="art-node">
          <span className="art-node-icon">↗</span>
          <i />
          <i />
        </div>
        <span className="art-junction">+</span>
        <div className="art-node">
          <span className="art-check">✓</span>
          <i />
          <i />
        </div>
        <div className="art-calendar">
          <span />
          <b>✓</b>
        </div>
      </div>
    );
  if (kind === "catalog")
    return (
      <div className="project-art catalog-art" aria-hidden="true">
        <div className="art-document doc-back" />
        <div className="art-document">
          <span />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="art-transform">→</span>
        <div className="art-table">
          <div />
          <div />
          <div />
          <div />
          <span>✓</span>
        </div>
      </div>
    );
  return (
    <div
      className={`project-art home-art ${legacy ? "legacy-art" : ""}`}
      aria-hidden="true"
    >
      <div className="art-house">
        <House strokeWidth={1.2} />
        <span />
        <i />
      </div>
      <div className="art-switch">
        <span />
        {legacy ? "01" : "02"}
      </div>
      <div className="art-signal">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Our projects</p>
            <h2 id="projects-heading">
              Current and legacy projects<span>.</span>
            </h2>
          </div>
          <p>
            Projects in development
            <br />
            and the legacy Control Nest.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon =
              project.mark === "workflow"
                ? Workflow
                : project.mark === "catalog"
                  ? FileCheck2
                  : House;
            return (
              <article
                key={project.slug}
                className={`project-card ${project.status === "Legacy" ? "legacy-card" : ""}`}
              >
                <div className="project-art-wrap">
                  <span
                    className={`project-status ${project.status === "Legacy" ? "status-legacy" : ""}`}
                  >
                    <span />
                    {project.status === "Upcoming"
                      ? "In development"
                      : project.status}
                  </span>
                  <span className="project-index">NMT / 0{index + 1}</span>
                  <ProjectIllustration
                    kind={project.mark}
                    legacy={project.status === "Legacy"}
                  />
                </div>
                <div className="project-info">
                  <span className="small-label">
                    <Icon size={13} aria-hidden="true" />
                    {project.category}
                  </span>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      {project.name}
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </Link>
                  </h3>
                  <p>{project.description}</p>
                  <Link
                    className="text-link"
                    href={`/projects/${project.slug}`}
                  >
                    {project.status === "Legacy"
                      ? "About this version"
                      : "Project details"}
                    <ArrowRight size={15} aria-hidden="true" />
                    <span className="sr-only">: {project.name}</span>
                  </Link>
                  {project.websiteUrl && (
                    <a
                      className="text-link project-website"
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit website
                      <ArrowUpRight size={15} aria-hidden="true" />
                      <span className="sr-only">
                        , {project.name}, opens in a new tab
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
