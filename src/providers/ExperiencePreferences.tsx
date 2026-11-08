"use client";

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

const ExperienceContext = createContext<{
  paused: boolean;
  setPaused: Dispatch<SetStateAction<boolean>>;
  reducedMotion: boolean;
} | null>(null);

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotionPreference(onChange: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
const motionPreference = () => window.matchMedia(motionQuery).matches;
const serverMotionPreference = () => true;

export function ExperiencePreferences({ children }: PropsWithChildren) {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeMotionPreference,
    motionPreference,
    serverMotionPreference,
  );
  return (
    <ExperienceContext.Provider value={{ paused, setPaused, reducedMotion }}>
      <div className="site-experience" data-motion-paused={paused}>
        {children}
      </div>
    </ExperienceContext.Provider>
  );
}

export function useExperiencePreferences() {
  const value = useContext(ExperienceContext);
  if (!value) throw new Error("Experience preferences require their provider.");
  return value;
}
