"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  m,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import {
  Braces,
  Check,
  CircuitBoard,
  Cloud,
  Code2,
  Globe,
  Network,
  Pause,
  Play,
  Server,
} from "lucide-react";
import type { stackGroups } from "@/lib/site-content";

type Category = (typeof stackGroups)[number]["id"];

const diagrams = {
  interface: {
    title: "Components become a page.",
    description:
      "Reusable interface components and styles form the page a browser displays.",
    paths: ["M130 142H151V123H174"],
  },
  mobile: {
    title: "Shared code. Two platforms.",
    description:
      "React Native with Expo, or Flutter, lets an app share code across iOS and Android.",
    paths: ["M260 234V211H142V189", "M260 234V211H378V189"],
  },
  services: {
    title: "A request gets a response.",
    description:
      "An API runs application logic and returns a response. Longer tasks can run as background jobs.",
    paths: ["M103 142H204", "M316 142H417", "M260 219V242"],
  },
  infrastructure: {
    title: "From an app to a device.",
    description:
      "The app calls an API. Records go to PostgreSQL; device commands pass through Cloudflare Tunnel to a Raspberry Pi controller.",
    paths: ["M126 71H218", "M302 71H405", "M260 97V176", "M335 207H405"],
  },
} satisfies Record<
  Category,
  {
    title: string;
    description: string;
    paths: string[];
  }
>;

function WebDiagram({ traced }: { traced: boolean }) {
  return (
    <>
      <g className="diagram-component">
        <rect
          x="32"
          y="115"
          width="98"
          height="62"
          rx="10"
          className="diagram-depth"
        />
        <rect
          x="24"
          y="105"
          width="106"
          height="62"
          rx="10"
          className="diagram-panel"
        />
        <Braces x={65} y={116} width={24} height={24} />
        <text x="77" y="154" textAnchor="middle">
          Components
        </text>
      </g>
      <g className={traced ? "diagram-browser is-traced" : "diagram-browser"}>
        <rect
          x="182"
          y="65"
          width="298"
          height="198"
          rx="12"
          className="diagram-depth"
        />
        <rect
          x="174"
          y="55"
          width="298"
          height="198"
          rx="12"
          className="diagram-panel"
        />
        <path d="M175 87H471" className="diagram-rule" />
        <circle cx="188" cy="71" r="2.5" className="diagram-dot" />
        <circle cx="198" cy="71" r="2.5" className="diagram-dot" />
        <circle cx="208" cy="71" r="2.5" className="diagram-dot" />
        <rect
          x="235"
          y="65"
          width="132"
          height="12"
          rx="4"
          className="diagram-inset"
        />
        <Globe x={435} y={63} width={16} height={16} />
        <rect
          x="190"
          y="104"
          width="60"
          height="132"
          rx="5"
          className="diagram-inset"
        />
        <rect
          x="202"
          y="116"
          width="35"
          height="6"
          rx="3"
          className="diagram-accent"
        />
        {[141, 160, 179, 198].map((y) => (
          <path key={y} d={`M202 ${y}H235`} className="diagram-rule" />
        ))}
        <rect
          x="265"
          y="104"
          width="188"
          height="57"
          rx="7"
          className="diagram-tint"
        />
        <path d="M279 121H383M279 136H352" className="diagram-content-line" />
        {[265, 363].map((x) => (
          <g key={x}>
            <rect
              x={x}
              y="176"
              width="90"
              height="60"
              rx="7"
              className="diagram-inset"
            />
            <rect
              x={x + 12}
              y="188"
              width="20"
              height="18"
              rx="4"
              className="diagram-tint"
            />
            <path d={`M${x + 12} 221H${x + 68}`} className="diagram-rule" />
          </g>
        ))}
        {traced && (
          <Check
            x={423}
            y={119}
            width={18}
            height={18}
            className="diagram-accent-stroke"
          />
        )}
      </g>
      <text x="323" y="285" textAnchor="middle">
        Browser interface
      </text>
    </>
  );
}

