"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

interface SplineSceneProps {
  className?: string;
}

export default function SplineScene({ className = "" }: SplineSceneProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        }
      >
        <Spline scene="https://prod.spline.design/8fBS2TZ9zvjT-dTN/scene.splinecode" />
      </Suspense>
    </div>
  );
}
