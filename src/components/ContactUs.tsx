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
            <span className="tiny-dot" /> A GOOD PLACE TO START
          </p>
          <h2 id="contact-heading">
            What are you
            <br />
            thinking of building<span>?</span>
          </h2>
          <p>
            A new idea, a tricky workflow, or a system that could work better.
            <br className="desktop-break" /> We’d love to hear about it.
          </p>
        </div>
        <a className="contact-link" href={`mailto:${site.email}`}>
          <span className="contact-icon">
            <Mail size={26} aria-hidden="true" />
          </span>
          <span>
            Start a conversation<small>{site.email}</small>
          </span>
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
