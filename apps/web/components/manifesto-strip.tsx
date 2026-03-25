"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const SplitWords = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className={`overflow-hidden inline-flex relative pb-2 md:pb-4 mr-[0.25em] ${className}`}>
          {/* Strictly no Tailwind transforms here. GSAP guarantees alignment and FOUC prevention via opacity-0 */}
          <span className="manifesto-word inline-block will-change-transform opacity-0 origin-bottom">
            {word}
          </span>
        </span>
      ))}
    </>
  )
}

export function ManifestoStrip() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%", // Ideal length for an intensive scroll interaction
        scrub: 1,
        pin: true,
      }
    })

    // 1. Initial Reset Setup (100% GSAP managed to avoid Tailwind collision)
    gsap.set('.manifesto-word', { y: '120%', rotation: 6 })
    gsap.set('.manifesto-highlight', { scaleX: 0, transformOrigin: "left center" })
    gsap.set('.manifesto-pill', { scale: 0, rotation: -20, opacity: 0 })
    gsap.set('.bg-glow', { xPercent: -50, yPercent: -50, scale: 0.3, opacity: 0, filter: "blur(60px)" })
    gsap.set('.line-2-container', { opacity: 0, scale: 0.8, filter: "blur(20px)" })
    gsap.set('.line-1-container', { opacity: 1, scale: 1, filter: "blur(0px)" })

    // PHASE 1: Text 1 Rising
    tl.to('.line-1-container .manifesto-word', { 
        y: '0%', 
        opacity: 1, 
        rotation: 0, 
        duration: 1.2, 
        stagger: 0.05, 
        ease: "power4.out" 
      })

    // Pause for reading
    tl.to({}, { duration: 0.4 })

    // PHASE 2: The Strikethrough Strike (Fast & Sharp)
    tl.to('.manifesto-highlight', { scaleX: 1, duration: 0.6, ease: "power4.inOut" })
    
    // Tiny suspense gap
    tl.to({}, { duration: 0.2 })

    // PHASE 3: Context Shift - Line 1 recedes into depths, Line 2 emerges
    tl.to('.line-1-container', { 
        y: -100, 
        opacity: 0, 
        filter: "blur(20px)", 
        scale: 0.9, 
        duration: 1.5, 
        ease: "power3.inOut" 
      })
      .to('.line-2-container', {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.inOut"
      }, "<0.2")

    // PHASE 4: "Become" Pill hits the screen like a shockwave
    tl.to('.manifesto-pill', {
      scale: 1,
      rotation: -2,  // Slight rotation for natural feel
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "elastic.out(1, 0.4)"
    }, "-=0.6")

    // PHASE 5: Accompanying words of Line 2 rise
    tl.to('.line-2-container .manifesto-word', {
      y: '0%',
      opacity: 1,
      rotation: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.out"
    }, "-=1.0")

    // Pause for impact & absorption
    tl.to({}, { duration: 1 })

    // PHASE 6: Elegant Phase Out
    tl.to('.manifesto-main', {
      y: -50,
      opacity: 0,
      filter: "blur(15px)",
      duration: 1.5,
      ease: "power2.inOut"
    })

  }, { scope: containerRef, dependencies: [] })

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-foreground overflow-hidden flex flex-col items-center justify-center -m-[1px]" style={{ zIndex: 20 }}>
      {/* Main Orchestration Container (Flex alignment ensures flawless centering globally) */}
      <div className="manifesto-main relative z-10 w-full h-full pointer-events-none">
        
        {/* Sequence 1 */}
        <div className="line-1-container absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12 text-center will-change-transform">
            <h2 className="relative inline-block text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.0] tracking-tighter text-background max-w-[1200px]">
                <SplitWords text="I do not make things look clear." />
                {/* 
                  Strikethrough spans the entire text block 
                */}
                <div className="manifesto-highlight absolute top-[52%] left-0 w-[105%] -ml-[2.5%] h-[6px] md:h-[10px] bg-background mix-blend-difference -translate-y-1/2 rounded-full pointer-events-none" />
            </h2>
        </div>

        {/* Sequence 2 */}
        <div className="line-2-container absolute inset-0 w-full h-full flex items-center justify-center px-6 md:px-12 text-center will-change-transform">
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[1.0] tracking-tighter text-background flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 max-w-[1200px] mx-auto">
                <SplitWords text="I make them" />
                {/* 
                  Pill object has no margin classes, handled symmetrically using gap and inline-flex 
                  Any rotation is cleanly overwritten by GSAP 
                */}
                <span className="manifesto-pill text-foreground bg-background px-6 py-2 md:px-10 md:py-4 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(255,255,255,0.1)] border border-background/20 inline-flex items-center justify-center will-change-transform">
                    become
                </span>
                <SplitWords text="clear." />
            </h2>
        </div>
      </div>

      {/* Technical UI Overlay details */}
      <div className="absolute bottom-12 flex items-center justify-between w-full px-8 md:px-24 opacity-30 text-background font-mono text-[10px] md:text-[12px] uppercase tracking-[0.3em] pointer-events-none">
          <span className="hidden md:inline-block">Perspectival Shift [01]</span>
          <span className="flex items-center gap-4">
             <span className="w-12 h-px bg-background/50"></span>
             Scroll to Engage
          </span>
      </div>
    </section>
  )
}