function Phone({
  x,
  label,
  traced,
}: {
  x: number;
  label: string;
  traced: boolean;
}) {
  return (
    <g className={traced ? "diagram-phone is-traced" : "diagram-phone"}>
      <text x={x + 46} y="32" textAnchor="middle">
        {label}
      </text>
      <rect
        x={x + 6}
        y="55"
        width="92"
        height="140"
        rx="15"
        className="diagram-depth"
      />
      <rect
        x={x}
        y="47"
        width="92"
        height="142"
        rx="15"
        className="diagram-phone-frame"
      />
      <rect
        x={x + 6}
        y="53"
        width="80"
        height="130"
        rx="10"
        className="diagram-panel"
      />
      <rect
        x={x + 31}
        y="53"
        width="30"
        height="5"
        rx="2.5"
        className="diagram-ink"
      />
      <rect
        x={x + 15}
        y="76"
        width="62"
        height="35"
        rx="6"
        className="diagram-tint"
      />
      <path
        d={`M${x + 16} 127H${x + 75}M${x + 16} 141H${x + 60}`}
        className="diagram-rule"
      />
      <rect
        x={x + 16}
        y="154"
        width="60"
        height="17"
        rx="5"
        className="diagram-accent"
      />
      {traced && (
        <Check x={x + 40} y={157} width={12} height={12} stroke="white" />
      )}
    </g>
  );
}

function MobileDiagram({ traced }: { traced: boolean }) {
  return (
    <>
      <Phone x={96} label="iOS" traced={traced} />
      <Phone x={332} label="Android" traced={traced} />
      <rect
        x="171"
        y="242"
        width="190"
        height="45"
        rx="9"
        className="diagram-depth"
      />
      <rect
        x="165"
        y="234"
        width="190"
        height="45"
        rx="9"
        className="diagram-panel"
      />
      <Code2 x={183} y={246} width={22} height={22} />
      <text x="275" y="261" textAnchor="middle">
        Shared app code
      </text>
    </>
  );
}

function ServerDiagram({ traced }: { traced: boolean }) {
  return (
    <>
      <text x="64" y="106" textAnchor="middle">
        Request
      </text>
      <rect
        x="25"
        y="115"
        width="78"
        height="54"
        rx="10"
        className="diagram-panel"
      />
      <Code2 x={50} y={128} width={28} height={28} />
      <g className={traced ? "diagram-server is-traced" : "diagram-server"}>
        <rect
          x="212"
          y="75"
          width="112"
          height="152"
          rx="12"
          className="diagram-depth"
        />
        <rect
          x="204"
          y="65"
          width="112"
          height="154"
          rx="12"
          className="diagram-panel"
        />
        <Server x={245} y={82} width={30} height={30} />
        <rect
          x="216"
          y="125"
          width="88"
          height="30"
          rx="5"
          className="diagram-tint"
        />
        <text x="260" y="145" textAnchor="middle">
          API
        </text>
        <rect
          x="216"
          y="166"
          width="88"
          height="36"
          rx="5"
          className="diagram-inset"
        />
        <text x="260" y="188" textAnchor="middle">
          App logic
        </text>
      </g>
      <text x="455" y="106" textAnchor="middle">
        Response
      </text>
      <rect
        x="417"
        y="115"
        width="78"
        height="54"
        rx="10"
        className="diagram-panel"
      />
      <Check x={441} y={128} width={28} height={28} />
      <rect
        x="185"
        y="242"
        width="150"
        height="38"
        rx="8"
        className="diagram-panel"
      />
      <text x="260" y="266" textAnchor="middle">
        Background jobs
      </text>
    </>
  );
}

