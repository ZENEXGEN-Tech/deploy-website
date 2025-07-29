"use client";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Particles() {
  const starsRef = useRef<THREE.Group | null>(null); // Specify the type for starsRef

  const particlesCnt = 5000;

  const particlePositions = useMemo(
    () => new Float32Array(particlesCnt * 3),
    []
  );

  useEffect(() => {
    for (let i = 0; i < particlesCnt; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 5000;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 5000;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5000;
    }
  });

  useFrame(() => {
    if (starsRef.current) {
      // Add a null check
      starsRef.current.rotation.y += 0.0005;
    }
  });

  const [texture] = useTexture(["star.png"]);

  return (
    <group ref={starsRef}>
      <points renderOrder={10}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]} // Add the args property
            count={particlesCnt}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={"white"}
          size={8}
          map={texture}
          // blending={AdditiveBlending}
          transparent={true}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}
