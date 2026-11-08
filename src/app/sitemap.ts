import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/site-content";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about-us",
    "/tech-stack",
    "/faq",
    "/customer-support",
    "/privacy-policy",
    "/terms-and-conditions",
    ...projects.map((project) => `/projects/${project.slug}`),
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency:
      path === "" || path.startsWith("/projects") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/tech-stack" ? 0.8 : 0.6,
  }));
}
