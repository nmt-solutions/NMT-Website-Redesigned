"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Layers3, Minus, Plus } from "lucide-react";
import { stackGroups } from "@/lib/site-content";
import SceneFallback from "./SceneFallback";
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <SceneFallback stack />,
});

export default function TechStack({
  standalone = false,
  paused = false,
}: {
  standalone?: boolean;
  paused?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const reduced = useReducedMotion();
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
            <p className="eyebrow">02 / THE TOOLS BEHIND THE THINKING</p>
            {standalone ? (
              <h1 id="stack-heading">
                A thoughtful stack.
                <br />
                <span>Built layer by layer.</span>
              </h1>
            ) : (
              <h2 id="stack-heading">
                Good tools.
                <br />
                <span>Better together.</span>
              </h2>
            )}
          </div>
          <p>
            Each layer has a purpose.
            <br />
            Explore how the pieces fit together.
          </p>
        </div>
        <div className="stack-workbench">
          <div className="stack-visual">
            <span className="scene-label">
              <Layers3 size={14} aria-hidden="true" /> ANATOMY OF AN APPLICATION
            </span>
            <Scene
              mode="stack"
              selected={selected}
              onSelect={setSelected}
              expanded={expanded}
              paused={paused || Boolean(reduced)}
            />
            <div className="stack-visual-footer">
              <span>SELECT A LAYER TO EXPLORE</span>
              <button
                className="quiet-button"
                aria-pressed={expanded}
                onClick={() => setExpanded((value) => !value)}
              >
                {expanded ? (
                  <Minus size={14} aria-hidden="true" />
                ) : (
                  <Plus size={14} aria-hidden="true" />
                )}
                {expanded ? "Assemble layers" : "Separate layers"}
              </button>
            </div>
          </div>
          <div className="stack-content">
            <div
              className="stack-selectors"
              role="group"
              aria-label="Explore technology layers"
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
                  initial={{ opacity: 0.5, y: reduced || paused ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.5 }}
                  transition={{ duration: 0.14 }}
                >
                  <span className="small-label">LAYER {active.number}</span>
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
            <h2>The full toolkit</h2>
            <p>
              Tools are chosen for the problem. A project uses the layers it
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
