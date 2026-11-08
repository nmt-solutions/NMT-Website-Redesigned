import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site-content";
export default function ContactUs() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="shell contact-inner">
        <div>
          <p className="eyebrow">
            <span className="tiny-dot" /> Contact us
          </p>
          <h2 id="contact-heading">
            Tell us what you
            <br />
            need to build<span>.</span>
          </h2>
          <p>
            Describe your requirements and the systems you already use.
            <br className="desktop-break" /> Email us to discuss the work.
          </p>
        </div>
        <a className="contact-link" href={`mailto:${site.email}`}>
          <span className="contact-icon">
            <Mail size={26} aria-hidden="true" />
          </span>
          <span>
            Email NMT Solutions<small>{site.email}</small>
          </span>
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
