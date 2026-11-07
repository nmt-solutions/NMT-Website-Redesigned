import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="shell prose-page not-found">
      <p className="eyebrow">404 / A MISSING PIECE</p>
      <h1>That page isn’t here.</h1>
      <p className="page-intro">Let’s get you back to something useful.</p>
      <Link className="button button-primary" href="/">
        Back to NMT Solutions
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
