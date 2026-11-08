"use client";

import { useEffect, useRef, useState } from "react";
import {
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ServiceId } from "@/lib/site-content";

const routes = [
  { id: "web", path: "M-80 460 220 287 520 460 820 287 1120 460 1500 240" },
  { id: "mobile", path: "M-100 660 200 487 500 660 800 487 1100 660 1540 406" },
  { id: "iot", path: "M-80 560 240 745 540 572 840 745 1140 572 1500 780" },
  { id: "cloud", path: "M180 -50 180 110 480 283 780 110 1080 283 1460 64" },
];

export default function AmbientNetwork({
  paused,
  selected,
}: {
  paused: boolean;
  selected: ServiceId;
}) {
  const host = useRef<HTMLDivElement>(null);
  const inView = useInView(host);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightX = useSpring(x, { stiffness: 50, damping: 24 });
  const lightY = useSpring(y, { stiffness: 50, damping: 24 });

  useEffect(() => {
    const visibility = () => setVisible(!document.hidden);
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => document.removeEventListener("visibilitychange", visibility);
  }, []);

  useEffect(() => {
    if (paused || reduced) {
      x.set(0);
      y.set(0);
      return;
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x.set((event.clientX / window.innerWidth - 0.5) * 40);
      y.set((event.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [paused, reduced, x, y]);

  return (
    <div
      ref={host}
      className="ambient-network"
      data-paused={paused || !visible || !inView}
      aria-hidden="true"
    >
      <div className="ambient-grid" />
      <m.div
        className="ambient-light ambient-light-blue"
        style={{ x: lightX, y: lightY }}
      />
      <div className="ambient-light ambient-light-purple" />
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="ambient-routes"
      >
        <defs>
          <linearGradient id="ambient-route-color">
            <stop stopColor="var(--brand-purple)" />
            <stop offset="1" stopColor="var(--brand-blue)" />
          </linearGradient>
        </defs>
        {routes.map((route, index) => (
          <g
            key={route.id}
            className={
              selected === route.id
                ? "ambient-channel is-selected"
                : "ambient-channel"
            }
          >
            <path d={route.path} className="ambient-trace" />
            <path
              d={route.path}
              className="ambient-packet"
              style={{ animationDelay: `${index * -3}s` }}
            />
          </g>
        ))}
        {[
          [180, 110],
          [480, 283],
          [780, 110],
          [1080, 283],
          [220, 287],
          [520, 460],
          [820, 287],
          [1120, 460],
          [200, 487],
          [500, 660],
          [800, 487],
          [1100, 660],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={5} className="ambient-node-ring" />
            <circle cx={cx} cy={cy} r={1.8} className="ambient-node" />
          </g>
        ))}
      </svg>
    </div>
  );
}
