"use client";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

interface SplineSceneProps {
  className?: string;
}

export default function SplineScene({ className = "" }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton that matches your expected scene */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Animated background that hints at the 3D scene */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/3 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/50"></div>
            </div>
          </div>

          {/* Loading text */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="flex items-center space-x-2 text-white/60">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-sm">Loading Experience</span>
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={null}>
        <Spline
          scene="/spline/scene.spline"
          onLoad={() => setIsLoaded(true)}
          onError={(error) => {
            console.error("Spline error:", error);
          }}
          className="relative w-full h-full"
        />
      </Suspense>
    </div>
  );
}
