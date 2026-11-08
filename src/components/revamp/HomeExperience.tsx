"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CircuitBoard,
  Code2,
  MousePointer2,
  Pause,
  Play,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { services, type ServiceId } from "@/lib/site-content";
import ContactUs from "@/components/ContactUs";
import Projects from "./Projects";
import TechStack from "./TechStack";
import MotionProvider from "./MotionProvider";
import SceneFallback from "./SceneFallback";
import AmbientNetwork from "./AmbientNetwork";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { useExperiencePreferences } from "@/providers/ExperiencePreferences";
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});
const serviceIcons = {
  web: Code2,
  mobile: Smartphone,
  iot: CircuitBoard,
  cloud: Server,
};

export default function HomeExperience() {
  const [selected, setSelected] = useState<ServiceId>("web");
  const { paused, setPaused } = useExperiencePreferences();
  const reduced = useReducedMotion();
  const active = services.find((service) => service.id === selected)!;
  const noMotion = paused || Boolean(reduced);
  return (
    <MotionProvider paused={paused}>
      <div className="home-experience">
        <AmbientNetwork paused={noMotion} selected={selected} />
        <section className="hero shell" aria-labelledby="hero-heading">
          <m.div
            className="hero-copy"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: noMotion ? 0 : 0.6 }}
          >
            <p className="eyebrow">
              <span className="tiny-dot" /> BIG IDEAS. THOUGHTFULLY BUILT.
            </p>
            <h1 id="hero-heading">
              Software that
              <br />
              <span>moves you</span>
              <br />
              <span>forward.</span>
              <span className="heading-spark" aria-hidden="true">
                ✳
              </span>
            </h1>
            <p className="hero-description">
              We turn your ideas into useful digital experiences.
              <br className="desktop-break" /> From web and mobile to connected
              devices —<br className="desktop-break" /> we build the pieces, and
              bring them together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let’s build something
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="hero-explore" href="#services">
                Explore what we do
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="hero-brand-logo-wrap">
                <Image
                  src="/brand/nmt-logo.svg"
                  alt=""
                  width={31}
                  height={29}
                  className="hero-brand-logo"
                />
                <sup className="trademark-symbol" aria-hidden="true">
                  &#8482;
                </sup>
              </span>
              <span>
                Built around people.
                <br />
                <strong>Engineered for the real world.</strong>
              </span>
            </div>
          </m.div>
          <div className="hero-workbench">
            <div className="workbench-top">
              <span className="scene-label">
                <Boxes size={14} aria-hidden="true" /> A CONNECTED LITTLE WORLD
              </span>
              <span className="workbench-number">FIG. 01</span>
            </div>
            <div className="hero-scene">
              <Scene
                selected={selected}
                onSelect={setSelected}
                paused={noMotion}
              />
              <span className="floating-label label-web">
                <Code2 size={12} aria-hidden="true" /> WEB
              </span>
              <span className="floating-label label-cloud">
                <Server size={12} aria-hidden="true" /> CLOUD
              </span>
              <span className="floating-label label-iot">
                <CircuitBoard size={12} aria-hidden="true" /> IoT
              </span>
              <span className="floating-label label-mobile">
                <Smartphone size={12} aria-hidden="true" /> MOBILE
              </span>
            </div>
            <div className="workbench-controls">
              <span>
                <MousePointer2 size={13} aria-hidden="true" /> Pick a piece. See
                the possibilities.
              </span>
              <button
                className="motion-toggle"
                aria-pressed={paused}
                aria-label={
                  paused
                    ? "Resume decorative motion"
                    : "Pause decorative motion"
                }
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? (
                  <Play size={13} aria-hidden="true" />
                ) : (
                  <Pause size={13} aria-hidden="true" />
                )}
                <span>{paused ? "Resume" : "Pause"}</span>
              </button>
              <span className="reduced-motion-note">Reduced motion on</span>
            </div>
            <div
              className="service-picker"
              role="group"
              aria-label="Explore our services"
            >
              {services.map((service) => {
                const Icon = serviceIcons[service.id];
                return (
                  <button
                    key={service.id}
                    aria-pressed={selected === service.id}
                    aria-controls="hero-service-description"
                    onClick={() => setSelected(service.id)}
                  >
                    <Icon size={15} aria-hidden="true" />
                    {service.short}
                  </button>
                );
              })}
            </div>
            <div
              id="hero-service-description"
              className="hero-service-description"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>
                {active.number} / {active.name}
              </span>
              <p>{active.headline}</p>
            </div>
          </div>
        </section>

        <div className="capability-strip shell">
          <span>
            OUR SERVICES
            <br />
            <strong>NMT SOLUTIONS</strong>
          </span>
          <div>
            <Code2 size={19} aria-hidden="true" />
            Web & mobile
          </div>
          <i />
          <div>
            <CircuitBoard size={19} aria-hidden="true" />
            Connected devices
          </div>
          <i />
          <div>
            <Sparkles size={19} aria-hidden="true" />
            Business automation
          </div>
        </div>

        <section
          id="services"
          className="services-section shell"
          aria-labelledby="services-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Our services</p>
              <h2 id="services-heading">
                Application development
                <br />
                <span>and system integration.</span>
              </h2>
            </div>
            <p>
              Web, mobile, hardware, and the services
              <br />
              that connect them.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                paused={noMotion}
              />
            ))}
          </div>
          <div className="support-strip">
            <ShieldCheck size={20} aria-hidden="true" />
            <span>
              We provide application maintenance and support after launch.
            </span>
            <Link href="/customer-support">
              Contact support
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <TechStack paused={paused} />
        <Projects />

        <section
          className="approach-section shell"
          aria-labelledby="approach-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / How we work</p>
              <h2 id="approach-heading">
                Define the requirements.
                <br />
                <span>Build and test the application.</span>
              </h2>
            </div>
            <Link className="text-link" href="/about-us">
              About NMT Solutions
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ol className="approach-steps">
            <li>
              <span>01 / Requirements</span>
              <h3>Agree on the scope.</h3>
              <p>
                We discuss who will use the software, what it needs to do, and
                which systems it needs to connect to.
              </p>
            </li>
            <li>
              <span>02 / Development</span>
              <h3>Review the application as we build it.</h3>
              <p>
                We design and develop the application. You review working
                versions so we can address problems before launch.
              </p>
            </li>
            <li>
              <span>03 / Deployment and support</span>
              <h3>Test the integrations and deploy.</h3>
              <p>
                We test how the application connects to your other systems,
                prepare it for release, and provide maintenance and support.
              </p>
            </li>
          </ol>
        </section>
        <ContactUs />
      </div>
    </MotionProvider>
  );
}
