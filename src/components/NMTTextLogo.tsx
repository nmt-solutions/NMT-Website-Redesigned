"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function NMTTextLogo() {
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 260, damping: 30 });
  const rotateY = useSpring(y, { stiffness: 260, damping: 30 });
  function move(event: PointerEvent<HTMLSpanElement>) {
    if (reduced || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
    y.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    setActive(true);
  }
  function reset() {
    x.set(0);
    y.set(0);
    setActive(false);
  }
  return (
    <LazyMotion features={domAnimation} strict>
      <span
        className="brand-perspective"
        onPointerMove={move}
        onPointerLeave={reset}
      >
        <m.span
          className="brand-lockup"
          style={{
            rotateX: reduced ? 0 : rotateX,
            rotateY: reduced ? 0 : rotateY,
          }}
        >
          <m.span
            className="brand-logo-wrap"
            animate={{
              z: active && !reduced ? 14 : 0,
              rotateY: active && !reduced ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <Image
              src="/brand/nmt-logo.svg"
              alt=""
              width={40}
              height={40}
              className="brand-logo"
            />
            <sup className="trademark-symbol" aria-hidden="true">
              &#8482;
            </sup>
          </m.span>
          <m.span
            className="wordmark"
            animate={{ z: active && !reduced ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <span className="wordmark-badge">NMT</span>
            <span>Solutions</span>
          </m.span>
        </m.span>
      </span>
    </LazyMotion>
  );
}
