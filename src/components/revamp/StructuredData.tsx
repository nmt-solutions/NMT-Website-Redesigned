import { site, services, projects } from "@/lib/site-content";
export function StructuredData({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      logo: `${site.url}/icon.png`,
      knowsAbout: services.map((service) => service.name),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
    ...services.map((service) => ({
      "@type": "Service",
      "@id": `${site.url}/#service-${service.id}`,
      name: service.name,
      description: service.description,
      url: `${site.url}/#services`,
      provider: { "@id": `${site.url}/#organization` },
    })),
    {
      "@type": "ItemList",
      name: "NMT Solutions projects",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${project.name} (${project.status})`,
        url: `${site.url}/projects/${project.slug}`,
      })),
    },
  ],
};
