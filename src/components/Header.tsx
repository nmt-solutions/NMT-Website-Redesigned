"use client";

import { useEffect, useRef, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FolderOpen,
  Layers3,
  Menu,
  Pause,
  Play,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useExperiencePreferences } from "@/providers/ExperiencePreferences";
import NMTTextLogo from "./NMTTextLogo";

const links = [
  { label: "What we do", href: "/#services", section: "services", icon: Code2 },
  { label: "Our stack", href: "/tech-stack", section: "stack", icon: Layers3 },
  {
    label: "Our projects",
    href: "/#projects",
    section: "projects",
    icon: FolderOpen,
  },
  { label: "About us", href: "/about-us", section: "about", icon: Users },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<number | null>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const { paused, setPaused } = useExperiencePreferences();
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const compact = latest > 48;
    setScrolled((current) => (current === compact ? current : compact));
  });

  useEffect(() => {
    setOpen(false);
    setHovered(null);
    setActive(
      pathname === "/tech-stack"
        ? 1
        : pathname.startsWith("/projects")
          ? 2
          : pathname === "/about-us"
            ? 3
            : pathname === "/"
              ? 0
              : null,
    );
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = entry.target.classList.contains("hero")
            ? 0
            : links.findIndex((link) => link.section === entry.target.id);
          if (index >= 0) setActive(index);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    for (const link of links) {
      const section = document.getElementById(link.section);
      if (section) observer.observe(section);
    }
    const hero = document.querySelector(".hero");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.header
          className="site-header"
          data-scrolled={scrolled}
          animate={{ y: scrolled ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 32 }}
        >
          <div className="shell header-inner">
            <Link href="/" aria-label="NMT Solutions home" className="brand">
              <NMTTextLogo />
            </Link>
            <nav
              aria-label="Main navigation"
              className="desktop-nav"
              onPointerLeave={() => setHovered(null)}
            >
              <m.span
                className="nav-selection"
                aria-hidden="true"
                animate={{
                  x: `${(hovered ?? active ?? 0) * 100}%`,
                  opacity: hovered !== null || active !== null ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 34 }}
              />
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-item"
                    data-active={index === active}
                    aria-current={
                      pathname === link.href
                        ? "page"
                        : pathname === "/" && index === active
                          ? "location"
                          : undefined
                    }
                    onPointerEnter={() => setHovered(index)}
                    onFocus={() => setHovered(index)}
                    onBlur={() => setHovered(null)}
                  >
                    <Icon size={15} aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="header-actions">
              <button
                className="nav-motion-toggle"
                aria-pressed={paused}
                aria-label={
                  paused
                    ? "Resume background animation"
                    : "Pause background animation"
                }
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? (
                  <Play size={15} aria-hidden="true" />
                ) : (
                  <Pause size={15} aria-hidden="true" />
                )}
              </button>
              <a className="header-contact" href="/#contact">
                <span>Contact us</span>
                <span className="action-icon">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
              <button
                ref={menuButton}
                className="menu-toggle"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? "Close navigation" : "Open navigation"}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? (
                  <X size={20} aria-hidden="true" />
                ) : (
                  <Menu size={20} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            hidden={!open}
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>
                    <Icon size={18} aria-hidden="true" />
                    {link.label}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              );
            })}
            <a href="/#contact" onClick={() => setOpen(false)}>
              Contact us
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </m.header>
      </MotionConfig>
    </LazyMotion>
  );
}
