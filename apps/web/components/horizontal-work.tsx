"use client"

import { useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import nodoAiCover from "@/app/images/NODO AI.png"
import tymeBankCryptoCover from "@/app/images/TymeBank Crypto.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export interface CompactProject {
  name: string
  href: string
  year: string
  category: string
  desc: string
  /** When set, replaces the crosshair placeholder with a full-bleed cover image. */
  coverImage?: StaticImageData
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

    const totalScroll = wrapperRef.current.scrollWidth - window.innerWidth

    gsap.to(wrapperRef.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalScroll,
      }
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      id="work" 
      className="relative flex h-screen items-center overflow-hidden bg-background pt-16 md:pt-20"
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
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Selected<br/>Projects.
          </h2>
          <span className="h-px w-32 bg-foreground/10 mb-8" />
          <p className="text-muted-foreground/60 max-w-sm mb-12">
            A curated selection of my recent design and engineering endeavors. Swipe or scroll to explore.
          </p>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-foreground/20" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 dark:text-muted-foreground/60">Scroll to Explore</span>
          </div>
        </div>

        {/* --- Card 1: NODO --- */}
        <div className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 md:mr-24 md:w-[50vw]">
          <Link href="/projects/nodo-ai" className="group relative inset-0 block h-full overflow-hidden rounded-[24px] bg-foreground/5">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={nodoAiCover}
                alt="NODO AI — vault management interface"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                sizes="(min-width: 768px) 50vw, 85vw"
                quality={90}
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-[1s] group-hover:opacity-95" />
            </div>

            {/* Corner Focus Brackets */}
            <div className="absolute top-6 left-6 z-10 h-4 w-4 border-t border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
            <div className="absolute top-6 right-6 z-10 h-4 w-4 border-t border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
            <div className="absolute bottom-6 left-6 z-10 h-4 w-4 border-b border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />
            <div className="absolute bottom-6 right-6 z-10 h-4 w-4 border-b border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />

            {/* "Explore" Button sliding in */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3 overflow-hidden pr-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                View Project
              </span>
              <div className="flex h-8 w-8 -translate-y-[150%] translate-x-[150%] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="h-3 w-3 text-white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-12 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase mb-4 block">
                    NODO
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-3">NODO AI</h3>
                  <p className="text-white/70 max-w-sm font-light text-[15px] leading-relaxed">Vault management for non-crypto users. Clarity as the core product decision.</p>
                </div>
                <div className="hidden md:flex flex-col items-end text-right">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-white/50 uppercase mb-2">Role & Outcome</span>
                  <p className="text-white/70 max-w-[28ch] text-[13px] font-light leading-relaxed">Lead Product Designer. Redesigned autonomous vault UX. Research to shipped MVP on Sui.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* --- Card 2: TymeBank Crypto --- */}
        <div className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 md:mr-24 md:w-[50vw]">
          <Link href="/projects/tymebank-crypto" className="group relative inset-0 block h-full overflow-hidden rounded-[24px] bg-foreground/5 border border-border/10">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={tymeBankCryptoCover}
                alt="TymeBank Crypto — crypto onboarding interface"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                sizes="(min-width: 768px) 50vw, 85vw"
                quality={90}
              />
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity duration-[1s] group-hover:opacity-95" />
            </div>

            {/* Corner Focus Brackets */}
            <div className="absolute top-6 left-6 z-10 h-4 w-4 border-t border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
            <div className="absolute top-6 right-6 z-10 h-4 w-4 border-t border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
            <div className="absolute bottom-6 left-6 z-10 h-4 w-4 border-b border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />
            <div className="absolute bottom-6 right-6 z-10 h-4 w-4 border-b border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />

            {/* "Explore" Button sliding in */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3 overflow-hidden pr-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                View Project
              </span>
              <div className="flex h-8 w-8 -translate-y-[150%] translate-x-[150%] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                <ArrowUpRight className="h-3 w-3 text-white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-between transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
              <div className="relative z-10 flex flex-col border-l-2 border-white/15 pl-5 transition-colors group-hover:border-white/50">
                <span className="font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase mb-4">
                  2024
                </span>
                <h3 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-3">TymeBank Crypto</h3>
                <p className="text-[15px] font-light leading-relaxed text-white/70 mb-4 max-w-sm">
                  Crypto onboarding for a 5-million-customer bank.
                </p>
                <div className="font-mono text-[10px] text-white/50 uppercase tracking-[0.2em]">Fintech · 0 to 1</div>
              </div>
            </div>
          </Link>
        </div>

        {/* --- Compact Cards (individual, side by side like others) --- */}
        {compactProjects.map((project) => (
          <div
            key={project.name}
            className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 md:mr-24 md:w-[50vw]"
          >
            <Link
              href={project.href}
              className="group relative inset-0 block h-full overflow-hidden rounded-[24px] bg-foreground/5 border border-border/10"
            >
              {project.coverImage ? (
                <>
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ${project.desc}`}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.07]"
                      sizes="(min-width: 768px) 50vw, 85vw"
                      quality={90}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-[1s] group-hover:opacity-95" />
                  </div>
                  
                  {/* Corner Focus Brackets */}
                  <div className="absolute top-6 left-6 z-10 h-4 w-4 border-t border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
                  <div className="absolute top-6 right-6 z-10 h-4 w-4 border-t border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-white/90" />
                  <div className="absolute bottom-6 left-6 z-10 h-4 w-4 border-b border-l border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />
                  <div className="absolute bottom-6 right-6 z-10 h-4 w-4 border-b border-r border-white/30 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-white/90" />

                  {/* "Explore" Button sliding in */}
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-3 overflow-hidden pr-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View Project
                    </span>
                    <div className="flex h-8 w-8 -translate-y-[150%] translate-x-[150%] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowUpRight className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
                    <div className="relative z-10 flex flex-col border-l-2 border-white/15 pl-5 transition-colors group-hover:border-white/50">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase mb-4">
                        {project.year}
                      </span>
                      <h3 className="mb-3 text-4xl lg:text-5xl font-light tracking-tight text-white">{project.name}</h3>
                      <p className="mb-4 max-w-sm text-[15px] font-light leading-relaxed text-white/70">{project.desc}</p>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{project.category}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 transition-all duration-700 group-hover:bg-foreground/[0.03]">
                    <div className="flex justify-between items-start z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-2">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/[0.4] uppercase">
                        {project.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/40">{project.year}</span>
                    </div>
                    
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="relative h-6 w-6 opacity-30 transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[2.5] group-hover:rotate-180 group-hover:opacity-10">
                        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground" />
                        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground" />
                      </div>
                    </div>
                    
                    <div className="relative z-10 mt-auto border-l-2 border-border/40 pl-5 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:border-foreground/50 group-hover:-translate-y-2">
                      <h3 className="mb-4 text-4xl lg:text-5xl font-light tracking-tight">{project.name}</h3>
                      <p className="mb-5 max-w-sm text-[15px] font-light leading-relaxed text-foreground/60">{project.desc}</p>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">{project.category}</div>
                    </div>
                  </div>
                  
                  {/* Hover brackets for textonly cards */}
                  <div className="absolute top-6 left-6 z-10 h-4 w-4 border-t border-l border-foreground/20 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-foreground/80" />
                  <div className="absolute top-6 right-6 z-10 h-4 w-4 border-t border-r border-foreground/20 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:border-foreground/80" />
                  <div className="absolute bottom-6 left-6 z-10 h-4 w-4 border-b border-l border-foreground/20 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:border-foreground/80" />
                  <div className="absolute bottom-6 right-6 z-10 h-4 w-4 border-b border-r border-foreground/20 transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-foreground/80" />
                </>
              )}
            </Link>
          </div>
        ))}

      </div>
    </section>
  )
}
