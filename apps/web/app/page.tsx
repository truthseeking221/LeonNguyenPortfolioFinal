import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { ScrollFloat } from "@/components/scroll-effects"
import gullCover from "@/app/images/Gull.png"
import { HorizontalWork, type CompactProject } from "@/components/horizontal-work"
import { GsapTitle } from "@/components/gsap-title"
import { HeroSection } from "@/components/hero-section"
import { GradientButton } from "@/components/gradient-button"
import { MagneticButton } from "@/components/magnetic-button"
import { ManifestoStrip } from "@/components/manifesto-strip"
import { ClosingCTA } from "@/components/closing-cta"
import { HowIWork } from "@/components/how-i-work"
import gotymeSavingCover from "@/app/images/GoTyme Saving.png"

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const COMPACT_PROJECTS: CompactProject[] = [
  {
    name: "Gull Network",
    category: "DEX & Launchpad",
    year: "2023",
    href: "/projects/gull-network",
    desc: "Brand and product for the post-hype era.",
    coverImage: gullCover,
  },
  {
    name: "Love Birds",
    category: "AI Dating",
    year: "2025",
    href: "/projects/love-birds",
    desc: "AI matchmaker that gets you a date in 48 hours.",
  },
  {
    name: "GoTyme GoalSave",
    category: "Fintech",
    year: "2023",
    href: "/projects/gotyme-savings",
    desc: "Saving as a habit. Designed for the Philippines.",
    coverImage: gotymeSavingCover,
  },
]

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">


      {/* ══════════════════════════════════════════════════
          HERO — REIMAGINED
          ══════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════════════════════════
          ACT 2 — FEATURED WORK (HORIZONTAL SCROLL)
          ══════════════════════════════════════════════════ */}
      <HorizontalWork compactProjects={COMPACT_PROJECTS} />

      {/* ══════════════════════════════════════════════════
          MANIFESTO STRIP
          ══════════════════════════════════════════════════ */}
      <ManifestoStrip />

      {/* ══════════════════════════════════════════════════
          PRINCIPLES - REIMAGINED GSAP "HOW I WORK"
          Linked along the spine line as stages
          ══════════════════════════════════════════════════ */}
      <HowIWork />

      {/* ══════════════════════════════════════════════════
          ABOUT
          ══════════════════════════════════════════════════ */}
      <section id="about" className="relative px-12 py-20 md:px-[200px] md:py-32 max-w-screen-2xl mx-auto">

        {/* Timeline spine */}
        <div className="pointer-events-none absolute inset-y-0 left-6 md:left-[120px] -translate-x-1/2 w-px bg-foreground/[0.08]" />

        {/* Node indicator */}
        <div className="pointer-events-none absolute left-6 md:left-[120px] top-32 -translate-x-1/2 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full border-2 border-background bg-foreground/60" />
        </div>

        <Reveal variant="fade">
          <div className="mb-12 flex items-center gap-4 md:mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 dark:text-muted-foreground/70 uppercase">
              About
            </p>
            <span className="h-px flex-1 bg-border/40" />
          </div>
        </Reveal>

        {/* Opening line */}
        <Reveal delay={80}>
          <GsapTitle 
            text="I don't start with screens. I start with what needs to become clear."
            className="mt-6 md:mt-0 max-w-[28ch] text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.1] font-light tracking-tight text-foreground/90"
          />
        </Reveal>

        {/* Portrait + Bio grid */}
        <div className="mt-20 grid gap-16 md:mt-32 md:grid-cols-[1fr_1.4fr] md:gap-32 items-start">

          {/* Minimalist Cinematic Portrait Canvas */}
          <Reveal delay={0} variant="fade">
            <ScrollFloat speed={0.03}>
              <div className="relative rounded-[24px] bg-foreground/[0.03] overflow-hidden">
                <div className="aspect-[4/5] relative w-full h-full p-6 flex flex-col justify-between">
                  {/* Focus corners static */}
                  <div className="absolute top-6 left-6 h-4 w-4 border-t border-l border-foreground/10" />
                  <div className="absolute top-6 right-6 h-4 w-4 border-t border-r border-foreground/10" />
                  <div className="absolute bottom-6 left-6 h-4 w-4 border-b border-l border-foreground/10" />
                  <div className="absolute bottom-6 right-6 h-4 w-4 border-b border-r border-foreground/10" />
                  
                  {/* Central geometric crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative h-4 w-4 opacity-10">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground" />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="font-mono text-[9px] tracking-widest text-foreground/30 uppercase">
                      Portrait
                    </span>
                  </div>
                </div>
              </div>

              {/* Process — four verbs placed under the image as per reference */}
              <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-widest uppercase md:mt-16 md:gap-x-6">
                <span className="text-foreground/80">Ask</span>
                <span className="text-foreground/20">·</span>
                <span className="text-foreground/80">Reduce</span>
                <span className="text-foreground/20">·</span>
                <span className="text-foreground/80">Shape</span>
                <span className="text-foreground/20">·</span>
                <span className="text-foreground/80">Ship</span>
              </div>
            </ScrollFloat>
          </Reveal>

          {/* Interactive Bio content */}
          <div className="md:pt-4 flex flex-col gap-20">

            {/* STATUS BOARD: Ultra clean, no borders */}
            <Reveal delay={100} variant="fade">
              <div className="flex flex-col">
                <div className="pb-8">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                    Right now
                  </span>
                </div>
                
                <div className="flex flex-col gap-6">
                {[
                  { label: "Working on", value: "TymeBank Crypto: crypto onboarding at scale" },
                  { label: "Thinking about", value: "How AI reshapes what a product designer actually does" },
                  { label: "Reading", value: "The Shape of Design, Frank Chimero" },
                  { label: "Using", value: "Claude, Cursor, Figma, Linear" },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[140px_1fr] md:grid-cols-[160px_1fr] items-baseline">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/40 uppercase">
                      {item.label}
                    </span>
                    <span className="text-[13px] md:text-[14.5px] text-muted-foreground/80 font-light">
                      {item.value}
                    </span>
                  </div>
                ))}
                </div>
              </div>
            </Reveal>

            {/* Smooth Bio paragraphs */}
            <div className="space-y-6 text-[14.5px] leading-[1.8] text-muted-foreground/90 md:text-[15px] font-light">
              <Reveal delay={200} variant="fade">
                <p>
                  I specialize in 0-to-1 work. Taking something that doesn't exist yet and giving it structure, logic, and a point of view. I start with what needs to become clear, then I remove everything that doesn't support it.
                </p>
              </Reveal>
              <Reveal delay={300} variant="fade">
                <p>
                  AI is part of how I work — not as a trend, but as a way to think deeper and move faster through ambiguity. The best products don't have the most features. They have the clearest thinking behind them.
                </p>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
          ══════════════════════════════════════════════════ */}
      <section className="relative px-12 py-20 md:px-[200px] md:py-32 max-w-screen-2xl mx-auto">

        {/* Timeline spine */}
        <div className="pointer-events-none absolute inset-y-0 left-6 md:left-[120px] -translate-x-1/2 w-px bg-foreground/[0.08]" />

        {/* Node indicator */}
        <div className="pointer-events-none absolute left-6 md:left-[120px] top-32 -translate-x-1/2 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full border-2 border-background bg-foreground/60" />
        </div>

        <Reveal variant="fade">
          <div className="mb-12 flex items-center gap-4 md:mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 dark:text-muted-foreground/70 uppercase">
              What people say
            </p>
            <span className="h-px flex-1 bg-border/40" />
          </div>
        </Reveal>

        <Reveal delay={0} variant="fade">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

            <ScrollFloat speed={0.02}>
              <figure className="relative p-8 rounded-2xl border border-border/15 bg-primary/[0.02]">
                <div className="absolute -top-3 left-8 text-4xl text-foreground/15">&ldquo;</div>
                <blockquote className="relative z-10">
                  <p className="text-[clamp(1.1rem,2vw,1.25rem)] font-medium leading-[1.5] tracking-tight text-foreground/80">
                    We had six months of confusion that Leon resolved
                    in two weeks. He didn&apos;t redesign the interface.
                    He redesigned the thinking behind it.
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border/10 pt-6">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border/20 bg-foreground/[0.06]" />
                  <span className="text-sm font-medium tracking-wide text-muted-foreground/80">
                    Founder, B2B SaaS · Series A
                  </span>
                </figcaption>
              </figure>
            </ScrollFloat>

            <ScrollFloat speed={-0.01}>
              <figure className="relative p-8 rounded-2xl border border-border/15 bg-primary/[0.02]">
                 <div className="absolute -top-3 left-8 text-4xl text-foreground/15">&ldquo;</div>
                <blockquote className="relative z-10">
                  <p className="text-[clamp(1.1rem,2vw,1.25rem)] font-medium leading-[1.5] tracking-tight text-foreground/80">
                    The best thing he did was tell us what not to build.
                    That single call saved us three months and probably
                    the product.
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border/10 pt-6">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border/20 bg-foreground/[0.06]" />
                  <span className="text-sm font-medium tracking-wide text-muted-foreground/80">
                    CEO, TymeBank Crypto
                  </span>
                </figcaption>
              </figure>
            </ScrollFloat>

          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — RESOLUTION
          ══════════════════════════════════════════════════ */}
      <div id="contact" className="relative group">
         {/* Timeline spine terminal node to connect to the previous section */}
         <div className="pointer-events-none absolute top-0 left-6 md:left-[120px] -translate-x-1/2 w-px h-32 bg-foreground/[0.08] z-20" />
         <div className="pointer-events-none absolute left-6 md:left-[120px] top-32 -translate-x-1/2 flex items-center justify-center z-20">
           <div className="h-4 w-4 rounded-full border-2 border-background bg-foreground shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
           <div className="absolute h-8 w-8 animate-ping rounded-full border border-foreground/30" />
         </div>

         <ClosingCTA />
      </div>

      {/* ── Footer ── */}
      <Reveal variant="fade" delay={0} threshold={0.5}>
        <footer className="border-t border-border/10 px-6 py-8 md:px-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground/20 dark:text-muted-foreground/40">
              &copy; 2026 Leon
            </span>
            <span className="text-[10px] text-muted-foreground/20 dark:text-muted-foreground/40">
              Product Designer &amp; Builder
            </span>
          </div>
        </footer>
      </Reveal>

    </main>
  )
}
