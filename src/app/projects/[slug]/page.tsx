import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, site, controlNestDetails } from "@/lib/site-content";
import { StructuredData } from "@/components/revamp/StructuredData";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) return {};
  return pageMetadata(
    `${project.name}. ${project.status}`,
    project.description,
    `/projects/${project.slug}`,
  );
}
export default function ProjectPage({ params }: Props) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) notFound();
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${site.url}/projects/${project.slug}`,
          name: `${project.name}. ${project.status}`,
          description: project.description,
          about: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.overview,
            creativeWorkStatus:
              project.status === "Upcoming" ? "In development" : project.status,
            url: project.websiteUrl || `${site.url}/projects/${project.slug}`,
            creator: {
              "@id": `${site.url}/#organization`,
              "@type": "Organization",
              name: site.name,
            },
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: site.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: project.name,
                item: `${site.url}/projects/${project.slug}`,
              },
            ],
          },
        }}
      />
      <article className="shell prose-page project-detail">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={14} aria-hidden="true" />
          All projects
        </Link>
        <br />
        <span className="small-label">{project.category}</span>
        <h1>{project.name}</h1>
        <span
          className={`project-status ${project.status === "Legacy" ? "status-legacy" : ""}`}
        >
          <span />
          {project.status === "Upcoming" ? "In development" : project.status}
        </span>
        <p className="page-intro">{project.description}</p>
        <div className="detail-grid">
          <section>
            <h2>Project overview</h2>
            <p>{project.overview}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <aside className="project-note" aria-label="Project availability">
              <p>{project.note}</p>
            </aside>
          </section>
          <section>
            <h2>
              {project.slug === "control-nest-v2"
                ? "Technologies"
                : "Project scope"}
            </h2>
            <ul className="service-tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            {project.websiteUrl && (
              <a
                className="button button-primary"
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Control Nest
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">, opens in a new tab</span>
              </a>
            )}
            <Link
              href="/#contact"
              className={`button ${project.websiteUrl ? "button-secondary" : "button-primary"}`}
            >
              Ask us about{" "}
              {project.name === "Lead Follow-up & Booking Automation"
                ? "this project"
                : project.name}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            {project.status === "Legacy" && (
              <p style={{ marginTop: 24 }}>
                <Link href="/projects/control-nest-v2" className="text-link">
                  View Control Nest v2
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </p>
            )}
          </section>
        </div>
        {project.slug === "control-nest-v2" && (
          <div className="project-features">
            <h2>What Control Nest v2 does</h2>
            {controlNestDetails.map((detail) => (
              <section key={detail.heading}>
                <h3>{detail.heading}</h3>
                <p>{detail.body}</p>
              </section>
            ))}
            <nav
              className="project-resources"
              aria-label="Control Nest resources"
            >
              <a
                className="text-link"
                href="https://controlnest.nmt-solutions.in/guide"
                target="_blank"
                rel="noreferrer"
              >
                Setup guide
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">, opens in a new tab</span>
              </a>
            </nav>
          </div>
        )}
      </article>
    </>
  );
}
