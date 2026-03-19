import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Reveal } from "@/components/reveal"
import { ScrollFloat, SplitReveal } from "@/components/scroll-effects"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ── Grid overlay — a broken blueprint, not a spreadsheet ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        {/* Vertical lines — intentionally unequal spacing, some partial */}
        <div className="absolute inset-y-0 left-[8%] w-px bg-foreground/[0.04]" />
        <div className="absolute top-[12%] bottom-[30%] left-[25%] w-px bg-foreground/[0.03] hidden md:block" />
        <div className="absolute inset-y-0 left-[42%] w-px bg-foreground/[0.04] hidden md:block" />
        <div className="absolute top-[5%] bottom-0 left-[58%] w-px bg-foreground/[0.03] hidden md:block" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-foreground/[0.04] hidden md:block" />
        <div className="absolute top-0 bottom-[40%] left-[92%] w-px bg-foreground/[0.03] hidden md:block" />

        {/* Horizontal lines — sparse, at intentional positions */}
        <div className="absolute inset-x-0 top-[18%] h-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute left-[12%] right-[8%] top-[52%] h-px bg-foreground/[0.035]" />
        <div className="absolute left-0 right-[35%] top-[78%] h-px bg-foreground/[0.025] hidden md:block" />

        {/* Diagonal — breaks the orthogonal logic. Tension. */}
        <div className="absolute top-[8%] left-0 h-px w-[40%] origin-top-left rotate-[15deg] bg-foreground/[0.025] hidden md:block" />

        {/* Circle — architect's compass mark */}
        <div className="absolute left-[58%] top-[18%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.035] hidden md:block" />

        {/* Cross markers — structural anchors at key intersections */}
        <div className="absolute left-[42%] top-[52%] hidden md:block">
          <div className="absolute -top-2 left-0 h-4 w-px bg-foreground/[0.06]" />
          <div className="absolute top-0 -left-2 h-px w-4 bg-foreground/[0.06]" />
        </div>
        <div className="absolute left-[75%] top-[18%] hidden md:block">
          <div className="absolute -top-1.5 left-0 h-3 w-px bg-foreground/[0.05]" />
          <div className="absolute top-0 -left-1.5 h-px w-3 bg-foreground/[0.05]" />
        </div>

        {/* Coordinate whisper — barely readable */}
        <span className="absolute bottom-3 left-[8%] ml-1 font-mono text-[7px] text-foreground/[0.06] hidden md:block">
          0,0
        </span>
      </div>

      {/* ── Header ── */}
      <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex h-14 items-center justify-between px-6 md:px-[300px]">
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
      <section className="relative flex min-h-svh flex-col justify-between px-6 pt-14 pb-10 md:px-[300px]">
        <ScrollFloat speed={0.18} fade={0.7}>
          <div className="pt-10 md:pt-14">
            <span className="animate-hero-label font-mono text-[10px] tracking-[0.28em] text-muted-foreground/30 uppercase">
              Leon
            </span>
            <h1 className="animate-hero-name mt-3 text-[clamp(3rem,5.5vw,7.5rem)] leading-[0.88] font-medium tracking-tighter">
              Turning complexity
              <br />
              into clarity.
            </h1>
          </div>
        </ScrollFloat>

        <ScrollFloat speed={-0.05}>
          <div>
            <div className="animate-hero-tagline flex flex-col items-start md:items-end">
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground/40 md:text-right md:text-base">
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
          2-column grid. Every project gets an image.
          NODO stands out through its dark image — the
          inversion is contained to the card, not the page.
          6 projects, 3 rows. Clean.
          ══════════════════════════════════════════════════ */}
      <section id="work" className="px-6 py-24 md:px-[300px] md:py-40">
        <Reveal variant="fade">
          <p className="mb-10 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase md:mb-14">
            Selected Work
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-x-6 md:gap-y-14">
          {/* ── 01 NODO ── */}
          <Reveal delay={0}>
            <Link href="/projects/nodo-ai" className="group block">
              <div className="relative overflow-hidden rounded-xl bg-foreground transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-background/20" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-background/20" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-background/20" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-background/20" />
                  {/* Center crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-background/15" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-background/15" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-background/20 uppercase">NODO</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-foreground">View</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/25">01</span>
                  <span className="text-base font-medium tracking-tight">NODO</span>
                  <span className="hidden rounded-full bg-foreground/8 px-1.5 py-0.5 text-[9px] text-muted-foreground/45 sm:inline">Shipped</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/50" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/35">DeFi Infrastructure · Product Design</p>
            </Link>
          </Reveal>

          {/* ── 02 Diag ── */}
          <Reveal delay={60}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.10]" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-foreground/[0.10]" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/[0.10]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.10]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">Diag</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">02</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Diag</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Health Tech · Product Strategy</p>
            </Link>
          </Reveal>

          {/* ── 03 Gull Network ── */}
          <Reveal delay={120}>
            <Link href="/projects/gull-network" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.10]" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-foreground/[0.10]" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/[0.10]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.10]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">Gull Network</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">03</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Gull Network</span>
                  <span className="hidden rounded-full bg-foreground/8 px-1.5 py-0.5 text-[9px] text-muted-foreground/45 sm:inline">Shipped</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">DEX & Launchpad · Brand & Product Design</p>
            </Link>
          </Reveal>

          {/* ── 04 Money Circle ── */}
          <Reveal delay={180}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.10]" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-foreground/[0.10]" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/[0.10]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.10]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">Money Circle</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">04</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Money Circle</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Fintech · 0 to 1</p>
            </Link>
          </Reveal>

          {/* ── 05 Maratika ── */}
          <Reveal delay={240}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.10]" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-foreground/[0.10]" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/[0.10]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.10]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">Maratika</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">05</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Maratika</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Cultural · Experience</p>
            </Link>
          </Reveal>

          {/* ── 06 DuelZone ── */}
          <Reveal delay={300}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/2]">
                  <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-foreground/[0.10]" />
                  <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-foreground/[0.10]" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/[0.10]" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/[0.10]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-5 w-5">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-foreground/[0.07]" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-foreground/[0.07]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">DuelZone</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">06</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">DuelZone</span>
                </div>
                <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Gaming · Product Design</p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3 — ABOUT
          Statement 1: slides from LEFT (the negation).
          Statement 2: slides from RIGHT (the affirmation).
          Opposing directions = conversational tension.
          Portrait: scales in (presence arriving).
          ══════════════════════════════════════════════════ */}
      <section id="about" className="px-6 py-24 md:px-[300px] md:py-40">
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
                The best products don&apos;t have the most features. They have
                the clearest thinking behind them. Someone decided what actually
                mattered, and had the discipline to remove everything else.
              </p>
              <p>
                I specialize in 0-to-1 work: taking something undefined and
                giving it structure, logic, and a path forward. AI is part of
                how I work. Not as a trend. As a way to think deeper and move
                faster through ambiguity.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Process — compressed to one line */}
        <Reveal variant="fade" delay={100}>
          <div className="mt-20 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground/25 uppercase md:mt-28 md:gap-x-4">
            <span className="text-foreground/60">Ask</span>
            <span className="text-muted-foreground/15">·</span>
            <span className="text-foreground/60">Reduce</span>
            <span className="text-muted-foreground/15">·</span>
            <span className="text-foreground/60">Shape</span>
            <span className="text-muted-foreground/15">·</span>
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
        className="border-t border-border/15 px-6 py-20 md:px-[300px] md:py-28"
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
            Tell me what you&apos;re building.
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
