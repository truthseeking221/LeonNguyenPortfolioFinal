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
    <span className={`inline-flex flex-wrap gap-[0.25em] ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word-wrap inline-flex overflow-hidden pb-2 md:pb-4">
          <span className="manifesto-word inline-block will-change-transform opacity-0 origin-bottom">
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

const SplitLetters = ({ text, className = "", letterClass = "" }: { text: string, className?: string, letterClass?: string }) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className={`${letterClass} inline-block will-change-transform opacity-0`}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
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
        end: "+=350%", // Extended length for a deeply engaging multi-phase interaction
        scrub: 1,
        pin: true,
      }
    })

    // Setup initial states manually to avoid FOUC and Tailwind conflicts
    gsap.set('.manifesto-word', { y: '120%', rotation: 10 })
    gsap.set('.slash-line', { scaleX: 0, transformOrigin: "left center" })
    gsap.set('.slash-line-2', { scaleX: 0, transformOrigin: "right center" })
    
    gsap.set('.line-1-container', { opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0, rotation: 0 })
    gsap.set('.line-2-container', { opacity: 0, scale: 0.8 })

    gsap.set('.instead-text', { opacity: 0, y: 20 })
    gsap.set('.make-them-word', { opacity: 0, y: 40 })
    gsap.set('.clear-letter', { opacity: 0, scale: 0.2, rotationX: -60, y: 100 })
    gsap.set('.clear-aura', { opacity: 0, scale: 0.1 })

    // PHASE 1: Text Rising gracefully
    tl.to('.line-1-container .manifesto-word', { 
        y: '0%', 
        opacity: 1, 
        rotation: 0, 
        duration: 1.5, 
        stagger: 0.08, 
        ease: "power4.out" 
      })

    // Pause for the user to read 
    tl.to({}, { duration: 0.6 })

    // PHASE 2: The Strikethrough Strike (Violent & Sharp)
    tl.to('.slash-line', { scaleX: 1, duration: 0.4, ease: "power4.inOut" })
      .to('.slash-line-2', { scaleX: 1, duration: 0.3, ease: "power4.inOut" }, "<0.1")
      // Cinematic impact screen-shake
      .to('.line-1-container', { 
         x: 8, 
         y: -4, 
         rotation: 1, 
         duration: 0.05, 
         yoyo: true, 
         repeat: 5,
         ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })"
      }, "<0.1")
      // Reset after shake
      .set('.line-1-container', { x: 0, y: 0, rotation: 0 })
    
    // Suspense pause
    tl.to({}, { duration: 0.4 })

    // PHASE 3: Context Shift - Line 1 recedes into the void
    tl.to('.line-1-container', {
        y: -150,
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: "power3.inOut"
      })

    // PHASE 4: Line 2 emerges front and center
    tl.to('.line-2-container', {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.inOut"
      }, "<0.2")

    // "Instead," subtitle fades in
    tl.to('.instead-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1.0")

    // "It must be" glides in
    tl.to('.make-them-word', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.8")

    // The massive "CLEAR." explodes into view like a shockwave
    tl.to('.clear-letter', {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        duration: 1.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.4)"
    }, "-=0.6")

    // Accompanying ambient glow for "CLEAR."
    tl.to('.clear-aura', {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out"
    }, "<0.2")

    // Final soak-in time
    tl.to({}, { duration: 1.5 })

    // PHASE 6: Elegant Phase Out for the next section
    tl.to('.manifesto-main', {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })

  }, { scope: containerRef, dependencies: [] })

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-foreground overflow-hidden flex flex-col items-center justify-center -m-[1px]" style={{ zIndex: 20 }}>
      {/* Background layer */}
      <div className="absolute inset-0 bg-foreground pointer-events-none" />

      {/* Main Orchestration Container */}
      <div className="manifesto-main relative z-10 w-full h-full pointer-events-none">
        
        {/* Sequence 1: The "Anti" statement */}
        <div className="line-1-container absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6 md:px-12 text-center will-change-transform">
            <div className="relative inline-flex flex-col items-center">
                
                <h2 className="text-[clamp(1.5rem,4vw,4rem)] font-medium tracking-tight text-background/70 mb-2 md:mb-4">
                    <SplitWords text="Design shouldn't be" />
                </h2>
                
                <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-bold italic tracking-tighter text-background leading-none pb-2">
                    <SplitWords text="complicated." />
                </h2>

                {/* Aggressive Strikethrough lines (slightly lower to strike "complicated") */}
                <div className="slash-line absolute top-[65%] left-[-5%] w-[110%] h-[4px] md:h-[8px] bg-[#E54D2E] rounded-full pointer-events-none rotate-[-2deg] shadow-[0_0_30px_rgba(229,77,46,0.5)]" />
                <div className="slash-line-2 absolute top-[75%] left-[-2%] w-[104%] h-[2px] md:h-[4px] bg-[#E54D2E] rounded-full pointer-events-none rotate-[1.5deg]" />
            </div>
        </div>

        {/* Sequence 2: The "Pro" statement */}
        <div className="line-2-container absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6 md:px-12 text-center will-change-transform">
            
            <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto" style={{ perspective: "1000px" }}>
                
                <span className="instead-text font-mono text-[10px] md:text-[14px] tracking-[0.4em] uppercase text-background/50 mb-6 md:mb-10">
                    Instead,
                </span>
                
                <h2 className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-2 text-[clamp(2.5rem,6vw,6rem)] font-medium tracking-tight text-background/90 leading-none mb-4 md:mb-8">
                    { "It must be absolutely".split(" ").map((word, i) => (
                        <span key={i} className="make-them-word inline-block will-change-transform opacity-0">
                            {word}
                        </span>
                    ))}
                </h2>
                
                {/* The massive word CLEAR. */}
                <div className="relative flex items-center justify-center w-full">
                    {/* Intense glowing aura to make it pop like a light source */}
                    <div className="clear-aura absolute inset-0 bg-background/30 blur-[60px] md:blur-[120px] rounded-[100%] scale-50 -z-10" />
                    
                    {/* Removed bg-clip text-transparent bug */}
                    <h2 className="relative z-10 text-[clamp(5rem,20vw,24rem)] font-black tracking-[-0.04em] md:tracking-[-0.08em] leading-none text-background pb-8 md:pb-12 drop-shadow-2xl">
                        <SplitLetters text="CLEAR." letterClass="clear-letter" />
                    </h2>
                </div>

            </div>
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
