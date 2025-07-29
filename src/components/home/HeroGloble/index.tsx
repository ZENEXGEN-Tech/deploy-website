"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NeuralNetwork } from "./NeuralNetwork";
import { Globe } from "./Globe";
import { Particles } from "./Particles";

export default function HeroGloble() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 1000], far: 4000, fov: 55 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight
          position={[600, 600, 600]}
          color="#14b8a6"
          intensity={0.5}
        />
        <pointLight
          position={[-600, -600, 600]}
          color="#14b8a6"
          intensity={0.3}
        />

        {/* 3D Components */}
        <NeuralNetwork />
        <Particles />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          maxDistance={2000}
          minDistance={500}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
