"use client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface BoxRevealProps {
  children: React.JSX.Element;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
};

interface BannerProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function Banner({
  badge = "About ZENEXGEN",
  title = (
    <>
      Building the <span className="text-primary">Future</span>
    </>
  ),
  description = "We're a team of passionate innovators, engineers, and visionaries dedicated to creating software that doesn't just work—it transforms.",
  className = "",
}: BannerProps) {
  return (
    <section className={`relative py-32 lg:py-40 overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500 via-transparent to-transparent" />

      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8">
          {badge && (
            <BoxReveal boxColor="#000000" duration={0.5}>
              <div className="inline-flex">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium"
                >
                  {badge}
                </Badge>
              </div>
            </BoxReveal>
          )}

          <div className="space-y-6 text-center flex justify-center items-center flex-col">
            <BoxReveal boxColor="#000000" duration={0.6}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-center font-bold tracking-tight leading-none text-black">
                {title}
              </h1>
            </BoxReveal>

            {description && (
              <BoxReveal boxColor="#000000" duration={0.7}>
                <div className="max-w-3xl mx-auto pt-4">
                  <p className="text-xl sm:text-2xl text-black/70 leading-relaxed font-light">
                    {description}
                  </p>
                </div>
              </BoxReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
