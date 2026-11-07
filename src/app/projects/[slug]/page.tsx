import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, site } from "@/lib/site-content";
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
    `${project.name} — ${project.status}`,
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
          name: `${project.name} — ${project.status}`,
          description: project.description,
          about: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.overview,
            creativeWorkStatus:
              project.status === "Legacy" ? "Legacy" : "In development",
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
          {project.status === "Legacy"
            ? "Legacy project"
            : "Upcoming · In development"}
        </span>
        <p className="page-intro">{project.description}</p>
        <div className="detail-grid">
          <section>
            <h2>
              {project.status === "Legacy"
                ? "A part of our story"
                : "The idea we’re building"}
            </h2>
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
                ? "Technology foundations"
                : "At a glance"}
            </h2>
            <ul className="service-tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <Link href="/#contact" className="button button-primary">
              Ask us about{" "}
              {project.name === "Lead Follow-up & Booking Automation"
                ? "this project"
                : project.name}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            {project.status === "Legacy" && (
              <p style={{ marginTop: 24 }}>
                <Link href="/projects/control-nest-v2" className="text-link">
                  Explore the upcoming Control Nest v2
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </p>
            )}
          </section>
        </div>
      </article>
    </>
  );
}
