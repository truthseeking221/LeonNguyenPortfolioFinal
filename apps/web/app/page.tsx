import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { Reveal } from "@/components/reveal"
import { ScrollFloat, SplitReveal } from "@/components/scroll-effects"
import { RotatingHeadline } from "@/components/rotating-headline"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── Blueprint grid overlay ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-[8%] w-px bg-foreground/[0.04]" />
        <div className="absolute top-[12%] bottom-[30%] left-[25%] w-px bg-foreground/[0.03] hidden md:block" />
        <div className="absolute inset-y-0 left-[42%] w-px bg-foreground/[0.04] hidden md:block" />
        <div className="absolute top-[5%] bottom-0 left-[58%] w-px bg-foreground/[0.03] hidden md:block" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-foreground/[0.04] hidden md:block" />
        <div className="absolute top-0 bottom-[40%] left-[92%] w-px bg-foreground/[0.03] hidden md:block" />
        <div className="absolute inset-x-0 top-[18%] h-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute left-[12%] right-[8%] top-[52%] h-px bg-foreground/[0.035]" />
        <div className="absolute left-0 right-[35%] top-[78%] h-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute top-[8%] left-0 h-px w-[40%] origin-top-left rotate-[15deg] bg-foreground/[0.025] hidden md:block" />
        <div className="absolute left-[58%] top-[18%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.035] hidden md:block" />
        <div className="absolute left-[42%] top-[52%] hidden md:block">
          <div className="absolute -top-2 left-0 h-4 w-px bg-foreground/[0.06]" />
          <div className="absolute top-0 -left-2 h-px w-4 bg-foreground/[0.06]" />
        </div>
        <div className="absolute left-[75%] top-[18%] hidden md:block">
          <div className="absolute -top-1.5 left-0 h-3 w-px bg-foreground/[0.05]" />
          <div className="absolute top-0 -left-1.5 h-px w-3 bg-foreground/[0.05]" />
        </div>
        <span className="absolute bottom-3 left-[8%] ml-1 font-mono text-[7px] text-foreground/[0.06] hidden md:block">0,0</span>
      </div>

      {/* ── Header ── */}
      <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex h-14 items-center justify-between px-6 md:px-[300px]">
          <span className="pointer-events-auto text-sm font-medium tracking-tight text-white">Leon</span>
          <nav className="pointer-events-auto flex items-center gap-8">
            <a href="#work" className="text-sm text-white/50 transition-opacity hover:text-white">Work</a>
            <a href="#services" className="text-sm text-white/50 transition-opacity hover:text-white">Services</a>
            <a href="#about" className="text-sm text-white/50 transition-opacity hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/50 transition-opacity hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          ACT 1 — HERO
          Positioning line leads. Name is a whisper above.
          The scroll pulls the headline away — you chase it.
          Availability lives between the two CTAs. Present tense.
          ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-svh flex-col justify-between px-6 pt-14 pb-10 md:px-[300px]">

        <ScrollFloat speed={0.18} fade={0.7}>
          <div className="pt-10 md:pt-16">
            {/* Identity row */}
            <div className="animate-hero-label mb-5 flex items-center gap-3">
              <div className="h-px w-6 bg-foreground/[0.12]" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/30 uppercase">
                Leon · Product Designer
              </span>
            </div>

            <h1 className="animate-hero-name text-[clamp(3rem,5.5vw,7.5rem)] leading-[0.88] font-medium tracking-tighter">
              <RotatingHeadline />
            </h1>

            {/* Breath after the headline */}
            <div className="animate-hero-line mt-10 h-px w-full bg-foreground/[0.06]" />
          </div>
        </ScrollFloat>

        <ScrollFloat speed={-0.05}>
          <div>
            <div className="animate-hero-tagline flex items-start justify-between gap-8 md:items-end">
              <p className="max-w-[28ch] text-sm leading-relaxed text-muted-foreground/40 md:text-base">
                Product designer and builder.
                <br />
                Early-stage products, systems thinking, 0&nbsp;to&nbsp;1.
              </p>
              <div className="hidden flex-col items-end gap-1 md:flex">
                <span className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/20 uppercase">Based in</span>
                <span className="font-mono text-[8px] tracking-[0.2em] text-muted-foreground/30 uppercase">Vietnam</span>
              </div>
            </div>

            <div className="animate-hero-cta mt-10 flex items-center justify-between md:mt-14">
              <Button asChild variant="ghost" size="lg" className="-ml-3 gap-2">
                <a href="#work">
                  <ArrowDown className="size-4" />
                  Work
                </a>
              </Button>

              {/* Availability — center of the bottom row */}
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500/70" />
                <span className="font-mono text-[8px] tracking-[0.18em] text-muted-foreground/30 uppercase">Available</span>
              </div>

              <Button asChild variant="ghost" size="lg" className="-mr-3 gap-2">
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
          NODO leads at full width. The rest follow in pairs.
          Hover reveals the one sentence that explains each project.
          ══════════════════════════════════════════════════ */}
      <section id="work" className="px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <div className="mb-12 flex items-baseline justify-between md:mb-16">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase">
              Selected Work
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/15 uppercase">
              06 Projects
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-x-6 md:gap-y-14">

          {/* ── 01 NODO — Featured, full width ── */}
          <Reveal delay={0} className="sm:col-span-2">
            <Link href="/projects/nodo-ai" className="group block">
              <div className="relative overflow-hidden rounded-xl bg-foreground transition-transform duration-500 group-hover:scale-[1.005]">
                <div className="relative aspect-video">
                  <div className="absolute top-4 left-4 h-6 w-6 border-t border-l border-background/20" />
                  <div className="absolute top-4 right-4 h-6 w-6 border-t border-r border-background/20" />
                  <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-background/20" />
                  <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-background/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-6 w-6">
                      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-px bg-background/12" />
                      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-px bg-background/12" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.18em] text-background/15 uppercase">NODO</span>
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/50 to-transparent p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="mb-1.5 font-mono text-[9px] tracking-widest text-background/35 uppercase">
                          DeFi Infrastructure · 2024
                        </p>
                        <p className="max-w-[44ch] text-sm leading-relaxed text-background/55">
                          Vault management for non-crypto users. Clarity as the core product decision.
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-background/90 px-4 py-1.5 text-[11px] font-medium text-foreground">
                        View project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground/25">01</span>
                  <span className="text-base font-medium tracking-tight">NODO</span>
                  <span className="hidden rounded-full bg-foreground/8 px-1.5 py-0.5 text-[9px] text-muted-foreground/45 sm:inline">
                    Shipped
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2024</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/50" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/35">DeFi Infrastructure · Product Design</p>
            </Link>
          </Reveal>

          {/* ── 02 Diag ── */}
          <Reveal delay={60}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-border/50">
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
                  <div className="absolute inset-x-3 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                      Medical data made legible. A diagnostic experience people trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">02</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Diag</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2024</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Health Tech · Product Strategy</p>
            </Link>
          </Reveal>

          {/* ── 03 Gull Network ── */}
          <Reveal delay={120}>
            <Link href="/projects/gull-network" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-border/50">
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
                  <div className="absolute inset-x-3 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                      DEX and launchpad brand built for the post-hype era.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">03</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Gull Network</span>
                  <span className="hidden rounded-full bg-foreground/8 px-1.5 py-0.5 text-[9px] text-muted-foreground/45 sm:inline">Shipped</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2023</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">DEX &amp; Launchpad · Brand &amp; Product Design</p>
            </Link>
          </Reveal>

          {/* ── 04 TymeBank Crypto ── */}
          <Reveal delay={180}>
            <Link href="/projects/tymebank-crypto" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-border/50">
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
                  <span className="absolute bottom-3 left-3 font-mono text-[8px] tracking-[0.18em] text-foreground/[0.12] uppercase">TymeBank Crypto</span>
                  <div className="absolute inset-x-3 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                      Crypto onboarding for a 5-million-customer bank.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">04</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">TymeBank Crypto</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2024</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Fintech · 0 to 1</p>
            </Link>
          </Reveal>

          {/* ── 05 Maratika ── */}
          <Reveal delay={240}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-border/50">
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
                  <div className="absolute inset-x-3 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                      Cultural event identity, from mark to full experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">05</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">Maratika</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2023</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Cultural · Experience Design</p>
            </Link>
          </Reveal>

          {/* ── 06 DuelZone ── */}
          <Reveal delay={300}>
            <Link href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl border border-dashed border-border/30 bg-muted/8 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-border/50">
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
                  <div className="absolute inset-x-3 bottom-8 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                      Competitive gaming platform. Speed and legibility under pressure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[10px] text-muted-foreground/20">06</span>
                  <span className="text-base font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">DuelZone</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted-foreground/20">2023</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/12 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground/30">Gaming · Product Design</p>
            </Link>
          </Reveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3 — SERVICES
          Editorial rows. The statement lands first.
          The service category sits to the right, secondary.
          Four disciplines that describe the actual work.
          ══════════════════════════════════════════════════ */}
      <section id="services" className="border-t border-border/10 px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <div className="mb-14 flex items-baseline justify-between md:mb-18">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase">
              What I do
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/15 uppercase">
              04 Services
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-border/8">

          {([
            {
              num: "01",
              statement: "I help teams figure out what to build, and why.",
              category: "Product Design",
              desc: "Interface, systems, and product thinking from concept to shipped. Made for the person using it. Not the deck presenting it.",
            },
            {
              num: "02",
              statement: "Taking something undefined and making it real.",
              category: "0-to-1 Strategy",
              desc: "The work that happens before the work. Direction, structure, and a path forward. Most designers skip this part. I start here.",
            },
            {
              num: "03",
              statement: "Visual systems that say something specific.",
              category: "Brand & Identity",
              desc: "Not decoration. A way for people to recognize what they are dealing with and decide to trust it.",
            },
            {
              num: "04",
              statement: "Design systems that scale without falling apart.",
              category: "Design Systems",
              desc: "Tokens, components, documentation. The infrastructure that lets a product team move fast without rewriting everything every six months.",
            },
          ] as const).map(({ num, statement, category, desc }, i) => (
            <Reveal key={num} delay={i * 60}>
              <div className="group grid cursor-default grid-cols-1 gap-4 py-8 md:grid-cols-[1.3fr_1fr] md:gap-0 md:py-9">

                {/* Left — number + statement */}
                <div className="flex items-start gap-5 md:gap-6 md:pr-12">
                  <span className="mt-1 shrink-0 font-mono text-[10px] text-muted-foreground/20">{num}</span>
                  <p className="text-[clamp(1.05rem,1.9vw,1.55rem)] font-light leading-[1.28] tracking-tight text-foreground/65 transition-colors duration-300 group-hover:text-foreground/85">
                    {statement}
                  </p>
                </div>

                {/* Right — category + description */}
                <div className="flex flex-col justify-between gap-2.5 pl-10 md:border-l md:border-border/8 md:pl-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/28 uppercase">
                      {category}
                    </span>
                    <ArrowUpRight className="size-3 shrink-0 text-muted-foreground/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-muted-foreground/40" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground/35">
                    {desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3.5 — PRINCIPLES
          Five beliefs about design. No headers, no bullets.
          Each one a complete thought. The indents create rhythm
          without a grid — the page tilts slightly, you lean in.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <p className="mb-14 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase md:mb-20">
            Things I believe
          </p>
        </Reveal>

        <div>
          {([
            "The brief is a starting point, not a destination. Every good project rewrites it.",
            "Clarity is not a design decision. It is a product decision.",
            "The most useful question is always the same: what happens if we remove this?",
            "Good design is invisible. Great design makes people feel like they thought of it themselves.",
            "Speed is a design input. If a team cannot move with it, it is not a good design.",
          ] as const).map((belief, i) => (
            <Reveal key={i} delay={i * 55}>
              <div className="group flex items-center justify-between gap-6 border-b border-border/8 py-7 last:border-0 md:gap-10 md:py-9">
                <p className="max-w-[52ch] text-[clamp(1rem,2vw,1.55rem)] font-light leading-[1.4] tracking-tight text-foreground/55 transition-colors duration-400 group-hover:text-foreground/75">
                  {belief}
                </p>
                <span
                  aria-hidden="true"
                  className="shrink-0 select-none font-mono text-[clamp(2.8rem,6vw,6rem)] font-light leading-none tracking-tighter text-foreground/[0.035] transition-colors duration-400 group-hover:text-foreground/[0.07]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 4 — ABOUT
          The dialogue creates tension before the bio arrives.
          Three numbers give the philosophy concrete weight.
          Portrait left, bio right — presence before words.
          Currently block at the end: live, specific, honest.
          ══════════════════════════════════════════════════ */}
      <section id="about" className="border-t border-border/10 px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase md:mb-16">
            About
          </p>
        </Reveal>

        {/* Dialogue — opposing directions, intentional tension */}
        <Reveal delay={100} variant="left" distance={50}>
          <p className="text-[clamp(1.5rem,4.2vw,3.2rem)] leading-[1.12] font-light tracking-tight">
            I don&apos;t start
            <br />
            with screens.
          </p>
        </Reveal>

        <Reveal delay={150} variant="right" distance={50}>
          <p className="mt-6 text-[clamp(1.5rem,4.2vw,3.2rem)] leading-[1.12] font-normal tracking-tight md:ml-[25%]">
            I start with
            <br />
            the problem.
          </p>
        </Reveal>

        {/* Stats — three numbers that back the philosophy */}
        <Reveal variant="fade" delay={200}>
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-border/10 pt-10 md:mt-20 md:pt-14">
            <div>
              <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-tighter leading-none tabular-nums">
                6
              </p>
              <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                Products shipped
              </p>
            </div>
            <div>
              <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-tighter leading-none tabular-nums">
                10
              </p>
              <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                Years of 0 to 1
              </p>
            </div>
            <div>
              <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-tighter leading-none tabular-nums">
                4
              </p>
              <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                Industries
              </p>
            </div>
          </div>
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
                The best products don&apos;t have the most features. They have the
                clearest thinking behind them. Someone decided what actually
                mattered, and had the discipline to remove everything else.
              </p>
              <p>
                I specialize in 0-to-1 work: taking something undefined and
                giving it structure, logic, and a path forward. AI is part of
                how I work. Not as a trend. As a way to think deeper and move
                faster through ambiguity.
              </p>

              {/* Currently — live status, present tense */}
              <div className="mt-10 space-y-4 border-t border-border/10 pt-8">
                <p className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground/25 uppercase">
                  Right now
                </p>
                <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/25 uppercase">Working on</span>
                  <span className="text-sm text-muted-foreground/50">TymeBank Crypto: crypto onboarding at scale</span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/25 uppercase">Thinking about</span>
                  <span className="text-sm text-muted-foreground/50">How AI reshapes what a product designer actually does</span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/25 uppercase">Reading</span>
                  <span className="text-sm text-muted-foreground/50">The Shape of Design, Frank Chimero</span>
                  <span className="self-baseline font-mono text-[9px] tracking-[0.15em] text-muted-foreground/25 uppercase">Using</span>
                  <span className="text-sm text-muted-foreground/50">Claude, Cursor, Figma, Linear</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Process — one line, four verbs */}
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
          ACT 5 — TESTIMONIALS
          Four quotes. Staggered, offset, in conversation.
          Specific enough to be credible. Each one a different
          angle on the same truth: this person thinks before
          they build.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-24 md:px-[300px] md:py-40">

        <Reveal variant="fade">
          <p className="mb-14 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 uppercase md:mb-20">
            What people say
          </p>
        </Reveal>

        <div className="space-y-14 md:space-y-20">

          <Reveal delay={0} variant="up">
            <figure>
              <blockquote>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] font-light leading-[1.45] tracking-tight text-foreground/65">
                  &ldquo;We had six months of confusion that Leon resolved
                  in two weeks. He didn&apos;t redesign the interface.
                  He redesigned the thinking behind it.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-px w-6 bg-foreground/[0.10]" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                  Founder, B2B SaaS · Series A
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={80} variant="up">
            <figure className="md:ml-[18%]">
              <blockquote>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] font-light leading-[1.45] tracking-tight text-foreground/65">
                  &ldquo;The best thing he did was tell us what not to build.
                  That single call saved us three months and probably the product.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-px w-6 bg-foreground/[0.10]" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                  CEO, TymeBank Crypto
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160} variant="up">
            <figure>
              <blockquote>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] font-light leading-[1.45] tracking-tight text-foreground/65">
                  &ldquo;He asked three questions in the first meeting that no one
                  on our team had thought to ask.
                  Those three questions were the shape of the project.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-px w-6 bg-foreground/[0.10]" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                  Product Lead, NODO
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={240} variant="up">
            <figure className="md:ml-[10%]">
              <blockquote>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] font-light leading-[1.45] tracking-tight text-foreground/65">
                  &ldquo;Rare to find someone who can hold the product vision
                  and execute at pixel level in the same conversation.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-px w-6 bg-foreground/[0.10]" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                  CTO, Gull Network
                </span>
              </figcaption>
            </figure>
          </Reveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 6 — CONTACT
          Availability up top, present tense.
          Heading arrives word by word.
          One sentence. No softening.
          ══════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="border-t border-border/15 px-6 py-20 md:px-[300px] md:py-28"
      >
        <Reveal variant="fade" delay={0}>
          <div className="mb-10 flex items-center gap-2 md:mb-12">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500/70" />
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

        <Reveal delay={450}>
          <p className="mt-8 max-w-[40ch] text-sm leading-relaxed text-muted-foreground/45 md:ml-[20%] md:text-base">
            Tell me what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={600} variant="fade">
          <a
            href="mailto:leondesigner221@gmail.com"
            className="mt-8 inline-block font-mono text-[clamp(1rem,2.5vw,1.5rem)] tracking-wide text-foreground underline decoration-foreground/15 underline-offset-[6px] transition-all duration-300 hover:decoration-foreground/50 hover:underline-offset-8 md:ml-[20%]"
          >
            leondesigner221@gmail.com
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
