"use client";

import { Atom, Code, Cpu, FileCode2, Globe, Layers, Server, Terminal } from "lucide-react";
import React, { useEffect, useState } from "react";

// Pipeline metadata
const PIPELINES = [
  {
    name: "CLOUD SAAS",
    status: "FULLY DEPLOYED",
    Icon: Terminal,
    stack: [
      { key: "TypeScript", short: "TS", color: "#38BDF8", Icon: Code },
      { key: "Node.js", short: "Node", color: "#4ADE80", Icon: Cpu },
      { key: "React", short: "React", color: "#61DAFB", Icon: Atom },
    ],
  },
  {
    name: "FULLSTACK APP",
    status: "PRODUCTION READY",
    Icon: Layers,
    stack: [
      { key: "JavaScript", short: "JS", color: "#FACC15", Icon: FileCode2 },
      { key: "TypeScript", short: "TS", color: "#38BDF8", Icon: Code },
      { key: "React", short: "React", color: "#61DAFB", Icon: Atom },
      { key: "Node.js", short: "Node", color: "#4ADE80", Icon: Cpu },
    ],
  },
  {
    name: "EDGE WEBPAGE",
    status: "WARP HYDRATED",
    Icon: Globe,
    stack: [
      { key: "JavaScript", short: "JS", color: "#FACC15", Icon: FileCode2 },
      { key: "TypeScript", short: "TS", color: "#38BDF8", Icon: Code },
      { key: "React", short: "React", color: "#61DAFB", Icon: Atom },
    ],
  },
  {
    name: "BACKEND API",
    status: "SERVICES ACTIVE",
    Icon: Server,
    stack: [
      { key: "TypeScript", short: "TS", color: "#38BDF8", Icon: Code },
      { key: "Node.js", short: "Node", color: "#4ADE80", Icon: Cpu },
    ],
  },
];

// Responsive symmetrical offsets for compact & clean badge clearance
const POSITIONS = [
  { x: 0, y: -175 },   // Top
  { x: 0, y: 175 },    // Bottom
  { x: 200, y: 0 },    // Right
  { x: -200, y: 0 },   // Left
];

export default function OptimizedHeroPlate() {
  const [pipelineIdx, setPipelineIdx] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  const curr = PIPELINES[pipelineIdx];
  const TargetIcon = curr.Icon;

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsEntering(true), 60);
    const exitTimer = setTimeout(() => setIsEntering(false), 2400);
    const nextTimer = setTimeout(() => {
      setPipelineIdx((prev) => (prev + 1) % PIPELINES.length);
    }, 3100);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(nextTimer);
    };
  }, [pipelineIdx]);

  return (
    <>
      <style>{`
        .iso-viewport {
          perspective: 1100px;
          transform-style: preserve-3d;
        }
        .iso-stage {
          transform: rotateX(35deg) rotateZ(-15deg);
          transform-style: preserve-3d;
        }
        .spring-base {
          transition: transform 600ms cubic-bezier(0.34, 1.4, 0.64, 1), 
                      opacity 500ms ease, 
                      box-shadow 600ms ease;
        }
        .spring-card {
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1), 
                      opacity 500ms ease,
                      box-shadow 600ms ease;
        }
      `}</style>

      <div className="w-full h-full hidden min-h-[500px] lg:flex items-center justify-center relative select-none bg-transparent overflow-visible">
        <div className="relative w-full max-w-[480px] h-[480px] flex items-center justify-center iso-viewport">
          <div className="relative w-64 h-64 flex items-center justify-center iso-stage">
            
            {/* Outer Rounded Halo */}
            <div
              className="absolute -inset-5 rounded-[44px] border border-[#00FF87]/20 pointer-events-none spring-base"
              style={{
                boxShadow: isEntering
                  ? "0 0 35px rgba(0, 255, 135, 0.3)"
                  : "0 0 10px rgba(0, 255, 135, 0.05)",
                transform: isEntering
                  ? "translateZ(-16px) scale(1)"
                  : "translateZ(-16px) scale(0.9)",
              }}
            />

            {/* Base Shadow Floor */}
            <div
              className="absolute inset-0 rounded-[32px] bg-[#020d06] border border-[#00FF87]/15 spring-base"
              style={{
                transform: isEntering
                  ? "translateZ(-8px) scale(1)"
                  : "translateZ(-8px) scale(0.9)",
              }}
            />

            {/* Main Central Reactor Platform */}
            <div
              className="absolute inset-0 rounded-[32px] bg-[#03150b] border-2 border-[#00FF87]/90 flex flex-col items-center justify-center p-5 spring-base"
              style={{
                boxShadow: isEntering
                  ? "0 0 25px rgba(0, 255, 135, 0.4), inset 0 0 15px rgba(0, 255, 135, 0.2)"
                  : "0 0 8px rgba(0, 255, 135, 0.08)",
                transform: isEntering
                  ? "translateZ(8px) scale(1)"
                  : "translateZ(0px) scale(0.9)",
              }}
            >
              <div className="absolute top-3.5 right-4 text-[#00FF87] opacity-60 text-xs font-mono">
                ✦
              </div>

              {/* Target Morphing Icon */}
              <div
                className="relative flex items-center justify-center mb-2.5 spring-base"
                style={{
                  transform: isEntering
                    ? "scale(1) rotate(0deg)"
                    : "scale(0) rotate(-180deg)",
                  opacity: isEntering ? 1 : 0,
                }}
              >
                <TargetIcon
                  className="w-11 h-11 text-[#00FF87] stroke-[2]"
                  style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 135, 0.6))" }}
                />
              </div>

              {/* Title & Status */}
              <div
                className="flex flex-col items-center text-center spring-base"
                style={{
                  transform: isEntering ? "scale(1)" : "scale(0.7)",
                  opacity: isEntering ? 1 : 0,
                }}
              >
                <span className="text-xs font-mono font-black tracking-widest text-white uppercase">
                  {curr.name}
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#00FF87] uppercase">
                    {curr.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Compact, Crisp Stack Badges */}
            {curr.stack.map((item, i) => {
              const IconComponent = item.Icon;
              const pos = POSITIONS[i] || POSITIONS[0];

              return (
                <div
                  key={`${pipelineIdx}-${item.key}`}
                  className="absolute top-1/2 left-1/2 -ml-[50px] -mt-[17px] w-[100px] h-[34px] rounded-xl border flex items-center justify-start gap-2 px-2.5 pointer-events-none spring-card"
                  style={{
                    backgroundColor: "#05160d",
                    borderColor: item.color,
                    boxShadow: isEntering
                      ? `0 0 10px ${item.color}33, inset 0 0 6px ${item.color}15`
                      : "none",
                    transform: isEntering
                      ? `translate3d(${pos.x}px, ${pos.y}px, 20px) scale(1) rotate(0deg)`
                      : "translate3d(0px, 0px, 0px) scale(0.2) rotate(45deg)",
                    opacity: isEntering ? 1 : 0,
                  }}
                >
                  {/* Icon Square */}
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}25` }}
                  >
                    <IconComponent
                      className="w-3 h-3 stroke-[2.4]"
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Tech Tag */}
                  <span className="font-mono text-xs font-bold tracking-wide text-white truncate">
                    {item.short}
                  </span>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}