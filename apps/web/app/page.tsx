import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Reveal } from "@/components/reveal"
import { ScrollFloat, SplitReveal } from "@/components/scroll-effects"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ── Header ── */}
      <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex h-14 items-center justify-between px-6 md:px-12">
          <span className="pointer-events-auto text-sm font-medium tracking-tight text-white">
            Leon
          </span>
          <nav className="pointer-events-auto flex items-center gap-8">
            <a
              href="#work"
              className="text-sm text-white/50 transition-opacity hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-white/50 transition-opacity hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-white/50 transition-opacity hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          ACT 1 — HERO
          Name drifts upward + dissolves as you scroll away.
          Bottom cluster lags behind — depth separation.
          You FEEL the parallax before you notice it.
          ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-svh flex-col justify-between px-6 pt-14 pb-10 md:px-12">
        <ScrollFloat speed={0.18} fade={0.7}>
          <h1 className="animate-hero-name pt-10 text-[clamp(5.5rem,19vw,22rem)] leading-[0.82] font-medium tracking-tighter md:pt-14">
            Leon
          </h1>
        </ScrollFloat>

        <ScrollFloat speed={-0.05}>
          <div>
            <div className="animate-hero-tagline flex flex-col items-start md:items-end">
              <p className="text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.12] font-light tracking-tight text-muted-foreground">
                Turning complexity
                <br />
                into clarity.
              </p>
              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-muted-foreground/40 md:text-right md:text-base">
                Product designer and builder. Systems thinking,
                early-stage products, 0&nbsp;to&nbsp;1.
              </p>
            </div>

            <div className="animate-hero-cta mt-12 flex items-end justify-between md:mt-16">
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href="#work">
                  <ArrowDown className="size-4" />
                  Work
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href="#contact">
                  Contact
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollFloat>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 2 — WORK
          An editorial index. NODO is the feature spread.
          The remaining 5 are clean rows — a curated list
          you can scan in seconds.
          ══════════════════════════════════════════════════ */}
      <section id="work" className="px-6 py-24 md:px-12 md:py-40">
        <Reveal variant="fade">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase">
            Selected Work
          </p>
        </Reveal>

        {/* ── NODO — Featured project ── */}
        <Reveal delay={80}>
          <Link
            href="/projects/nodo-ai"
            className="group block border-t border-border/15 pt-6 pb-8 md:pt-8 md:pb-10"
          >
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground/25">
                  01
                </span>
                <span className="text-xl font-medium tracking-tight md:text-2xl">
                  NODO
                </span>
                <span className="hidden rounded-full bg-foreground/8 px-2 py-0.5 text-[10px] font-medium text-muted-foreground/50 md:inline">
                  Shipped
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden text-sm text-muted-foreground/30 md:inline">
                  DeFi Infrastructure
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/50" />
              </div>
            </div>

            {/* Dark image — a contained inversion, not a full-bleed takeover */}
            <div className="relative mt-5 overflow-hidden rounded-xl bg-foreground md:mt-6">
              <div className="aspect-[16/9] md:aspect-[2.4/1]" />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-6">
                <span className="font-mono text-[10px] text-background/35">
                  Vault Interface — Desktop
                </span>
                <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
                  View case study
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted-foreground/45 md:text-base">
              Product design for AI-powered DeFi liquidity infrastructure on
              Sui. Vaults, ownership tokens, automated rebalancing — made
              human.
            </p>
          </Link>
        </Reveal>

        {/* ── Projects 02–06 — Clean rows ── */}
        {[
          {
            num: "02",
            name: "Diag",
            category: "Health Tech",
            desc: "Preventive healthcare",
            href: "#",
          },
          {
            num: "03",
            name: "GateFlow",
            category: "Developer Tools",
            desc: "API infrastructure",
            href: "#",
          },
          {
            num: "04",
            name: "Money Circle",
            category: "Fintech",
            desc: "Peer-to-peer finance",
            href: "#",
          },
          {
            num: "05",
            name: "Maratika",
            category: "Cultural",
            desc: "Event platform",
            href: "#",
          },
          {
            num: "06",
            name: "DuelZone",
            category: "Gaming",
            desc: "Competitive platform",
            href: "#",
          },
        ].map((project, i) => (
          <Reveal key={project.num} delay={i * 50}>
            <Link
              href={project.href}
              className="group flex items-baseline justify-between border-t border-border/15 py-4 transition-colors hover:bg-muted/20 md:py-5"
            >
              <div className="flex items-baseline gap-4">
                <span className="w-5 font-mono text-xs text-muted-foreground/20">
                  {project.num}
                </span>
                <span className="text-base font-medium tracking-tight transition-colors group-hover:text-foreground md:text-lg">
                  {project.name}
                </span>
                <span className="hidden text-sm text-muted-foreground/25 md:inline">
                  {project.desc}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden font-mono text-xs text-muted-foreground/20 md:inline">
                  {project.category}
                </span>
                <ArrowUpRight className="size-3.5 text-muted-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
            </Link>
          </Reveal>
        ))}

        {/* Bottom border */}
        <div className="border-t border-border/15" />
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3 — ABOUT
          Statement 1: slides from LEFT (the negation).
          Statement 2: slides from RIGHT (the affirmation).
          Opposing directions = conversational tension.
          Portrait: scales in (presence arriving).
          ══════════════════════════════════════════════════ */}
      <section id="about" className="px-6 py-24 md:px-12 md:py-40">
        {/* Negation — from left */}
        <Reveal delay={100} variant="left" distance={50}>
          <p className="text-[clamp(1.5rem,4.2vw,3.2rem)] leading-[1.12] font-light tracking-tight">
            I don&apos;t start
            <br />
            with screens.
          </p>
        </Reveal>

        {/* Affirmation — from RIGHT. The shift in direction IS the turn. */}
        <Reveal delay={150} variant="right" distance={50}>
          <p className="mt-6 text-[clamp(1.5rem,4.2vw,3.2rem)] leading-[1.12] font-normal tracking-tight md:ml-[25%]">
            I start with
            <br />
            the problem.
          </p>
        </Reveal>

        {/* Portrait + bio */}
        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.8fr] md:gap-16">
          <Reveal delay={0} variant="scale">
            <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-muted/15">
              <div className="aspect-[3/4]">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="-mt-8 h-24 w-24 rounded-full bg-foreground/[0.03] md:h-28 md:w-28" />
                  <div className="mt-10 ml-4 h-px w-20 bg-foreground/[0.04]" />
                </div>
              </div>
              <span className="absolute bottom-3 left-4 font-mono text-[9px] text-muted-foreground/20">
                Portrait
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:pt-8 md:text-base">
              <p>
                A decade of working with startups taught me that the best
                products aren&apos;t the ones with the most features. They&apos;re
                the ones where someone figured out what actually mattered, and
                had the discipline to let go of everything else.
              </p>
              <p>
                I specialize in 0-to-1 work: taking something undefined and
                giving it structure, logic, and a path forward. AI is part of
                how I work — not as a trend, but as a way to think deeper and
                move faster through ambiguity.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Process — compressed to one line */}
        <Reveal variant="fade" delay={100}>
          <div className="mt-20 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground/25 uppercase md:mt-28 md:gap-x-4">
            <span className="text-foreground/60">Understand</span>
            <span className="text-muted-foreground/15">—</span>
            <span className="text-foreground/60">Reduce</span>
            <span className="text-muted-foreground/15">—</span>
            <span className="text-foreground/60">Structure</span>
            <span className="text-muted-foreground/15">—</span>
            <span className="text-foreground/60">Ship</span>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 4 — CONTACT
          Heading arrives word by word — you read as it forms.
          The stagger creates anticipation before the email lands.
          ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="border-t border-border/15 px-6 py-20 md:px-12 md:py-28"
      >
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.08] font-light tracking-tight">
          <SplitReveal
            text={"Let's build\nsomething clear."}
            stagger={90}
            delay={0}
          />
        </h2>

        <Reveal delay={450}>
          <p className="mt-8 max-w-[40ch] text-sm leading-relaxed text-muted-foreground/45 md:ml-[20%] md:text-base">
            If you&apos;re building something that needs clarity — in how it
            works, how it feels, or how it&apos;s structured — I&apos;d like to
            hear about it.
          </p>
        </Reveal>

        <Reveal delay={600} variant="fade">
          <a
            href="mailto:hello@leon.design"
            className="mt-8 inline-block font-mono text-[clamp(1rem,2.5vw,1.5rem)] tracking-wide text-foreground underline decoration-foreground/15 underline-offset-[6px] transition-all duration-300 hover:decoration-foreground/50 hover:underline-offset-8 md:ml-[20%]"
          >
            hello@leon.design
          </a>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <Reveal variant="fade" delay={0} threshold={0.5}>
        <footer className="border-t border-border/10 px-6 py-8 md:px-12">
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
