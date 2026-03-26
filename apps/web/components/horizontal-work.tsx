"use client"

import { useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
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
        <div className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 overflow-hidden rounded-xl group md:mr-24 md:w-[50vw]">
          <Link href="/projects/nodo-ai" className="relative inset-0 block h-full overflow-hidden bg-foreground transition-transform duration-700 ease-out">
            <Image
              src={nodoAiCover}
              alt="NODO AI — vault management interface"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 85vw"
              quality={90}
              priority
            />
            <div className="absolute top-5 left-5 z-10 h-7 w-7 border-t border-l border-white/20" />
            <div className="absolute top-5 right-5 z-10 h-7 w-7 border-t border-r border-white/20" />
            <div className="absolute bottom-5 left-5 z-10 h-7 w-7 border-b border-l border-white/20" />
            <div className="absolute bottom-5 right-5 z-10 h-7 w-7 border-b border-r border-white/20" />

            <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/35 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase mb-3 block">
                    NODO
                  </span>
                  <h3 className="text-4xl font-medium text-white mb-2">NODO</h3>
                  <p className="text-white/70 max-w-md">Vault management for non-crypto users. Clarity as the core product decision.</p>
                </div>
                <div className="hidden md:flex flex-col items-end text-right">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-white/45 uppercase mb-1">Role & Outcome</span>
                  <p className="text-white/70 max-w-xs text-sm">Lead Product Designer. Redesigned autonomous vault UX. Research to shipped MVP on Sui.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* --- Card 2: TymeBank Crypto --- */}
        <div className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 overflow-hidden rounded-xl border border-dashed border-border/30 bg-foreground/[0.04] md:mr-24 md:w-[50vw]">
          <Link href="/projects/tymebank-crypto" className="absolute right-0 bottom-0 h-full w-full block p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-black/10 group">
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-mono text-[9px] tracking-[0.18em] text-white/45 uppercase">
                TymeBank
              </span>
              <span className="font-mono text-[9px] text-white/45">2024</span>
            </div>
            <div className="pointer-events-none absolute inset-0 z-0">
              <Image
                src={tymeBankCryptoCover}
                alt="TymeBank Crypto — crypto onboarding interface"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 85vw"
                quality={90}
              />
              <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/90 via-black/22 to-transparent" />
            </div>
            <div className="relative z-10 mt-auto border-l-2 border-white/15 pl-4 transition-colors group-hover:border-white/35">
              <h3 className="text-3xl font-bold tracking-tight text-white mb-2">TymeBank Crypto</h3>
              <p className="text-sm text-white/70 mb-4 max-w-sm">
                Crypto onboarding for a 5-million-customer bank.
              </p>
              <div className="font-mono text-[9px] text-white/45 uppercase tracking-wider">Fintech · 0 to 1</div>
            </div>
          </Link>
        </div>

        {/* --- Compact Cards (individual, side by side like others) --- */}
        {compactProjects.map((project) => (
          <div
            key={project.name}
            className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 overflow-hidden rounded-xl border border-dashed border-border/30 bg-foreground/[0.04] md:mr-24 md:w-[50vw]"
          >
            <Link
              href={project.href}
              className={`absolute inset-0 flex flex-col justify-between p-8 md:p-12 transition-all duration-500 group ${
                project.coverImage ? "hover:bg-black/10" : "hover:bg-foreground/[0.06]"
              }`}
            >
              {project.coverImage ? (
                <>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-white/45 uppercase">
                      {project.name}
                    </span>
                    <span className="font-mono text-[9px] text-white/45">{project.year}</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-0">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ${project.desc}`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 50vw, 85vw"
                      quality={90}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/90 via-black/22 to-transparent" />
                  </div>
                  <div className="relative z-10 mt-auto border-l-2 border-white/15 pl-4 transition-colors group-hover:border-white/35">
                    <h3 className="mb-2 text-3xl font-medium tracking-tight text-white">{project.name}</h3>
                    <p className="mb-4 max-w-sm text-sm text-white/70">{project.desc}</p>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-white/45">{project.category}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/[0.3] dark:text-foreground/50 dark:text-foreground/70 uppercase">
                      {project.name}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground/30 dark:text-muted-foreground/50">{project.year}</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-auto border-l-2 border-foreground/10 pl-4 transition-colors group-hover:border-foreground/30">
                    <h3 className="mb-2 text-3xl font-medium tracking-tight">{project.name}</h3>
                    <p className="mb-4 max-w-sm text-sm text-foreground/50 dark:text-foreground/70">{project.desc}</p>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/40 dark:text-muted-foreground/60">{project.category}</div>
                  </div>
                </>
              )}
            </Link>
          </div>
        ))}

        {/* --- Card: Diag (last) --- */}
        <div className="horizontal-item relative mr-12 aspect-[4/3] w-[85vw] flex-shrink-0 rounded-xl border border-dashed border-border/30 bg-foreground/[0.04] md:mr-24 md:w-[50vw]">
          <Link href="#" className="absolute inset-0 block p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-foreground/[0.06] group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] tracking-[0.18em] text-foreground/[0.3] dark:text-foreground/50 dark:text-foreground/70 uppercase">
                Diag
              </span>
              <span className="font-mono text-[9px] text-muted-foreground/30 dark:text-muted-foreground/50">2024</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-5 w-5">
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
              </div>
            </div>
            <div className="z-10 relative mt-auto border-l-2 border-foreground/10 pl-4 group-hover:border-foreground/30 transition-colors">
              <h3 className="text-3xl font-medium tracking-tight mb-2">Diag</h3>
              <p className="text-sm text-foreground/50 dark:text-foreground/70 mb-4 max-w-sm">
                Medical data made legible. A diagnostic experience people trust.
              </p>
              <div className="font-mono text-[9px] text-muted-foreground/40 dark:text-muted-foreground/60 uppercase tracking-wider">Health Tech · Product Strategy</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
