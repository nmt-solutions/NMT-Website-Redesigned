"use client";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";
export default function MotionProvider({
  children,
  paused = false,
}: PropsWithChildren<{ paused?: boolean }>) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={paused ? "always" : "user"}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
