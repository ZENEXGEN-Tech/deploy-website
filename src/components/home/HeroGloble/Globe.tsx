"use client";
import { useRef, useState, useEffect } from "react";
import { MeshStandardMaterial } from "three";
import { API } from "./api";

export function Globe() {
  const globeRef = useRef<any | null>(null);
  const [globe, setGlobe] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("three-globe")
      .then((ThreeGlobeModule) => {
        const ThreeGlobe = ThreeGlobeModule.default;

        const newGlobe = new ThreeGlobe()
          .hexPolygonsData(API.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .hexPolygonAltitude(0.02)
          .atmosphereAltitude(0.15)
          .showAtmosphere(true)
          .atmosphereColor("#14b8a6") // teal-500
          .globeMaterial(
            new MeshStandardMaterial({
              color: 0x1a1a1a,
              roughness: 0.8,
              metalness: 0.1,
            })
          )
          .hexPolygonColor(() => "#14b8a6"); // teal-500

        newGlobe.scale.set(2, 2, 2); // Adjusted scale
        setGlobe(newGlobe);
      })
      .catch((error) => {
        console.error("Failed to load three-globe:", error);
      });
  }, []);

  if (!globe) {
    return null;
  }

  return <primitive object={globe} ref={globeRef} />;
}
