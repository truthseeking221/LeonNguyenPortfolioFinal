"use client"

import { useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CompactProject {
  name: string
  href: string
  year: string
  category: string
  desc: string
}

export function HorizontalWork({ 
  compactProjects 
}: { 
  compactProjects: readonly CompactProject[] 
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !wrapperRef.current) return

    const sections = gsap.utils.toArray(".horizontal-item")
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1, 
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: "power1.inOut"
        },
        end: () => "+=" + wrapperRef.current?.offsetWidth,
      }
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      id="work" 
      className="relative flex items-center h-screen bg-background overflow-hidden"
    >
      <div 
        ref={wrapperRef} 
        className="flex h-full items-center pl-12 md:pl-[200px]"
      >
        {/* Intro Slide */}
        <div className="horizontal-item flex-shrink-0 w-[80vw] md:w-[40vw] h-full flex flex-col justify-center pr-12 md:pr-24">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase mb-6">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Selected<br/>Projects.
          </h2>
          <span className="h-px w-32 bg-foreground/10 mb-8" />
          <p className="text-muted-foreground/60 max-w-sm mb-12">
            A curated selection of my recent design and engineering endeavors. Swipe or scroll to explore.
          </p>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-foreground/20" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40">Scroll to Explore</span>
          </div>
        </div>

        {/* --- Card 1: NODO --- */}
        <div className="horizontal-item flex-shrink-0 w-[90vw] md:w-[65vw] h-[70vh] mr-12 md:mr-24 relative rounded-xl overflow-hidden group">
          <Link href="/projects/nodo-ai" className="relative inset-0 block bg-foreground h-full overflow-hidden transition-transform duration-700 ease-out">
            <div className="absolute top-5 left-5 h-7 w-7 border-t border-l border-background/15" />
            <div className="absolute top-5 right-5 h-7 w-7 border-t border-r border-background/15" />
            <div className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-background/15" />
            <div className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-background/15" />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-6 w-6">
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-background/10" />
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-background/10" />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-background/30 uppercase mb-3 block">
                    NODO
                  </span>
                  <h3 className="text-4xl font-bold text-background mb-2">NODO</h3>
                  <p className="text-background/60 max-w-md">Vault management for non-crypto users. Clarity as the core product decision.</p>
                </div>
                <div className="hidden md:flex flex-col items-end text-right">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-background/30 uppercase mb-1">Role & Outcome</span>
                  <p className="text-background/60 max-w-xs text-sm">Lead Product Designer. Redesigned autonomous vault UX. Research to shipped MVP on Sui.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* --- Card 2: Diag --- */}
        <div className="horizontal-item flex-shrink-0 w-[85vw] md:w-[50vw] h-[65vh] mr-12 md:mr-24 relative rounded-xl border border-dashed border-border/30 bg-foreground/[0.04]">
          <Link href="#" className="absolute inset-0 block p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-foreground/[0.06] group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/[0.3] uppercase">
                Diag
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/30">2024</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-5 w-5">
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
              </div>
            </div>
            <div className="z-10 relative mt-auto border-l-2 border-foreground/10 pl-4 group-hover:border-foreground/30 transition-colors">
              <h3 className="text-3xl font-bold tracking-tight mb-2">Diag</h3>
              <p className="text-sm text-foreground/50 mb-4 max-w-sm">
                Medical data made legible. A diagnostic experience people trust.
              </p>
              <div className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-wider">Health Tech · Product Strategy</div>
            </div>
          </Link>
        </div>

        {/* --- Card 3: TymeBank Crypto --- */}
        <div className="horizontal-item flex-shrink-0 w-[85vw] md:w-[50vw] h-[65vh] mr-12 md:mr-24 relative rounded-xl border border-dashed border-border/30 bg-foreground/[0.04]">
          <Link href="/projects/tymebank-crypto" className="absolute inset-0 block p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-foreground/[0.06] group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/[0.3] uppercase">
                TymeBank
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/30">2024</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-5 w-5">
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
              </div>
            </div>
            <div className="z-10 relative mt-auto border-l-2 border-foreground/10 pl-4 group-hover:border-foreground/30 transition-colors">
              <h3 className="text-3xl font-bold tracking-tight mb-2">TymeBank Crypto</h3>
              <p className="text-sm text-foreground/50 mb-4 max-w-sm">
                Crypto onboarding for a 5-million-customer bank.
              </p>
              <div className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-wider">Fintech · 0 to 1</div>
            </div>
          </Link>
        </div>

        {/* --- Compact Cards Column (All 3 in one stack) --- */}
        <div className="horizontal-item flex-shrink-0 w-[85vw] md:w-[45vw] h-[65vh] flex flex-col justify-between gap-6 mr-12">
          {compactProjects.map((project, i) => (
            <Link
              key={project.name}
              href={project.href}
              className="group block relative flex-1 border border-dashed border-border/25 bg-foreground/[0.03] rounded-lg p-6 md:p-8 hover:bg-foreground/[0.05] transition-all duration-500 overflow-hidden flex flex-col justify-center"
            >
               <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                  <div className="relative h-4 w-4">
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground" />
                    <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground" />
                  </div>
                </div>
                
                <div className="flex flex-col relative z-10 pr-12">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold tracking-tight">{project.name}</h4>
                    <span className="font-mono text-[9px] text-muted-foreground/30">{project.year}</span>
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mb-3">{project.category}</p>
                  <p className="text-sm text-muted-foreground/60 max-w-[80%] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.desc}
                  </p>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
