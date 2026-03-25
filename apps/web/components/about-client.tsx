"use client"

import { useRef } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { GsapTitle } from "./gsap-title"
import { MagneticButton } from "./magnetic-button"

gsap.registerPlugin(ScrollTrigger)

interface AboutClientProps {
  dashboardFirstImage: StaticImageData
  chapters: ReadonlyArray<any>
  tools: ReadonlyArray<any>
  reading: ReadonlyArray<any>
}

export function AboutClient({ dashboardFirstImage, chapters, tools, reading }: AboutClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const chaptersRef = useRef<HTMLDivElement>(null)
  const beliefsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // 1. Portrait Parallax & Scale
    if (portraitRef.current) {
      gsap.to(portraitRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: portraitRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      })
    }

    // 2. Chapters Pinned Section
    if (chaptersRef.current) {
      const leftCol = chaptersRef.current.querySelector(".chapters-left")
      ScrollTrigger.create({
        trigger: chaptersRef.current,
        start: "top 20%",
        end: "bottom bottom",
        pin: leftCol,
        pinSpacing: false,
      })
      
      const chapterItems = gsap.utils.toArray(".chapter-item") as HTMLElement[]
      chapterItems.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, x: 50 }, 
          { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            }
          }
        )
      })
    }

    // 3. Pinned Beliefs crossfade
    if (beliefsRef.current) {
      const beliefItems = gsap.utils.toArray(".belief-item") as HTMLElement[]
      
      if (beliefItems.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: beliefsRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
          }
        })

        beliefItems.forEach((item, i) => {
          if (i > 0) {
            tl.to(beliefItems[i - 1]!, { opacity: 0, y: -50, scale: 0.95, duration: 1 })
              .fromTo(item, { opacity: 0, y: 50, scale: 1.05 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, "<")
          } else {
            // Ensure first item is visible
            gsap.set(item, { opacity: 1, y: 0, scale: 1 })
          }
        })
        // fade out last
        tl.to(beliefItems[beliefItems.length - 1]!, { opacity: 0, y: -50, scale: 0.95, duration: 1 })
      }
    }

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="w-full relative">
      
      {/* ── Blueprint grid overlay ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-[8%] w-px bg-foreground/[0.03]" />
        <div className="absolute inset-y-0 left-[42%] w-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-foreground/[0.025] hidden md:block" />
      </div>

      {/* ══════════════════════════════════════════════════
          ACT 1 — THE OPENING
          ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 md:px-[15%] z-10 w-full overflow-hidden">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-8 bg-foreground/[0.2]" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase">
            Somewhere between stillness &amp; making
          </span>
        </div>

        <GsapTitle 
          text={"Before there is a screen, there is stillness."}
          className="max-w-[18ch] text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] font-light tracking-tighter"
        />

        <p className="mt-8 max-w-[36ch] text-base leading-relaxed text-muted-foreground/60">
          I design products for a living. But what I&apos;m really
          searching for is what clarity means. Where it comes from.
          And why most things are built without it.
        </p>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-6 md:left-[15%]">
          <div className="flex items-center gap-3">
            <div className="h-8 w-px origin-top bg-foreground/20 animate-breathe" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 2 — THE PERSON
          ══════════════════════════════════════════════════ */}
      <section className="relative z-10 border-t border-border/10 px-6 py-20 md:px-[15%] md:py-40">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] lg:gap-24">

          {/* Portrait */}
          <div className="relative overflow-hidden rounded-2xl border border-border/15 bg-foreground/[0.03]">
            <div ref={portraitRef} className="aspect-[4/5] relative w-full h-full scale-[1.1]">
              <div className="absolute top-4 left-4 h-5 w-5 border-t border-l border-foreground/[0.3] z-10" />
              <div className="absolute top-4 right-4 h-5 w-5 border-t border-r border-foreground/[0.3] z-10" />
              <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-foreground/[0.3] z-10" />
              <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-foreground/[0.3] z-10" />
              <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay z-10 pointer-events-none" />
              <Image
                src={dashboardFirstImage}
                alt="Dashboard-first direction"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <p className="mb-8 font-mono text-[9px] tracking-[0.25em] text-muted-foreground/40 uppercase relative overflow-hidden">
               Beyond the work
               <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20" />
            </p>

            <div className="space-y-6 text-[15px] leading-[1.8] text-foreground/75 md:text-md font-light">
              <p>
                I&apos;m a product designer based in Vietnam. I think in
                systems. I ship in clarity. My work lives in the 0-to-1 space,
                where nothing exists yet and everything needs a point of view.
              </p>
              <p>
                I study Buddhist philosophy. Not as a retreat from the work,
                but as a way to see it more honestly. Impermanence teaches me
                not to grip solutions too tightly. Emptiness reminds me that
                what I remove matters more than what I add. The middle way
                keeps me from confusing ambition with purpose.
              </p>
              <p>
                When I&apos;m not designing, I&apos;m driving. Long roads,
                open windows, the kind of silence that makes hard problems feel
                smaller and real questions feel closer. Something about
                distance resets how I see.
              </p>
              <p>
                AI is part of how I work now. Not as a shortcut. As a mirror.
                It moves faster than I can think, which forces a better
                question: what is the part of this craft that only a human can
                hold? I&apos;m still looking for the answer. I think
                that&apos;s the point.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <div className="h-px flex-1 bg-foreground/[0.1]" />
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/40 uppercase">
                Ask &middot; Reduce &middot; Shape &middot; Ship
              </span>
              <div className="h-px flex-1 bg-foreground/[0.1]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3 — CHAPTERS (Pinned Left, Scrolled Right)
          ══════════════════════════════════════════════════ */}
      <section ref={chaptersRef} className="relative z-10 border-t border-border/10 px-6 py-20 md:px-[15%] md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 relative">
          
          <div className="chapters-left h-fit flex flex-col justify-start">
            <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              Chapters, not résumé
            </p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] font-light tracking-tight text-foreground/90">
              Every year teaches one thing clearly.
              <br/>
              <span className="text-muted-foreground/30 italic">The rest is noise.</span>
            </h2>
          </div>

          <div className="chapters-right flex flex-col pt-12 md:pt-32 pb-32">
            {chapters.map((ch, i) => (
              <div key={ch.year} className="chapter-item group relative border-b border-border/10 py-16 last:border-0 pl-12 border-l border-l-transparent hover:border-l-foreground/20 transition-all duration-500">
                {/* Year tag absolute to left */}
                <div className="absolute left-[-2rem] md:left-[-4rem] top-16 -rotate-90 origin-left text-foreground/5 opacity-40 font-mono text-[clamp(4rem,8vw,6rem)] font-bold tracking-tighter leading-none mix-blend-difference group-hover:opacity-100 group-hover:text-foreground/20 transition-all duration-700">
                  {ch.year}
                </div>
                
                <div className="relative z-10 pl-6 md:pl-12">
                  <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-tight text-foreground/90 mb-4">
                    &ldquo;{ch.conviction}&rdquo;
                  </h3>
                  <p className="max-w-[45ch] text-base leading-relaxed text-muted-foreground/60">
                    {ch.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 4 — THE STUDIO & TOOLS
          ══════════════════════════════════════════════════ */}
      <section className="relative z-10 border-t border-border/10 px-6 py-20 md:px-[15%] md:py-40 bg-foreground/[0.02]">
        <p className="mb-16 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase text-center block w-full">
          The studio, right now
        </p>
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          <div className="space-y-12">
            <div>
              <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-foreground/40 uppercase flex items-center gap-2"><span className="w-2 h-2 rounded-full border border-foreground/30 inline-block"/> Working on</p>
              <p className="text-[16px] font-light leading-relaxed text-foreground/80 pl-4 border-l border-foreground/10">
                Crypto onboarding at TymeBank. Making blockchain invisible to
                five&nbsp;million people who should never have to think about
                gas fees.
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-foreground/40 uppercase flex items-center gap-2"><span className="w-2 h-2 rounded-full border border-foreground/30 inline-block"/> Thinking about</p>
              <p className="text-[16px] font-light leading-relaxed text-foreground/80 pl-4 border-l border-foreground/10">
                What Buddhist philosophy and product design share: both are
                practices of seeing things as they are, not as you wish they
                were.
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-foreground/40 uppercase flex items-center gap-2"><span className="w-2 h-2 rounded-full border border-foreground/30 inline-block"/> Obsessed with</p>
              <p className="text-[16px] font-light leading-relaxed text-foreground/80 pl-4 border-l border-foreground/10">
                The moment a complex product suddenly feels inevitable. That
                breath of recognition. I reverse-engineer it.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-16">
              <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                Tools
              </p>
              <div className="space-y-5">
                {tools.map((tool) => (
                  <div key={tool.name} className="group flex items-baseline justify-between border-b border-border/10 pb-4">
                    <span className="text-[15px] tracking-tight text-foreground/90 transition-colors group-hover:text-foreground">
                      {tool.name}
                    </span>
                    <span className="text-[13px] text-muted-foreground/40 transition-colors group-hover:text-muted-foreground/60 italic font-light">
                      {tool.why}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                Reading
              </p>
              <div className="space-y-5">
                {reading.map((book) => (
                  <div key={book.title} className="flex items-baseline justify-between border-b border-border/10 pb-4">
                    <span className="text-[15px] text-foreground/90 leading-tight">
                      {book.title}
                    </span>
                    <span className="text-[12px] font-mono text-muted-foreground/40 uppercase tracking-widest block text-right">
                      {book.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 5 — BELIEFS (Pinned fullscreen sequence)
          ══════════════════════════════════════════════════ */}
      <section ref={beliefsRef} className="relative z-10 w-full h-[100vh] flex flex-col items-center justify-center bg-foreground overflow-hidden">
        <div className="absolute top-12 left-0 w-full text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-background/30 uppercase">
              Truths
            </p>
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Belief 1 */}
          <div className="belief-item absolute flex flex-col items-center text-center opacity-0 w-[90%] md:w-[60%]">
            <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] font-light tracking-tight text-background">
              Every pixel is a decision.
            </h3>
            <p className="mt-6 text-[clamp(1.5rem,2.5vw,2.5rem)] font-light tracking-tight text-background/40 italic">
              Every decision is a position.
            </p>
          </div>

          {/* Belief 2 */}
          <div className="belief-item absolute flex flex-col items-center text-center opacity-0 w-[90%] md:w-[60%]">
            <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] font-light tracking-tight text-background">
              The best interface dissolves.
            </h3>
            <p className="mt-6 text-[clamp(1.5rem,2.5vw,2.5rem)] font-light tracking-tight text-background/40 italic">
              Like everything worth making.
            </p>
          </div>

          {/* Belief 3 */}
          <div className="belief-item absolute flex flex-col items-center text-center opacity-0 w-[90%] md:w-[60%]">
            <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] leading-[1.05] font-light tracking-tight text-background">
              Clarity is not a destination.
            </h3>
            <p className="mt-6 text-[clamp(1.5rem,2.5vw,2.5rem)] font-light tracking-tight text-background/40 italic">
              It is a daily practice.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 6 — THE CLOSING
          ══════════════════════════════════════════════════ */}
      <section className="relative z-10 px-6 py-32 md:px-[15%] md:py-48 bg-background flex flex-col items-center text-center">
        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="h-2 w-2 rounded-full border border-foreground/30 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase">
            You&apos;ve read this far
          </span>
          <div className="h-2 w-2 rounded-full border border-foreground/30 animate-pulse" />
        </div>

        <GsapTitle 
          text={"That says something about how you think."}
          className="max-w-[20ch] text-[clamp(3rem,6vw,5.5rem)] leading-[1.08] font-light tracking-tight mx-auto block"
        />

        <p className="mt-12 max-w-[50ch] text-[17px] leading-relaxed text-muted-foreground/60 mx-auto">
          I work best with people who see making as a practice, not a
          transaction. If that resonates, let&apos;s talk.
        </p>

        <MagneticButton className="mt-16">
          <a
            href="mailto:leondesigner221@gmail.com"
            className="group flex flex-col items-center relative"
          >
            <span className="text-[clamp(1.2rem,3vw,2rem)] tracking-tight text-foreground font-medium relative z-10 transition-colors">
              leondesigner221@gmail.com
            </span>
            <div className="h-[2px] w-full bg-foreground/20 mt-1 transition-all duration-300 group-hover:bg-foreground group-hover:scale-x-110" />
          </a>
        </MagneticButton>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-border/10 px-6 py-8 md:px-[15%] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <ArrowLeft className="size-4 text-muted-foreground/40 group-hover:-translate-x-1 group-hover:text-foreground transition-all" />
          <span className="text-[11px] font-mono tracking-widest text-muted-foreground/40 uppercase group-hover:text-foreground transition-colors">Back to work</span>
        </Link>
        <span className="text-[11px] font-mono tracking-widest text-muted-foreground/30 uppercase">
          &copy; 2026 Leon
        </span>
      </footer>

    </div>
  )
}
