import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import { services } from "@/lib/site-content";
export const metadata = pageMetadata(
  "About us",
  "NMT Solutions develops web and mobile applications, IoT systems, APIs, and business automation. Learn about our development process and support.",
  "/about-us",
);
export default function About() {
  return (
    <>
      <section className="shell prose-page">
        <p className="eyebrow">About us</p>
        <h1>NMT Solutions</h1>
        <p className="page-intro">
          We develop web and mobile applications, IoT systems, and business
          automation. We also build the APIs and integrations these systems
          need.
        </p>
        <div className="about-grid">
          <div>
            <h2>
              We build applications
              <br />
              and their integrations.
            </h2>
            <p>
              We start by agreeing on what the software needs to do, who will
              use it, and which existing systems it must connect to.
            </p>
            <p>
              Our work covers interface design, application development, server
              APIs, and device controllers. We choose the tools for each project
              based on its requirements.
            </p>
            <p>
              After deployment, we provide maintenance, integration updates, and
              technical support.
            </p>
          </div>
          <div className="about-values">
            <div>
              <h3>Review during development</h3>
              <p>
                You review working versions of the application so we can check
                the requirements and resolve problems before release.
              </p>
            </div>
            <div>
              <h3>Accessibility and testing</h3>
              <p>
                We check keyboard access, responsive layouts, and the
                integrations the application depends on.
              </p>
            </div>
            <div>
              <h3>Support after deployment</h3>
              <p>
                We help diagnose faults and maintain the application as your
                requirements change.
              </p>
            </div>
          </div>
        </div>
        <div className="about-page-services">
          <h2>Our development services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <h3>{service.name}</h3>
                <p>
                  {service.description} {service.detail}
                </p>
              </article>
            ))}
          </div>
          <Link className="button button-secondary" href="/tech-stack">
            Explore our technology stack
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <ContactUs />
    </>
  );
}
