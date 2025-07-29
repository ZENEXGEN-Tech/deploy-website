"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-32 items-center justify-center rounded-full border-2 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-sm  p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ZenexgenTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg p-8"
      ref={containerRef}
    >
      {/* Grid layout with exactly 3 items per row */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
        {/* Row 1: PostgreSQL, React, TypeScript */}
        <div className="flex justify-center">
          <Circle ref={div1Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              className="w-20 h-20"
            />
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle ref={div2Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-20 h-20"
            />
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle ref={div5Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="w-20 h-20"
            />
          </Circle>
        </div>

        {/* Row 2: Python, ZX (Center), Node.js */}
        <div className="flex justify-center">
          <Circle ref={div3Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="w-20 h-20"
            />
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle
            ref={div4Ref}
            className="size-40 border-4 border-blue-200 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
          >
            <p className="text-4xl font-bold text-blue-600 tracking-wider">
              ZX
            </p>
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle ref={div7Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-20 h-20"
            />
          </Circle>
        </div>

        {/* Row 3: Docker, Azure, Next.js */}
        <div className="flex justify-center">
          <Circle ref={div6Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              className="w-20 h-20"
            />
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle ref={div8Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
              alt="Azure"
              className="w-20 h-20"
            />
          </Circle>
        </div>
        <div className="flex justify-center">
          <Circle ref={div9Ref}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="w-20 h-20"
            />
          </Circle>
        </div>
      </div>

      {/* Animated beams connecting all technologies to the center ZX circle */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={20}
      />
    </div>
  );
}
