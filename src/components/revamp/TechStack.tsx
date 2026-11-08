"use client";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stackGroups } from "@/lib/site-content";
import TechnologyDiagram from "./TechnologyDiagram";
import { useExperiencePreferences } from "@/providers/ExperiencePreferences";

export default function TechStack({
  standalone = false,
  paused = false,
}: {
  standalone?: boolean;
  paused?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const {
    paused: globallyPaused,
    setPaused,
    reducedMotion,
  } = useExperiencePreferences();
  const noMotion = paused || globallyPaused || reducedMotion;
  const active = stackGroups[selected];
  return (
    <section
      id="stack"
      className={`stack-section ${standalone ? "stack-standalone" : ""}`}
      aria-labelledby="stack-heading"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Our technology stack</p>
            {standalone ? (
              <h1 id="stack-heading">
                The tools we use
                <br />
                <span>to build your application.</span>
              </h1>
            ) : (
              <h2 id="stack-heading">
                Our technology stack.
                <br />
                <span>What each tool does.</span>
              </h2>
            )}
          </div>
          <p>
            Choose a category to see its tools
            <br />
            and how we use them.
          </p>
        </div>
        <div className="stack-workbench">
          <div className="stack-visual stack-diagram-visual">
            <TechnologyDiagram
              key={active.id}
              category={active.id}
              paused={paused || globallyPaused}
              reducedMotion={reducedMotion}
              onTogglePause={() => setPaused(!(paused || globallyPaused))}
            />
          </div>
          <div className="stack-content">
            <div
              className="stack-selectors"
              role="group"
              aria-label="Explore technology categories"
            >
              {stackGroups.map((group, index) => (
                <button
                  key={group.id}
                  aria-pressed={selected === index}
                  aria-controls="stack-detail"
                  onClick={() => setSelected(index)}
                >
                  <span>{group.number}</span>
                  {group.name}
                </button>
              ))}
            </div>
            <div id="stack-detail" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active.id}
                  initial={{ opacity: 0.5, y: noMotion ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.5 }}
                  transition={{ duration: 0.14 }}
                >
                  <span className="small-label">Category {active.number}</span>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <div className="technology-list">
                    {active.technologies.map((tech) => (
                      <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          className={`tech-mark tech-${tech.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                          aria-hidden="true"
                        >
                          {tech.mark}
                        </span>
                        <span>
                          {tech.name}
                          <small>{tech.purpose}</small>
                        </span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {standalone && (
          <div className="stack-directory">
            <h2>All technologies</h2>
            <p>
              Tools are chosen for the problem. A project uses the tools it
              needs.
            </p>
            <div className="directory-grid">
              {stackGroups.map((group) => (
                <section key={group.id}>
                  <h3>{group.name}</h3>
                  <ul>
                    {group.technologies.map((tech) => (
                      <li key={tech.name}>
                        <a href={tech.url}>{tech.name}</a>
                        <span>{tech.purpose}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
