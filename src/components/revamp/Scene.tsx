"use client";
import { brand } from "@/lib/brand";

import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  type ThreeEvent,
} from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useInView } from "framer-motion";
import { Group, MathUtils, Mesh, Vector3 } from "three";
import type { ServiceId } from "@/lib/site-content";
import SceneFallback from "./SceneFallback";

const ink = brand.ink;
const accent = brand.blue;
type Position = [number, number, number];

function Block({
  position = [0, 0, 0],
  size,
  color = "#eef2ff",
  radius = 0.05,
}: {
  position?: Position;
  size: Position;
  color?: string;
  radius?: number;
}) {
  return (
    <RoundedBox
      position={position}
      args={size}
      radius={Math.min(radius, Math.min(...size) / 2.1)}
      smoothness={2}
      bevelSegments={2}
    >
      <meshStandardMaterial color={color} roughness={0.55} metalness={0.08} />
    </RoundedBox>
  );
}

function Browser() {
  return (
    <group>
      <Block size={[1.85, 1.22, 0.14]} position={[0, 1, 0]} color={ink} />
      <Block
        size={[1.69, 1.06, 0.035]}
        position={[0, 1, 0.087]}
        color="#f8faff"
        radius={0.025}
      />
      <Block
        size={[1.69, 0.17, 0.045]}
        position={[0, 1.45, 0.11]}
        color="#e0e6fc"
        radius={0.02}
      />
      {[-0.7, -0.59, -0.48].map((x) => (
        <mesh key={x} position={[x, 1.45, 0.14]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color={accent} />
        </mesh>
      ))}
      <Block
        size={[0.4, 0.63, 0.04]}
        position={[-0.53, 0.97, 0.12]}
        color="#c0ccef"
        radius={0.02}
      />
      <Block
        size={[0.69, 0.13, 0.04]}
        position={[0.17, 1.18, 0.12]}
        color={accent}
        radius={0.015}
      />
      <Block
        size={[0.78, 0.055, 0.04]}
        position={[0.22, 0.99, 0.12]}
        color="#d5dff5"
        radius={0.01}
      />
      <Block
        size={[0.58, 0.055, 0.04]}
        position={[0.12, 0.85, 0.12]}
        color="#d5dff5"
        radius={0.01}
      />
      <Block
        size={[0.3, 0.13, 0.045]}
        position={[-0.02, 0.66, 0.13]}
        color="#879bdf"
        radius={0.02}
      />
      <Block size={[0.14, 0.4, 0.14]} position={[0, 0.22, 0]} color="#a2b4e6" />
      <Block
        size={[0.85, 0.09, 0.5]}
        position={[0, 0.04, 0.08]}
        color="#c5d1ec"
      />
    </group>
  );
}

function Phone() {
  return (
    <group rotation={[0, -0.12, 0]}>
      <Block
        size={[0.74, 1.42, 0.15]}
        position={[0, 0.77, 0]}
        color={ink}
        radius={0.095}
      />
      <Block
        size={[0.64, 1.27, 0.03]}
        position={[0, 0.77, 0.09]}
        color="#f6f8ff"
        radius={0.07}
      />
      <Block
        size={[0.23, 0.06, 0.04]}
        position={[0, 1.35, 0.113]}
        color={ink}
        radius={0.025}
      />
      <Block
        size={[0.45, 0.4, 0.035]}
        position={[0, 0.99, 0.12]}
        color={accent}
        radius={0.03}
      />
      {[0.6, 0.43].map((y) => (
        <Block
          key={y}
          size={[0.45, 0.09, 0.04]}
          position={[0, y, 0.12]}
          color="#dfe6f8"
          radius={0.015}
        />
      ))}
      <Block
        size={[0.22, 0.09, 0.04]}
        position={[0, 0.23, 0.12]}
        color="#879bdf"
        radius={0.025}
      />
    </group>
  );
}

function Chip() {
  return (
    <group>
      <Block size={[1.2, 0.14, 1.05]} position={[0, 0.12, 0]} color="#bac9ee" />
      <Block size={[0.75, 0.24, 0.65]} position={[0, 0.29, 0]} color={accent} />
      <Block
        size={[0.45, 0.04, 0.36]}
        position={[0, 0.43, 0]}
        color="#cdd9f7"
        radius={0.025}
      />
      {[-0.4, -0.2, 0, 0.2, 0.4].map((x) => (
        <group key={x}>
          <Block
            size={[0.08, 0.06, 0.18]}
            position={[x, 0.14, 0.58]}
            color="#acbade"
            radius={0.01}
          />
          <Block
            size={[0.08, 0.06, 0.18]}
            position={[x, 0.14, -0.58]}
            color="#acbade"
            radius={0.01}
          />
        </group>
      ))}
      <mesh position={[0.43, 0.23, 0.32]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshBasicMaterial color="#2b4cf2" />
      </mesh>
    </group>
  );
}

function Server() {
  return (
    <group>
      {[0.28, 0.65, 1.02].map((y, index) => (
        <group key={y}>
          <Block
            size={[0.95, 0.29, 0.72]}
            position={[0, y, 0]}
            color={index === 2 ? accent : "#c2cfea"}
          />
          <Block
            size={[0.45, 0.035, 0.025]}
            position={[-0.1, y, 0.375]}
            color="#e6ecfb"
            radius={0.01}
          />
          <mesh position={[0.33, y, 0.38]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color="#8ca1e8" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Selectable({
  id,
  position,
  selected,
  onSelect,
  children,
  animated,
}: {
  id: ServiceId;
  position: Position;
  selected: ServiceId;
  onSelect: (id: ServiceId) => void;
  children: ReactNode;
  animated: boolean;
}) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const invalidate = useThree((state) => state.invalidate);
  const lifted = selected === id || hovered;
  useEffect(() => {
    invalidate();
  }, [lifted, invalidate]);
  useFrame((_, delta) => {
    if (!group.current) return;
    const target = position[1] + (lifted ? 0.16 : 0);
    const next = animated
      ? MathUtils.damp(
          group.current.position.y,
          target,
          9,
          Math.min(delta, 0.05),
        )
      : target;
    group.current.position.y = Math.abs(next - target) < 0.001 ? target : next;
    if (Math.abs(next - target) > 0.001) invalidate();
  });
  const select = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(id);
  };
  return (
    <group
      ref={group}
      position={position}
      onClick={select}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <Block
        size={[2.02, 0.1, 1.58]}
        position={[0, -0.05, 0]}
        color={selected === id ? "#cdd9fc" : "#e4eafa"}
      />
      {children}
    </group>
  );
}

function Packet({ offset, animated }: { offset: number; animated: boolean }) {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (!mesh.current || !animated) return;
    const phase = ((state.clock.elapsedTime * 0.19 + offset) % 1) * 4;
    if (phase < 1) mesh.current.position.set(-1.2 + phase * 2.4, 0.07, -0.9);
    else if (phase < 2)
      mesh.current.position.set(1.2, 0.07, -0.9 + (phase - 1) * 1.8);
    else if (phase < 3)
      mesh.current.position.set(1.2 - (phase - 2) * 2.4, 0.07, 0.9);
    else mesh.current.position.set(-1.2, 0.07, 0.9 - (phase - 3) * 1.8);
  });
  return (
    <mesh ref={mesh} position={[-1.2, 0.07, -0.9]}>
      <boxGeometry args={[0.12, 0.08, 0.12]} />
      <meshBasicMaterial color="#2b4cf2" />
    </mesh>
  );
}

function Ecosystem({
  selected,
  onSelect,
  animated,
}: {
  selected: ServiceId;
  onSelect: (id: ServiceId) => void;
  animated: boolean;
}) {
  return (
    <group position={[0, -0.6, 0]}>
      <Block
        size={[5.3, 0.23, 4.2]}
        position={[0, -0.27, 0]}
        color="#dfe6f6"
        radius={0.1}
      />
      <Block
        size={[5.15, 0.035, 4.05]}
        position={[0, -0.135, 0]}
        color="#f2f5ff"
        radius={0.06}
      />
      <Block
        size={[2.4, 0.025, 0.045]}
        position={[0, -0.08, -0.9]}
        color="#c2ceed"
        radius={0.01}
      />
      <Block
        size={[2.4, 0.025, 0.045]}
        position={[0, -0.08, 0.9]}
        color="#c2ceed"
        radius={0.01}
      />
      {[-1.2, 1.2].map((x) => (
        <Block
          key={x}
          size={[0.045, 0.025, 1.8]}
          position={[x, -0.08, 0]}
          color="#c2ceed"
          radius={0.01}
        />
      ))}
      <Packet offset={0} animated={animated} />
      <Packet offset={0.5} animated={animated} />
      <Selectable
        id="web"
        position={[-1.2, 0, -0.9]}
        selected={selected}
        onSelect={onSelect}
        animated={animated}
      >
        <Browser />
      </Selectable>
      <Selectable
        id="cloud"
        position={[1.2, 0, -0.9]}
        selected={selected}
        onSelect={onSelect}
        animated={animated}
      >
        <Server />
      </Selectable>
      <Selectable
        id="iot"
        position={[-1.2, 0, 0.9]}
        selected={selected}
        onSelect={onSelect}
        animated={animated}
      >
        <Chip />
      </Selectable>
      <Selectable
        id="mobile"
        position={[1.2, 0, 0.9]}
        selected={selected}
        onSelect={onSelect}
        animated={animated}
      >
        <Phone />
      </Selectable>
    </group>
  );
}

function CameraFit() {
  const { camera, size } = useThree();
  useEffect(() => {
    if (!("zoom" in camera)) return;
    camera.zoom = Math.min(size.width / 8, size.height / 5.7);
    camera.lookAt(new Vector3(0, 0, 0));
    camera.updateProjectionMatrix();
  }, [camera, size]);
  return null;
}

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <SceneFallback /> : this.props.children;
  }
}

type SceneProps = {
  selected: ServiceId;
  onSelect: (id: ServiceId) => void;
  paused: boolean;
};

export default function Scene(props: SceneProps) {
  const host = useRef<HTMLDivElement>(null);
  const inView = useInView(host, { margin: "100px" });
  const [supported, setSupported] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setSupported(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setSupported(false);
    }
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  const animated = !props.paused;
  return (
    <div ref={host} className="canvas-host" aria-hidden="true">
      {supported ? (
        <SceneBoundary>
          <Canvas
            orthographic
            camera={{ position: [8, 8, 8], near: 0.1, far: 100, zoom: 60 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
            frameloop={
              !inView || !visible ? "never" : props.paused ? "demand" : "always"
            }
            fallback={<SceneFallback />}
          >
            <CameraFit />
            <ambientLight intensity={1.8} />
            <directionalLight position={[-3, 8, 5]} intensity={3} />
            <directionalLight
              position={[5, 3, -4]}
              intensity={1.2}
              color="#dbe4ff"
            />
            <Ecosystem
              selected={props.selected}
              onSelect={props.onSelect}
              animated={animated}
            />
          </Canvas>
        </SceneBoundary>
      ) : (
        <SceneFallback />
      )}
    </div>
  );
}
