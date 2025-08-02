"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; name?: string }
>(({ className, children, name }, ref) => {
  return (
    <div className="group relative flex justify-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-32 items-center justify-center rounded-full border-2 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-sm p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.6)]",
          className
        )}
      >
        {children}
      </div>
      {name && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-20">
          {name}
        </div>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

const techStack = [
  {
    id: "postgresql",
    name: "PostgreSQL",
    src: "/icons/pg.svg",
    alt: "PostgreSQL",
  },
  {
    id: "react",
    name: "React",
    src: "/icons/react.svg",
    alt: "React",
  },
  {
    id: "typescript",
    name: "TypeScript",
    src: "/icons/ts.svg",
    alt: "TypeScript",
  },
  {
    id: "python",
    name: "Python",
    src: "/icons/py.svg",
    alt: "Python",
  },
  {
    id: "nodejs",
    name: "Node.js",
    src: "/icons/node.svg",
    alt: "Node.js",
  },
  {
    id: "docker",
    name: "Docker",
    src: "/icons/docker.svg",
    alt: "Docker",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    src: "/icons/azure.svg",
    alt: "Azure",
  },
  {
    id: "nextjs",
    name: "Next.js",
    src: "/icons/next.svg",
    alt: "Next.js",
  },
];

export function ZenexgenTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set refs for each tech item
  const setTechRef = (index: number) => (el: HTMLDivElement | null) => {
    techRefs.current[index] = el;
  };

  return (
    <div
      className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg p-8"
      ref={containerRef}
    >
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
        {/* Row 1 - First 3 technologies */}
        {techStack.slice(0, 3).map((tech, index) => (
          <Circle key={tech.id} ref={setTechRef(index)} name={tech.name}>
            <Image
              src={tech.src}
              width={80}
              height={80}
              alt={tech.alt}
              className="w-20 h-20"
            />
          </Circle>
        ))}

        {/* Row 2 - Python, ZX Center, Node.js */}
        <Circle ref={setTechRef(3)} name={techStack[3].name}>
          <Image
            src={techStack[3].src}
            width={80}
            height={80}
            alt={techStack[3].alt}
            className="w-20 h-20"
          />
        </Circle>

        {/* Center ZX Circle */}
        <Circle
          ref={centerRef}
          className="size-40 border-4 border-blue-200 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
          name="Zenexgen"
        >
          <p className="text-4xl font-bold text-blue-600 tracking-wider">ZX</p>
        </Circle>

        <Circle ref={setTechRef(4)} name={techStack[4].name}>
          <Image
            src={techStack[4].src}
            width={80}
            height={80}
            alt={techStack[4].alt}
            className="w-20 h-20"
          />
        </Circle>

        {/* Row 3 - Last 3 technologies */}
        {techStack.slice(5, 8).map((tech, index) => (
          <Circle key={tech.id} ref={setTechRef(index + 5)} name={tech.name}>
            <Image
              src={tech.src}
              width={80}
              height={80}
              alt={tech.alt}
              className="w-20 h-20"
            />
          </Circle>
        ))}
      </div>

      {/* Animated beams connecting all technologies to the center ZX circle */}
      {techRefs.current.map((ref, index) => {
        if (!ref || !centerRef.current) return null;

        const curvatureMap = [-75, 75, 0, 0, 0, -75, -75, 75];
        const endYOffsetMap = [-10, -10, 0, 0, 0, 10, 20, 20];

        return (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={{ current: ref }}
            toRef={centerRef}
            curvature={curvatureMap[index]}
            endYOffset={endYOffsetMap[index]}
          />
        );
      })}
    </div>
  );
}
