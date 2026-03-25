"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Base rotation
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.25;

    // Follow mouse gently
    const targetX = (mouse.x * viewport.width) / 4;
    const targetY = (mouse.y * viewport.height) / 4;
    mesh.current.position.x += (targetX - mesh.current.position.x) * 0.05;
    mesh.current.position.y += (targetY - mesh.current.position.y) * 0.05;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
      <Sphere ref={mesh} args={[1.2, 128, 128]} scale={1.5}>
        <MeshDistortMaterial
          color="#111111"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={0.5}
          speed={3}
        />
      </Sphere>
    </Float>
  );
}

export function WebglHeroBg() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40 mix-blend-screen isolate dark:mix-blend-lighten hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#666666" />
        <pointLight position={[0, -5, 5]} intensity={2} color="#444444" />
        <InteractiveSphere />
      </Canvas>
    </div>
  );
}
