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
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere ref={orb} args={[1.5, 256, 256]}>
          <MeshDistortMaterial
            color="#f8fafc"
            metalness={1}
            roughness={0.15}
            distort={0.35}
            speed={1.5}
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export function WebglHeroBg() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-90 isolate">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true, alpha: true }}>
        {/* Soft fill light */}
        <ambientLight intensity={1.5} />
        
        {/* 
          Vibrant dramatic lighting to reflect off the chrome surface.
          This will create the "Gleb" holographic/iridescent aesthetic. 
        */}
        <directionalLight position={[10, 10, 5]} intensity={4} color="#06b6d4" /> {/* Cyan/Teal */}
        <directionalLight position={[-10, -10, -5]} intensity={3} color="#a855f7" /> {/* Purple */}
        <directionalLight position={[0, 10, 10]} intensity={3} color="#ffffff" /> {/* Bright White Top */}
        <pointLight position={[5, -5, 5]} intensity={2} color="#ec4899" /> {/* Pink pop */}
        
        <LiquidChromeOrb />
        
        {/* The environment map provides the sharp, realistic studio reflections on the chrome */}
        <Environment preset="studio" />
        
        <ContactShadows 
          resolution={1024} 
          scale={20} 
          blur={2.5} 
          opacity={0.3} 
          far={10} 
          color="#000000" 
          position={[0, -4, 0]} 
        />
      </Canvas>
    </div>
  );
}