function HardwareDiagram({ traced }: { traced: boolean }) {
  return (
    <>
      <rect
        x="36"
        y="45"
        width="90"
        height="52"
        rx="9"
        className="diagram-panel"
      />
      <text x="81" y="77" textAnchor="middle">
        App
      </text>
      <rect
        x="218"
        y="45"
        width="84"
        height="52"
        rx="9"
        className="diagram-panel"
      />
      <text x="260" y="77" textAnchor="middle">
        API
      </text>
      <g>
        <path
          d="M405 57V100C405 119 497 119 497 100V57Z"
          className="diagram-depth"
        />
        <path
          d="M405 57V91C405 110 497 110 497 91V57Z"
          className="diagram-panel"
        />
        <ellipse cx="451" cy="57" rx="46" ry="12" className="diagram-tint" />
        <path d="M405 75C405 92 497 92 497 75" className="diagram-rule" />
        <text x="451" y="139" textAnchor="middle">
          PostgreSQL
        </text>
      </g>
      <rect
        x="192"
        y="184"
        width="150"
        height="62"
        rx="9"
        className="diagram-depth"
      />
      <rect
        x="185"
        y="176"
        width="150"
        height="62"
        rx="9"
        className="diagram-panel"
      />
      <Cloud x={199} y={192} width={27} height={27} />
      <text x="277" y="202" textAnchor="middle">
        Cloudflare
      </text>
      <text x="277" y="222" textAnchor="middle">
        Tunnel
      </text>
      <g
        className={
          traced ? "diagram-controller is-traced" : "diagram-controller"
        }
      >
        <rect
          x="412"
          y="190"
          width="90"
          height="62"
          rx="8"
          className="diagram-depth"
        />
        <rect
          x="405"
          y="182"
          width="94"
          height="62"
          rx="8"
          className="diagram-board"
        />
        {[416, 429, 442, 455, 468, 481].map((x) => (
          <path key={x} d={`M${x} 178V187`} className="diagram-pin" />
        ))}
        <CircuitBoard x={416} y={197} width={27} height={27} />
        <text x="471" y="220" textAnchor="middle">
          Pi
        </text>
      </g>
      <text x="452" y="275" textAnchor="middle">
        RPi device
      </text>
      <text x="354" y="54" textAnchor="middle" className="diagram-annotation">
        Records
      </text>
      <text x="316" y="140" textAnchor="middle" className="diagram-annotation">
        Device command
      </text>
    </>
  );
}

export default function TechnologyDiagram({
  category,
  paused,
  reducedMotion,
  onTogglePause,
}: {
  category: Category;
  paused: boolean;
  reducedMotion: boolean;
  onTogglePause: () => void;
}) {
  const host = useRef<HTMLElement>(null);
  const inView = useInView(host);
  const [visible, setVisible] = useState(true);
  const phase = useMotionValue(0);
  const offset = useTransform(phase, (value) => -100 * value);
  const id = useId();
  const diagram = diagrams[category];
  const Graphic =
    category === "interface"
      ? WebDiagram
      : category === "mobile"
        ? MobileDiagram
        : category === "services"
          ? ServerDiagram
          : HardwareDiagram;
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useAnimationFrame((_, delta) => {
    if (paused || reducedMotion || !visible || !inView) return;
    phase.set((phase.get() + Math.min(delta, 50) / 3400) % 1);
  });
  return (
    <figure
      ref={host}
      className="technology-diagram"
      data-category={category}
      data-motion={reducedMotion ? "static" : paused ? "paused" : "animated"}
      aria-labelledby={`${id}-title`}
    >
      <div className="diagram-heading">
        <span className="scene-label">
          <Network size={14} aria-hidden="true" /> Example architecture
        </span>
        <h3 id={`${id}-title`}>{diagram.title}</h3>
      </div>
      <m.svg
        viewBox="0 0 520 300"
        className="diagram-art"
        aria-hidden="true"
        style={{ "--diagram-flow": offset } as MotionStyle}
      >
        <defs>
          <marker
            id={`${id}-arrow`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M1 1L8 5L1 9" className="diagram-arrow" />
          </marker>
        </defs>
        {diagram.paths.map((path) => (
          <path
            key={path}
            d={path}
            className="diagram-connection"
            markerEnd={`url(#${id}-arrow)`}
          />
        ))}
        {diagram.paths.map((path) => (
          <path
            key={path}
            d={path}
            pathLength={100}
            className="diagram-signal"
          />
        ))}
        <Graphic traced={false} />
      </m.svg>
      <figcaption id={`${id}-caption`}>{diagram.description}</figcaption>
      <div className="diagram-controls">
        <span className="diagram-example-label">Illustrative flow</span>
        <button
          className="quiet-button"
          onClick={onTogglePause}
          disabled={reducedMotion}
          aria-pressed={paused}
          aria-label={
            reducedMotion
              ? "Reduced motion is enabled"
              : paused
                ? "Resume flow animation"
                : "Pause flow animation"
          }
          aria-describedby={`${id}-caption`}
        >
          {paused || reducedMotion ? (
            <Play size={13} aria-hidden="true" />
          ) : (
            <Pause size={13} aria-hidden="true" />
          )}
          {reducedMotion
            ? "Motion reduced"
            : paused
              ? "Resume flow"
              : "Pause flow"}
        </button>
      </div>
    </figure>
  );
}
