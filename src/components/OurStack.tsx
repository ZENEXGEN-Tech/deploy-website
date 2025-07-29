"use client";

import { Code } from "lucide-react";
import React from "react";
import { ZenexgenTechStack } from "./ZenexgenTechStack";

export default function OurStack() {
  return (
    <div className="py-20">
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Code className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Our Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Powered by <span className="text-gradient">Innovation</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We leverage cutting-edge technologies to build scalable, robust, and
          modern solutions
        </p>
      </div>

      {/* Tech Stack Animation */}
      <div className="flex justify-center items-center">
        <ZenexgenTechStack />
      </div>
    </div>
  );
}
