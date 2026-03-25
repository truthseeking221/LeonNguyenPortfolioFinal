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

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const PRINCIPLES = [
  {
    num: "01",
    statement: "Start with what needs to become clear — not with a screen.",
    detail:
      "Every project begins with the same question: what is the single most important thing this product needs to communicate? The screen comes after the answer.",
  },
  {
    num: "02",
    statement: "Design the system, not just the surface.",
    detail:
      "A beautiful screen that doesn't scale is a prototype. The system — tokens, components, patterns, rules — is what lets a team move fast without breaking things.",
  },
  {
    num: "03",
    statement: "If removing it doesn't break anything, it was never needed.",
    detail:
      "Every element must earn its place. Decoration is debt. Clarity comes from subtraction, not addition.",
  },
  {
    num: "04",
    statement: "Every transition should say something or say nothing at all.",
    detail:
      "Motion is communication. If an animation doesn't reinforce meaning, hierarchy, or spatial relationships, it's noise.",
  },
  {
    num: "05",
    statement: "Speed is a design input. If the team can't move with it, it's wrong.",
    detail:
      "A design system that slows down the team is not a design system. It's overhead. Pragmatism over perfection.",
  },
] as const

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
    name: "GoTyme GoalSave",
    category: "Fintech",
    year: "2023",
    href: "/projects/gotyme-savings",
    desc: "Saving as a habit. Designed for the Philippines.",
  },
  {
    name: "DuelZone",
    category: "Gaming",
    year: "2023",
    href: "#",
    desc: "Competitive gaming. Speed and legibility under pressure.",
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
          PRINCIPLES
          Linked along the spine line as stages
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
              How I work
            </p>
            <span className="h-px flex-1 bg-border/40" />
          </div>
        </Reveal>

        <div className="relative ml-0 md:ml-12 border-l border-border/20 pl-8 md:pl-16">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.num} delay={i * 60}>
              <div className="group relative flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-16 last:pb-0">
                {/* Branch connection for infographic */}
                <div className="absolute -left-8 md:-left-16 top-6 h-px w-8 md:w-12 bg-border/30 transition-colors group-hover:bg-foreground/40" />
                <div className="absolute -left-[37px] md:-left-[69px] top-5 h-2 w-2 rounded-full border border-border bg-background transition-colors group-hover:border-foreground group-hover:bg-foreground/10" />

                {/* Number block */}
                <ScrollFloat speed={0.03}>
                  <div className="flex h-12 w-16 items-center rounded-lg border border-border/10 bg-foreground/[0.02] px-3 transition-colors group-hover:bg-foreground/[0.04]">
                    <span
                      aria-hidden="true"
                      className="text-2xl font-bold tracking-tight text-foreground/40 transition-colors duration-400 group-hover:text-foreground/80"
                    >
                      {p.num}
                    </span>
                  </div>
                </ScrollFloat>

                <div className="flex-1 pt-2">
                  {/* Statement */}
                  <p className="text-[clamp(1.05rem,2vw,1.5rem)] leading-[1.35] tracking-tight text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
                    {p.statement}
                  </p>

                  {/* Detail — visible on mobile, revealed on hover for desktop */}
                  <div className="mt-3 overflow-hidden transition-all duration-400 md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:mt-3 md:group-hover:max-h-24 md:group-hover:opacity-100">
                    <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground/50 dark:text-muted-foreground/70">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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
