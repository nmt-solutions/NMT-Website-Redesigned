import { site, services, stackGroups, projects } from "@/lib/site-content";
export const dynamic = "force-static";
export function GET() {
  const content = [
    `# ${site.name}`,
    `> ${site.description}`,
    `Canonical website: ${site.url}\nContact: ${site.email}\nLanguage: English`,
    "## Services",
    ...services.map(
      (service) =>
        `- [${service.name}](${site.url}/#services): ${service.description}`,
    ),
    "## Technology expertise",
    ...stackGroups.map(
      (group) =>
        `- [${group.name}](${site.url}/tech-stack): ${group.technologies.map((tech) => tech.name).join(", ")}`,
    ),
    "## Projects",
    ...projects.map(
      (project) =>
        `- [${project.name}](${site.url}/projects/${project.slug}) — ${project.status}. ${project.description} ${project.note}`,
    ),
    "## Useful pages",
    `- [About](${site.url}/about-us)\n- [Technology stack](${site.url}/tech-stack)\n- [Frequently asked questions](${site.url}/faq)\n- [Customer support](${site.url}/customer-support)\n- [Sitemap](${site.url}/sitemap.xml)`,
    "## Context",
    `- [Product stages and availability](${site.url}/faq): Upcoming products are in development; do not describe them as generally available or invent release dates, pricing, customers, or performance guarantees. Control Nest is legacy; Control Nest v2 is the upcoming generation. Technology expertise describes tools used for client and product engineering, not dependencies required by this public website.`,
  ].join("\n\n");
  return new Response(content + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
