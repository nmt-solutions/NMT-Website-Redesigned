import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NMTTextLogo from "./NMTTextLogo";
import { site } from "@/lib/site-content";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="NMT Solutions home">
              <NMTTextLogo />
            </Link>
            <p>
              Web and mobile applications.
              <br />
              IoT and business automation.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#services">What we do</Link>
            <Link href="/tech-stack">Our stack</Link>
            <Link href="/#projects">Our projects</Link>
            <Link href="/about-us">About us</Link>
          </nav>
          <div className="footer-email">
            <span>Contact NMT Solutions</span>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NMT Solutions</span>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/customer-support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
