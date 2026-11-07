"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const active = services.find((service) => service.id === selected)!;
  const noMotion = paused || Boolean(reduced);
  return (
    <MotionProvider paused={paused}>
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
            <span className="mini-symbol" aria-hidden="true">
              <i />
              <i />
              <i />
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
                paused ? "Resume decorative motion" : "Pause decorative motion"
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
          FROM THE SCREEN
          <br />
          <strong>TO THE REAL WORLD</strong>
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
          Smarter workflows
        </div>
      </div>

      <section
        id="services"
        className="services-section shell"
        aria-labelledby="services-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHAT WE BRING TO THE TABLE</p>
            <h2 id="services-heading">
              Big picture thinking.
              <br />
              <span>Hands-on building.</span>
            </h2>
          </div>
          <p>
            One connected approach.
            <br />
            From the first conversation to what comes next.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.id];
            return (
              <m.article
                className="service-card"
                key={service.id}
                initial={{ y: 12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: noMotion ? 0 : 0.4 }}
              >
                <div className="service-card-top">
                  <span className={`service-icon service-icon-${service.id}`}>
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>{service.number}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul
                  className="service-tags"
                  aria-label={`${service.name} technologies`}
                >
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </m.article>
            );
          })}
        </div>
        <div className="support-strip">
          <ShieldCheck size={20} aria-hidden="true" />
          <span>
            <strong>Our work doesn’t stop at launch.</strong> Ongoing
            maintenance, integration, and support keep everything connected.
          </span>
          <Link href="/customer-support">
            Here for the long run
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <TechStack paused={noMotion} />
      <Projects />

      <section
        className="approach-section shell"
        aria-labelledby="approach-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / A LITTLE ABOUT HOW WE WORK</p>
            <h2 id="approach-heading">
              Less guesswork.
              <br />
              <span>More working together.</span>
            </h2>
          </div>
          <Link className="text-link" href="/about-us">
            Meet our approach
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ol className="approach-steps">
          <li>
            <span>01 / UNDERSTAND</span>
            <h3>Start with the right questions.</h3>
            <p>
              We get to know your goals, the people using your product, and the
              problem worth solving.
            </p>
          </li>
          <li>
            <span>02 / BUILD</span>
            <h3>Make it tangible, together.</h3>
            <p>
              Thoughtful design and practical engineering turn the idea into
              something you can try and improve.
            </p>
          </li>
          <li>
            <span>03 / CONNECT</span>
            <h3>Make every piece count.</h3>
            <p>
              We bring the systems together, prepare for launch, and help you
              look after what comes next.
            </p>
          </li>
        </ol>
      </section>
      <ContactUs />
    </MotionProvider>
  );
}
