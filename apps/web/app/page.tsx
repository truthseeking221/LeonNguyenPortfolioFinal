import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Reveal } from "@/components/reveal"
import { ScrollFloat, SplitReveal } from "@/components/scroll-effects"
import { RotatingHeadline } from "@/components/rotating-headline"

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

const COMPACT_PROJECTS = [
  {
    name: "Gull Network",
    category: "DEX & Launchpad",
    year: "2023",
    href: "/projects/gull-network",
    desc: "Brand and product for the post-hype era.",
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
] as const

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── Blueprint grid overlay ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-[8%] w-px bg-foreground/[0.03]" />
        <div className="absolute inset-y-0 left-[42%] w-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute left-[12%] right-[8%] top-[52%] h-px bg-foreground/[0.02]" />
      </div>

      {/* ── Header ── */}
      <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex h-14 items-center justify-between px-6 md:px-[300px]">
          <span className="pointer-events-auto text-sm font-medium tracking-tight text-white">
            Leon
          </span>
          <nav className="pointer-events-auto flex items-center gap-8">
            <a href="#work" className="text-sm text-white/50 transition-opacity hover:text-white">Work</a>
            <a href="#about" className="text-sm text-white/50 transition-opacity hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/50 transition-opacity hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          ACT 1 — HERO
          75vh. Three levels of hierarchy: label, headline,
          positioning line. Two CTAs. Nothing else.
          ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[75vh] flex-col justify-between px-6 pt-14 pb-10 md:px-[300px]">

        <ScrollFloat speed={0.15}>
          <div className="pt-10 md:pt-16">
            {/* Identity row */}
            <div className="animate-hero-label mb-5 flex items-center gap-3">
              <div className="h-px w-6 bg-foreground/[0.12]" />
              <span className="font-mono text-xs tracking-[0.22em] text-muted-foreground/55 uppercase">
                Leon · Product Designer
              </span>
            </div>

            <h1 className="animate-hero-name text-[clamp(3rem,5.5vw,7.5rem)] leading-[0.88] font-medium tracking-tighter text-black">
              <RotatingHeadline />
            </h1>

            {/* Single positioning line */}
            <p className="animate-hero-tagline mt-6 max-w-[44ch] text-[15px] leading-relaxed text-muted-foreground/65 md:mt-8 md:text-base">
              Systems, interfaces, and interactions that make complexity legible.
            </p>
          </div>
        </ScrollFloat>

        <ScrollFloat speed={-0.05}>
          <div className="animate-hero-cta flex items-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 border-signal bg-signal text-white hover:bg-signal/90"
            >
              <a href="#work">
                <ArrowDown className="size-4" />
                See the work
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#contact">
                Start a project
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </ScrollFloat>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 2 — FEATURED WORK
          NODO leads at full width. Metadata row below.
          The work arrives, then you understand what it is.
          ══════════════════════════════════════════════════ */}
      <section id="work" className="px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-16">
            Featured Work
          </p>
        </Reveal>

        {/* ── NODO — Flagship ── */}
        <Reveal delay={0}>
          <Link href="/projects/nodo-ai" className="group block">
            <div className="relative overflow-hidden rounded-xl bg-foreground transition-transform duration-700 ease-out group-hover:scale-[1.003]">
              <div className="relative aspect-[21/9]">
                {/* Corner brackets */}
                <div className="absolute top-5 left-5 h-7 w-7 border-t border-l border-background/15" />
                <div className="absolute top-5 right-5 h-7 w-7 border-t border-r border-background/15" />
                <div className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-background/15" />
                <div className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-background/15" />
                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-6 w-6">
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-background/10" />
                    <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-background/10" />
                  </div>
                </div>
                <span className="absolute bottom-5 left-5 font-mono text-[8px] tracking-[0.18em] text-background/12 uppercase">
                  NODO
                </span>
                {/* Hover outcome */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/50 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-8">
                  <p className="max-w-[50ch] text-sm leading-relaxed text-background/55">
                    Vault management for non-crypto users. Clarity as the core
                    product decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Metadata row */}
            <div className="mt-6 grid grid-cols-[1fr_auto] items-start gap-6 md:grid-cols-[auto_1fr_1.4fr_auto] md:gap-10">
              <div>
                <span className="text-xl font-medium tracking-tight">NODO</span>
                <p className="mt-1 text-sm text-muted-foreground/50">
                  DeFi Infrastructure · 2024
                </p>
              </div>
              <div className="hidden md:block">
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/30 uppercase">
                  Role
                </span>
                <p className="mt-1 text-sm text-muted-foreground/60">
                  Lead Product Designer
                </p>
              </div>
              <div className="hidden md:block">
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/30 uppercase">
                  Outcome
                </span>
                <p className="mt-1 text-sm text-muted-foreground/60">
                  Redesigned autonomous vault UX. Research to shipped MVP on Sui.
                </p>
              </div>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
            </div>
          </Link>
        </Reveal>

        {/* ── Strong pair — 55/45 split ── */}
        <div className="project-pair mt-14 grid grid-cols-1 gap-6 sm:grid-cols-[55fr_45fr]">

          {/* Diag */}
          <Reveal delay={200}>
            <Link href="#" className="project-card group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-foreground/[0.04] transition-all duration-500 group-hover:border-border/50">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.08]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.08]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.10] uppercase">
                    Diag
                  </span>
                  <div className="absolute inset-x-4 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs leading-relaxed text-muted-foreground/45">
                      Medical data made legible. A diagnostic experience people
                      trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-base font-medium tracking-tight">
                    Diag
                  </span>
                  <p className="mt-0.5 text-sm text-muted-foreground/50">
                    Health Tech · Product Strategy
                  </p>
                </div>
                <span className="font-mono text-[9px] text-muted-foreground/20">
                  2024
                </span>
              </div>
            </Link>
          </Reveal>

          {/* TymeBank Crypto */}
          <Reveal delay={200}>
            <Link
              href="/projects/tymebank-crypto"
              className="project-card group block"
            >
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-foreground/[0.04] transition-all duration-500 group-hover:border-border/50">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.08]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.08]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.06]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.06]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.10] uppercase">
                    TymeBank
                  </span>
                  <div className="absolute inset-x-4 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs leading-relaxed text-muted-foreground/45">
                      Crypto onboarding for a 5-million-customer bank.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <span className="text-base font-medium tracking-tight">
                    TymeBank Crypto
                  </span>
                  <p className="mt-0.5 text-sm text-muted-foreground/50">
                    Fintech · 0 to 1
                  </p>
                </div>
                <span className="font-mono text-[9px] text-muted-foreground/20">
                  2024
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* ── Compact row — breadth, not depth ── */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {COMPACT_PROJECTS.map((project) => (
            <Reveal key={project.name} delay={400}>
              <Link
                href={project.href}
                className="group block"
              >
                {/* Thumbnail placeholder */}
                <div className="relative overflow-hidden rounded-lg border border-dashed border-border/25 bg-foreground/[0.03] transition-all duration-500 group-hover:border-border/40">
                  <div className="relative aspect-[16/9]">
                    <div className="absolute top-2.5 left-2.5 h-4 w-4 border-t border-l border-foreground/[0.06]" />
                    <div className="absolute bottom-2.5 right-2.5 h-4 w-4 border-b border-r border-foreground/[0.06]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative h-4 w-4">
                        <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.05]" />
                        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.05]" />
                      </div>
                    </div>
                    <span className="absolute bottom-2.5 left-2.5 font-mono text-[7px] tracking-[0.18em] text-foreground/[0.08] uppercase">
                      {project.name}
                    </span>
                  </div>
                </div>
                {/* Meta */}
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm font-medium tracking-tight transition-colors group-hover:text-foreground">
                    {project.name}
                  </span>
                  <span className="font-mono text-[9px] text-muted-foreground/20">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground/40">
                  {project.category}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/50 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MANIFESTO STRIP
          Full bleed black. One sentence. A verdict.
          This is not a decorative separator — it's a poster.
          ══════════════════════════════════════════════════ */}
      <Reveal variant="fade">
        <div className="relative w-full overflow-hidden bg-foreground">
          <div className="flex flex-col items-center justify-center px-6 py-20 md:py-32">
            <p className="max-w-[24ch] text-center text-[clamp(1.8rem,4vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-background">
              I do not make things look clear.
            </p>
            <p className="mt-3 max-w-[24ch] text-center text-[clamp(1.8rem,4vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-background/50">
              I make them become clear.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════
          PRINCIPLES
          Five rows. Each one a conviction. Hover reveals
          the method behind the conviction. Desktop-only
          expansion; mobile shows detail by default.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">

        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-16">
            How I work
          </p>
        </Reveal>

        <div>
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.num} delay={i * 60}>
              <div className="group flex items-start gap-6 border-b border-border/8 py-8 last:border-0 md:gap-10 md:py-10">
                {/* Ghost number */}
                <span
                  aria-hidden="true"
                  className="shrink-0 select-none font-mono text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-none tracking-tighter text-foreground/[0.04] transition-colors duration-400 group-hover:text-foreground/[0.08]"
                >
                  {p.num}
                </span>

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
          Portrait left. Currently block + bio right.
          The Currently block comes first — it's the most
          human, most differentiating element on the page.
          ══════════════════════════════════════════════════ */}
      <section id="about" className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">

        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-16">
            About
          </p>
        </Reveal>

        {/* Opening line */}
        <Reveal delay={80}>
          <p className="max-w-[28ch] text-[clamp(1.5rem,4vw,3rem)] leading-[1.12] font-light tracking-tight text-foreground/90">
            I don&apos;t start with screens.
            <br />
            I start with what needs to become clear.
          </p>
        </Reveal>

        {/* Portrait + Bio grid */}
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_1.8fr] md:gap-16">

          {/* Portrait */}
          <Reveal delay={0} variant="scale">
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
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
          Two quotes. Side by side. Evidence, not decoration.
          Both appear together — no stagger.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">

        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-16">
            What people say
          </p>
        </Reveal>

        <Reveal delay={0} variant="fade">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

            <figure>
              <blockquote>
                <p className="text-[clamp(1.1rem,2.2vw,1.45rem)] font-light leading-[1.45] tracking-tight text-foreground/80">
                  &ldquo;We had six months of confusion that Leon resolved
                  in two weeks. He didn&apos;t redesign the interface.
                  He redesigned the thinking behind it.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border/20 bg-foreground/[0.06]" />
                <span className="text-xs tracking-wide text-muted-foreground/55">
                  Founder, B2B SaaS · Series A
                </span>
              </figcaption>
            </figure>

            <figure>
              <blockquote>
                <p className="text-[clamp(1.1rem,2.2vw,1.45rem)] font-light leading-[1.45] tracking-tight text-foreground/80">
                  &ldquo;The best thing he did was tell us what not to build.
                  That single call saved us three months and probably
                  the product.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border/20 bg-foreground/[0.06]" />
                <span className="text-xs tracking-wide text-muted-foreground/55">
                  CEO, TymeBank Crypto
                </span>
              </figcaption>
            </figure>

          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — RESOLUTION
          The page built tension through hierarchy, proof,
          and conviction. The CTA releases it.
          ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="border-t border-border/15 px-6 py-20 md:px-[300px] md:py-32"
      >
        <Reveal variant="fade" delay={0}>
          <div className="mb-10 flex items-center gap-2 md:mb-12">
            <div className="h-1.5 w-1.5 animate-breathe rounded-full bg-signal" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
              Available for new projects
            </span>
          </div>
        </Reveal>

        <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.08] font-light tracking-tight">
          <SplitReveal
            text={"Let's build\nsomething clear."}
            stagger={90}
            delay={0}
          />
        </h2>

        <Reveal delay={400}>
          <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-muted-foreground/60">
            For products that need sharper structure, stronger interaction,
            and a clearer point of view.
          </p>
        </Reveal>

        <Reveal delay={550} variant="fade">
          <a
            href="mailto:leondesigner221@gmail.com"
            className="mt-8 inline-flex items-center gap-3 font-mono text-[clamp(1rem,2.5vw,1.5rem)] tracking-wide text-foreground underline decoration-signal/40 underline-offset-[6px] transition-all duration-300 hover:decoration-signal hover:underline-offset-8"
          >
            leondesigner221@gmail.com
            <ArrowUpRight className="size-5 text-signal/50" />
          </a>
        </Reveal>
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
