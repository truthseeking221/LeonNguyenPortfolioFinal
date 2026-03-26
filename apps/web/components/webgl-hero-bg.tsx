"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, Sphere, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function LiquidChromeOrb() {
  const orb = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();

  const isMobile = viewport.width < 6;
  const targetX = isMobile ? 0 : viewport.width / 4; 
  const targetY = isMobile ? viewport.height / 4 : 0;  
  const scale = isMobile ? 1.2 : 2.0;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (orb.current) {
      orb.current.rotation.x = t * 0.1;
      orb.current.rotation.y = t * 0.15;
      
      const ease = 0.05;
      const mouseX = (mouse.x * viewport.width) / 25;
      const mouseY = (mouse.y * viewport.height) / 25;
      
      orb.current.position.x += ((targetX + mouseX) - orb.current.position.x) * ease;
      orb.current.position.y += ((targetY + mouseY) - orb.current.position.y) * ease;
    }
  });

  return (
    <group scale={scale}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere ref={orb} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.02}
            distort={0.25}
            speed={0.8}
            envMapIntensity={3}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export function WebglHeroBg() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-90 isolate">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        {/* Soft fill light */}
        <ambientLight intensity={1.5} />
        
        {/* 
          Futuristic, electric lighting for the ultimate Gleb aesthetic.
        */}
        <directionalLight position={[10, 10, 5]} intensity={5} color="#00f3ff" /> {/* Electric Cyan */}
        <directionalLight position={[-10, -10, -5]} intensity={4} color="#7b2cbf" /> {/* Deep Purple */}
        <directionalLight position={[0, 10, 10]} intensity={4} color="#ffffff" /> {/* Bright White Top */}
        <pointLight position={[5, -5, 5]} intensity={3} color="#f72585" /> {/* Hot Pink pop */}
        
        <LiquidChromeOrb />
        
        {/* The environment map provides the sharp, realistic studio reflections on the chrome */}
        <Environment preset="studio" />
        
        <ContactShadows
          resolution={256}
          scale={20}
          blur={2}
          opacity={0.4}
          far={10}
          color="#000000"
          position={[0, -4, 0]}
        />
      </Canvas>
    </div>
  );
}
