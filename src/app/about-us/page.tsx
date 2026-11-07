import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import { services } from "@/lib/site-content";
export const metadata = pageMetadata(
  "About us",
  "Meet NMT Solutions: a software development partner connecting web, mobile, IoT, and automation through thoughtful design and practical engineering.",
  "/about-us",
);
export default function About() {
  return (
    <>
      <section className="shell prose-page">
        <p className="eyebrow">THE PEOPLE BEHIND THE PIECES</p>
        <h1>
          Curious minds.
          <br />
          Connected thinking.
        </h1>
        <p className="page-intro">
          We’re NMT Solutions. We bring software, hardware, and practical
          problem-solving together to make everyday work a little better.
        </p>
        <div className="about-grid">
          <div>
            <h2>
              Good software starts
              <br />
              with understanding.
            </h2>
            <p>
              We build custom web and mobile applications, connected devices,
              and the services that make them work together. Our starting point
              is always the same: understand what you need, who it is for, and
              what success should look like.
            </p>
            <p>
              We work across the whole system, from a clear interface to the
              integrations behind it. That means fewer disconnected pieces and
              more attention to how the experience works as a whole.
            </p>
            <p>
              Our work continues through maintenance and support. We want what
              we build to remain useful as your business and its needs evolve.
            </p>
          </div>
          <div className="about-values">
            <div>
              <h3>Clarity over complexity</h3>
              <p>
                Thoughtful interfaces and understandable systems make technology
                easier to use and maintain.
              </p>
            </div>
            <div>
              <h3>Collaboration from the start</h3>
              <p>
                We ask questions, make ideas tangible, and improve them with
                you.
              </p>
            </div>
            <div>
              <h3>Care in the details</h3>
              <p>
                Accessibility, reliability, and a considered technology choice
                belong in the foundation.
              </p>
            </div>
          </div>
        </div>
        <div className="about-page-services">
          <h2>What we can build together</h2>
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
