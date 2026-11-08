import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="shell prose-page not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="page-intro">
        Check the address or return to the home page.
      </p>
      <Link className="button button-primary" href="/">
        Back to NMT Solutions
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
