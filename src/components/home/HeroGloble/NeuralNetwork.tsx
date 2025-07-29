"use client";

import { useState, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { AdditiveBlending, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
// import { useControls, folder } from "leva";
import * as THREE from "three";

// Define the interface for particle data
interface ParticleData {
  velocity: Vector3;
  numConnections: number;
  position: Vector3;
  direction: Vector3;
  perpendicular: Vector3;
  speed: number;
}

export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry | null>(null);

  const maxParticleCount = 1000;
  const [particleCount, setParticleCount] = useState(500); // Use state instead of let
  const r = 800;
  let vertexpos = 0;
  let colorpos = 0;
  let numConnected = 0;
  const maxConnections = 12;
  const minDistance = 111;
  const maxSpeed = 0.4;
  const limitConnections = false;

  const linesRef = useRef<THREE.LineSegments | null>(null);
  const dotsRef = useRef<THREE.Points | null>(null);
  console.log(setParticleCount);

  //   const controls = useControls({
  //     showDots: {
  //       value: true,
  //       onChange: (value) => {
  //         if (dotsRef.current) {
  //           dotsRef.current.visible = value;
  //         }
  //       },
  //     },
  //     showLines: {
  //       value: true,
  //       onChange: (value) => {
  //         if (linesRef.current) {
  //           linesRef.current.visible = value;
  //         }
  //       },
  //     },
  //     limitConnections: {
  //       value: true,
  //       onChange: (value) => {
  //         limitConnections = value;
  //       },
  //     },
  //     maxConnections: {
  //       value: 12,
  //       min: 0,
  //       max: 30,
  //       step: 1,
  //       onChange: (value) => {
  //         maxConnections = Number(value);
  //       },
  //     },
  //     minDistance: {
  //       value: 111,
  //       min: 10,
  //       max: 300,
  //       step: 1,
  //       onChange: (value) => {
  //         minDistance = Number(value);
  //       },
  //     },
  //     maxSpeed: {
  //       value: 0.4,
  //       min: 0,
  //       max: 10,
  //       step: 0.1,
  //       onChange: (value) => {
  //         maxSpeed = Number(value);
  //       },
  //     },
  //     particleCount: {
  //       value: 751,
  //       min: 0,
  //       max: maxParticleCount,
  //       step: 1,
  //       onChange: (value) => {
  //         setParticleCount(Number(value)); // Use state setter
  //       },
  //     },
  //   });

  const segments = maxParticleCount * maxParticleCount;
  const positions = useMemo(() => new Float32Array(segments * 3), [segments]);
  const colors = useMemo(() => new Float32Array(segments * 3), [segments]);

  const particlePositions = useMemo(
    () => new Float32Array(maxParticleCount * 3),
    []
  );
  const particlesData = useMemo<ParticleData[]>(() => [], []);
  const sp = useMemo(() => new Vector3(), []);

  useLayoutEffect(() => {
    // Clear existing data
    particlesData.length = 0;

    for (let i = 0; i < maxParticleCount; i++) {
      const phi = Math.acos(Math.random() * 2 - 1);
      const theta = Math.random() * 2 * Math.PI;

      sp.setFromSphericalCoords(r / 2, phi, theta);

      particlePositions[i * 3] = sp.x;
      particlePositions[i * 3 + 1] = sp.y;
      particlePositions[i * 3 + 2] = sp.z;

      particlesData.push({
        velocity: new Vector3(
          -1 + Math.random() * 2,
          -1 + Math.random() * 2,
          -1 + Math.random() * 2
        ),
        numConnections: 0,
        position: new Vector3(sp.x, sp.y, sp.z),
        direction: new Vector3(),
        perpendicular: new Vector3(),
        speed: Math.random() * 4,
      });
    }
  }, []);

  // Update draw range when particleCount changes
  useEffect(() => {
    if (particlesRef.current && particlesRef.current.geometry) {
      particlesRef.current.geometry.setDrawRange(0, particleCount);
    }
  }, [particleCount]);

  useFrame(() => {
    vertexpos = 0;
    colorpos = 0;
    numConnected = 0;

    for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

    for (let i = 0; i < particleCount; i++) {
      const particleData = particlesData[i];

      particleData.direction.copy(particleData.position).normalize();
      particleData.perpendicular
        .crossVectors(particleData.direction, particleData.velocity)
        .normalize();
      const speed = particleData.speed * maxSpeed;
      const velocity = particleData.perpendicular.multiplyScalar(speed);

      particleData.position.add(velocity);
      particleData.position.clampLength(0, r / 2);
      particlePositions[i * 3] = particleData.position.x;
      particlePositions[i * 3 + 1] = particleData.position.y;
      particlePositions[i * 3 + 2] = particleData.position.z;

      if (limitConnections && particleData.numConnections >= maxConnections)
        continue;

      for (let j = i + 1; j < particleCount; j++) {
        const particleDataB = particlesData[j];
        if (limitConnections && particleDataB.numConnections >= maxConnections)
          continue;

        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < minDistance) {
          particleData.numConnections++;
          particleDataB.numConnections++;

          const alpha = 1.0 - dist / minDistance;

          positions[vertexpos++] = particlePositions[i * 3];
          positions[vertexpos++] = particlePositions[i * 3 + 1];
          positions[vertexpos++] = particlePositions[i * 3 + 2];

          positions[vertexpos++] = particlePositions[j * 3];
          positions[vertexpos++] = particlePositions[j * 3 + 1];
          positions[vertexpos++] = particlePositions[j * 3 + 2];

          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;

          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;
          colors[colorpos++] = alpha;

          numConnected++;
        }
      }
    }

    if (linesGeometryRef.current) {
      linesGeometryRef.current.setDrawRange(0, numConnected * 2);
      linesGeometryRef.current.attributes.position.needsUpdate = true;
      linesGeometryRef.current.attributes.color.needsUpdate = true;
    }

    if (particlesRef.current && particlesRef.current.geometry) {
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <points ref={dotsRef}>
        <bufferGeometry ref={particlesRef}>
          <bufferAttribute
            args={[particlePositions, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <pointsMaterial
          color="#14b8a6" // teal-500
          size={3}
          blending={AdditiveBlending}
          transparent={true}
          sizeAttenuation={false}
        />
      </points>

      <lineSegments ref={linesRef} renderOrder={-1}>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute args={[positions, 3]} attach="attributes-position" />
          <bufferAttribute args={[colors, 3]} attach="attributes-color" />
        </bufferGeometry>
        <lineBasicMaterial
          color="#14b8a6" // teal-500
          vertexColors={false}
          blending={AdditiveBlending}
          transparent={true}
          opacity={0.9}
        />
      </lineSegments>
    </group>
  );
}
