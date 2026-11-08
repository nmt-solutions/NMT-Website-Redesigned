"use client";

import { useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { CircuitBoard, Code2, Plus, Server, Smartphone } from "lucide-react";
import { services } from "@/lib/site-content";

const icons = {
  web: Code2,
  mobile: Smartphone,
  iot: CircuitBoard,
  cloud: Server,
};

export default function ServiceCard({
  service,
  paused,
}: {
  service: (typeof services)[number];
  paused: boolean;
}) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 280, damping: 32 });
  const rotateY = useSpring(y, { stiffness: 280, damping: 32 });
  const Icon = icons[service.id];
  function move(event: PointerEvent<HTMLElement>) {
    if (paused || reduced || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - box.top) / box.height - 0.5) * 4);
    y.set(((event.clientX - box.left) / box.width - 0.5) * 4);
  }
  return (
    <m.article
      className={`service-card interactive-service ${open ? "is-open" : ""}`}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: paused || reduced ? 0 : rotateX,
        rotateY: paused || reduced ? 0 : rotateY,
        transformPerspective: 900,
      }}
    >
      <div className="service-card-top">
        <span className={`service-icon service-icon-${service.id}`}>
          <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="service-port" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <ul className="service-tags" aria-label={`${service.name} technologies`}>
        {service.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button
        className="service-disclosure"
        aria-expanded={open}
        aria-controls={`service-detail-${service.id}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close details" : "How we build it"}</span>
        <Plus size={16} aria-hidden="true" />
        <span className="sr-only"> for {service.name}</span>
      </button>
      <div id={`service-detail-${service.id}`}>
        <AnimatePresence initial={false}>
          {open && (
            <m.p
              className="service-detail"
              initial={{ opacity: 0, y: paused || reduced ? 0 : 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {service.detail}
            </m.p>
          )}
        </AnimatePresence>
      </div>
    </m.article>
  );
}
