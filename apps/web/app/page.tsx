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
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
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
                    <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground/50">
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
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              About
            </p>
            <span className="h-px flex-1 bg-border/40" />
          </div>
        </Reveal>

        {/* Opening line */}
        <Reveal delay={80}>
          <GsapTitle 
            text="I don't start with screens. I start with what needs to become clear."
            className="max-w-[28ch] text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] font-light tracking-tight text-foreground/90"
          />
        </Reveal>

        {/* Portrait + Bio grid */}
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_2fr] md:gap-16">

          {/* Portrait */}
          <Reveal delay={0} variant="scale">
            <ScrollFloat speed={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-foreground/[0.04]">
              <div className="aspect-[3/4]">
                <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-foreground/[0.10]" />
                <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-foreground/[0.10]" />
                <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-foreground/[0.10]" />
                <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-foreground/[0.10]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-4 w-4">
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                    <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 font-mono text-[9px] text-foreground/[0.15]">
                  Portrait
                </span>
              </div>
            </div>
            </ScrollFloat>
          </Reveal>

          {/* Bio content */}
          <Reveal delay={200}>
            <div className="md:pt-4">

              {/* Currently — live, present tense, first thing */}
              <div className="space-y-4 border-b border-border/10 pb-8">
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground/45 uppercase">
                  Right now
                </p>
                <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/42 uppercase">
                    Working on
                  </span>
                  <span className="text-sm text-muted-foreground/70">
                    TymeBank Crypto: crypto onboarding at scale
                  </span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/42 uppercase">
                    Thinking about
                  </span>
                  <span className="text-sm text-muted-foreground/70">
                    How AI reshapes what a product designer actually does
                  </span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/42 uppercase">
                    Reading
                  </span>
                  <span className="text-sm text-muted-foreground/70">
                    The Shape of Design, Frank Chimero
                  </span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/42 uppercase">
                    Using
                  </span>
                  <span className="text-sm text-muted-foreground/70">
                    Claude, Cursor, Figma, Linear
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/70 md:text-base">
                <p>
                  I specialize in 0-to-1 work. Taking something that
                  doesn&apos;t exist yet and giving it structure, logic, and
                  a point of view. I start with what needs to become clear,
                  then I remove everything that doesn&apos;t support it.
                </p>
                <p>
                  AI is part of how I work — not as a trend, but as a way to
                  think deeper and move faster through ambiguity. The best
                  products don&apos;t have the most features. They have the
                  clearest thinking behind them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Process — four verbs */}
        <Reveal variant="fade" delay={100}>
          <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm tracking-widest uppercase md:mt-24 md:gap-x-5">
            <span className="text-foreground/80">Ask</span>
            <span className="text-foreground/25">·</span>
            <span className="text-foreground/80">Reduce</span>
            <span className="text-foreground/25">·</span>
            <span className="text-foreground/80">Shape</span>
            <span className="text-foreground/25">·</span>
            <span className="text-foreground/80">Ship</span>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={200}>
          <div className="mt-10">
            <MagneticButton>
              <GradientButton href="/about">
                <span className="inline-flex items-center gap-2">
                  Read more
                  <ArrowRight className="size-3" />
                </span>
              </GradientButton>
            </MagneticButton>
          </div>
        </Reveal>
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
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
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
      <section
        id="contact"
        className="relative px-12 py-20 pb-40 md:px-[200px] md:py-32 md:pb-52 max-w-screen-2xl mx-auto"
      >
        {/* Timeline spine (ends at node) */}
        <div className="pointer-events-none absolute top-0 left-6 md:left-[120px] -translate-x-1/2 w-px h-32 bg-foreground/[0.08]" />

        {/* Node indicator - Final End Node */}
        <div className="pointer-events-none absolute left-6 md:left-[120px] top-32 -translate-x-1/2 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full border-2 border-background bg-foreground shadow-[0_0_15px_rgba(0,0,0,0.3)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          <div className="absolute h-8 w-8 animate-ping rounded-full border border-foreground/30" />
        </div>

        <Reveal variant="fade" delay={0}>
          <div className="mb-10 flex items-center gap-3 md:mb-12">
            <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">
               <div className="h-1.5 w-1.5 animate-breathe rounded-full bg-foreground/80" />
               <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-foreground/70 uppercase">
                 Available for new projects
               </span>
            </div>
          </div>
        </Reveal>

        <ScrollFloat speed={0.06} className="font-light">
          <GsapTitle 
            text="Let's build something clear." 
            className="text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.0] font-light tracking-tight"
          />
        </ScrollFloat>

        <Reveal delay={400}>
          <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-muted-foreground/60">
            For products that need sharper structure, stronger interaction,
            and a clearer point of view.
          </p>
        </Reveal>

        <ScrollFloat speed={-0.04}>
          <Reveal delay={550} variant="fade">
            <div className="mt-8">
              <MagneticButton>
                <GradientButton href="mailto:leondesigner221@gmail.com">
                  <span className="inline-flex items-center gap-2">
                    leondesigner221@gmail.com
                    <ArrowUpRight className="size-4" />
                  </span>
                </GradientButton>
              </MagneticButton>
            </div>
          </Reveal>
        </ScrollFloat>
      </section>

      {/* ── Footer ── */}
      <Reveal variant="fade" delay={0} threshold={0.5}>
        <footer className="border-t border-border/10 px-6 py-8 md:px-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground/20">
              &copy; 2026 Leon
            </span>
            <span className="text-[10px] text-muted-foreground/20">
              Product Designer &amp; Builder
            </span>
          </div>
        </footer>
      </Reveal>

    </main>
  )
}
