"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

import { WebglHeroBg } from "./webgl-hero-bg";
import { RotatingHeadline } from "./rotating-headline";
import { MagneticButton } from "./magnetic-button";
import { GradientButton } from "./gradient-button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Fade in text elegantly
    tl.from(".gk-element", {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      delay: 0.1,
    });
    
    tl.fromTo(
      ".gk-line",
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 2, ease: "expo.inOut" },
      0.5
    );

    // subtle floating effect on the whole container
    gsap.to(".gk-floating", {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative flex min-h-[100vh] w-full items-center px-6 md:px-[200px] max-w-[2500px] mx-auto overflow-hidden">
      {/* 1. Underlying WebGL Liquid/Abstract Geometry */}
      <div className="absolute inset-0 z-0 opacity-80 md:opacity-100">
        <WebglHeroBg />
      </div>

      {/* 2. Sleek, minimal background grid fade (Gleb style uses enormous empty space) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* 3. Ultra-Minimal, Abstract UI Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left pt-32 pb-16">
        
        {/* Caption */}
        <div className="gk-element mb-6 flex flex-col md:flex-row items-center gap-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-foreground/50">
            Leon &mdash; Product Design &amp; Direction
          </p>
          <div className="gk-line h-px w-16 bg-foreground/20 hidden md:block" />
        </div>

        {/* Huge, crisp typography */}
        <div className="gk-element w-full max-w-[15ch] md:max-w-none">
          <h1
            className="font-light tracking-tighter text-foreground"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9.5rem)", lineHeight: 0.95 }}
          >
            <div className="overflow-hidden inline-block pb-[0.15em]"><RotatingHeadline /></div>
          </h1>
        </div>

        {/* Sophisticated Description */}
        <p className="gk-element mt-10 max-w-[42ch] text-[1.1rem] leading-[1.65] text-foreground/50 md:text-[1.35rem] font-light">
          Sculpting clarity from complexity. <br className="hidden md:block"/>
          I design premium systems, ethereal interfaces, and interactions that feel inevitable.
        </p>

        {/* Premium CTA / Coordinates */}
        <div className="gk-element mt-16 flex flex-col md:flex-row items-center gap-10">
          <MagneticButton>
            <GradientButton href="#work">
              <span className="inline-flex items-center gap-2">
                Explore The Work
                <ArrowDown className="size-3" />
              </span>
            </GradientButton>
          </MagneticButton>
          
          <div className="hidden lg:flex items-center gap-4">
            <span className="h-[2px] w-2 bg-foreground/20 rounded-full" />
            <div className="flex flex-col">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-foreground/30">Locus</span>
              <span className="font-mono text-[10px] tracking-widest text-foreground/70">
                10.7626° N, 106.6601° E
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Super minimal scroll indicator at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 gk-floating opacity-50">
        <div className="h-12 w-px bg-gradient-to-b from-foreground/5 to-foreground/40 origin-top animate-breathe" />
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-foreground/40">Scroll</span>
      </div>
    </section>
  );
}
