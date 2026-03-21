import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { ScrollFloat, SplitReveal } from "@/components/scroll-effects"

export const metadata: Metadata = {
  title: "About — Leon",
  description:
    "Product designer. Buddhist practitioner. Searching for what clarity means through design, philosophy, and the open road.",
}

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const CHAPTERS = [
  {
    year: "2019",
    conviction: "Design is not decoration",
    context:
      "Started in visual design. Learned quickly that beauty and clarity are different disciplines. Chose clarity.",
  },
  {
    year: "2020",
    conviction: "The best feature is the one you remove",
    context:
      "First 0-to-1 product. Built too much. Every feature is a promise you have to keep. Started subtracting.",
  },
  {
    year: "2021",
    conviction: "Systems outlive screens",
    context:
      "Screens get redesigned. Systems get inherited. Started thinking in patterns, tokens, and rules instead of mockups.",
  },
  {
    year: "2022",
    conviction: "Speed is a design material",
    context:
      "Joined a fintech serving millions. A design system that slows down the team is overhead, not design.",
  },
  {
    year: "2023",
    conviction: "The user\u2019s confusion is always the product\u2019s fault",
    context:
      "Shipped crypto onboarding to people who don\u2019t think in blockchain. The product was complex. The experience could not be.",
  },
  {
    year: "2024",
    conviction: "What you remove is the design",
    context:
      "Stopped treating clarity as a quality of good work. Started treating it as the work itself.",
  },
] as const

const TOOLS = [
  { name: "Figma", why: "Where ideas become testable" },
  { name: "Claude", why: "Where ambiguity becomes structure" },
  { name: "Cursor", why: "Where design becomes real" },
  { name: "Linear", why: "Where intention becomes momentum" },
] as const

const READING = [
  { title: "The Heart of the Buddha\u2019s Teaching", author: "Thich Nhat Hanh" },
  { title: "The Shape of Design", author: "Frank Chimero" },
  { title: "Thinking in Systems", author: "Donella Meadows" },
] as const

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── Blueprint grid overlay ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-y-0 left-[8%] w-px bg-foreground/[0.03]" />
        <div className="absolute inset-y-0 left-[42%] w-px bg-foreground/[0.025] hidden md:block" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-foreground/[0.025] hidden md:block" />
      </div>


      {/* ══════════════════════════════════════════════════
          ACT 1 — THE OPENING
          Full viewport. Not a greeting. A position.
          "Stillness" signals the Buddhist lens from the
          first breath. The supporting line grounds it:
          this is a designer who is also searching.
          ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 md:px-[300px]">
        <ScrollFloat speed={0.12}>
          <div className="animate-hero-label mb-8 flex items-center gap-3">
            <div className="h-px w-8 bg-foreground/[0.12]" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase">
              Somewhere between stillness &amp; making
            </span>
          </div>

          <h1 className="animate-hero-name max-w-[18ch] text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] font-light tracking-tighter">
            Before there is a screen, there is stillness.
          </h1>

          <p className="animate-hero-tagline mt-8 max-w-[36ch] text-base leading-relaxed text-muted-foreground/50">
            I design products for a living. But what I&apos;m really
            searching for is what clarity means. Where it comes from.
            And why most things are built without it.
          </p>
        </ScrollFloat>

        {/* Scroll hint */}
        <div className="animate-hero-cta absolute bottom-12 left-6 md:left-[300px]">
          <div className="flex items-center gap-3">
            <div className="h-8 w-px origin-top bg-foreground/10 animate-breathe" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/20 uppercase">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 2 — THE PERSON
          Four paragraphs. Four lenses.
          Identity. Philosophy. Body. Craft.
          No em-dashes. Short sentences earn the pauses.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] lg:gap-24">

          {/* Portrait */}
          <Reveal variant="scale" delay={0}>
            <ScrollFloat speed={0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-border/15 bg-foreground/[0.03]">
                <div className="aspect-[4/5]">
                  <div className="absolute top-4 left-4 h-5 w-5 border-t border-l border-foreground/[0.08]" />
                  <div className="absolute top-4 right-4 h-5 w-5 border-t border-r border-foreground/[0.08]" />
                  <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-foreground/[0.08]" />
                  <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-foreground/[0.08]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] tracking-widest text-foreground/[0.10] uppercase">
                      Leon
                    </span>
                  </div>
                </div>
              </div>
            </ScrollFloat>
          </Reveal>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="mb-6 font-mono text-[9px] tracking-[0.25em] text-muted-foreground/40 uppercase">
                Beyond the work
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-5 text-[15px] leading-[1.75] text-foreground/65 md:text-base">
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
            </Reveal>

            <Reveal delay={300} variant="fade">
              <div className="mt-10 flex items-center gap-3">
                <div className="h-px flex-1 bg-foreground/[0.06]" />
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/25 uppercase">
                  Ask &middot; Reduce &middot; Shape &middot; Ship
                </span>
                <div className="h-px flex-1 bg-foreground/[0.06]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 3 — CHAPTERS
          Not a timeline. Not a résumé. A sequence of
          convictions learned through work. Each year
          taught one thing clearly. The rest was noise.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">
        <Reveal variant="fade">
          <p className="mb-16 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-20">
            Chapters, not r&eacute;sum&eacute;
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ScrollFloat speed={0.06}>
            <p className="mb-16 max-w-[44ch] text-[clamp(1.2rem,2.5vw,1.8rem)] leading-[1.35] font-light tracking-tight text-foreground/80 md:mb-24">
              Every year teaches one thing clearly.
              <br />
              The rest is noise.
            </p>
          </ScrollFloat>
        </Reveal>

        <div>
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.year} delay={i * 60}>
              <div className="group relative border-b border-border/8 py-10 last:border-0 md:py-14">
                <div className="flex items-start gap-8 md:gap-16">
                  {/* Year — ghost, enormous */}
                  <ScrollFloat speed={0.03}>
                    <span
                      aria-hidden="true"
                      className="shrink-0 select-none font-mono text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-none tracking-tighter text-foreground/[0.05] transition-colors duration-500 group-hover:text-foreground/[0.12]"
                    >
                      {ch.year}
                    </span>
                  </ScrollFloat>

                  <div className="flex-1 pt-1">
                    {/* Conviction */}
                    <p className="text-[clamp(1.05rem,2vw,1.4rem)] leading-[1.35] tracking-tight text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
                      &ldquo;{ch.conviction}&rdquo;
                    </p>

                    {/* Context — slides in on hover (desktop), visible on mobile */}
                    <div className="mt-3 overflow-hidden transition-all duration-500 md:mt-0 md:max-h-0 md:opacity-0 md:group-hover:mt-4 md:group-hover:max-h-32 md:group-hover:opacity-100">
                      <p className="max-w-[50ch] text-sm leading-relaxed text-muted-foreground/50">
                        {ch.context}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MANIFESTO INTERLUDE
          Full bleed black. Buddhist philosophy stated as
          a design truth. Reads both ways: as a meditation
          on form, and as a conviction about craft.
          ══════════════════════════════════════════════════ */}
      <Reveal variant="fade">
        <div className="relative w-full overflow-hidden bg-foreground">
          <div className="flex flex-col items-center justify-center px-6 py-24 md:py-40">
            <ScrollFloat speed={0.08}>
              <p className="max-w-[20ch] text-center text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.2] tracking-tight text-background/90">
                Emptiness is not absence.
              </p>
            </ScrollFloat>
            <ScrollFloat speed={-0.04}>
              <p className="mt-4 max-w-[28ch] text-center text-[clamp(1.1rem,2.5vw,1.8rem)] font-light leading-[1.3] tracking-tight text-background/40">
                It is the space where meaning becomes possible.
              </p>
            </ScrollFloat>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════
          ACT 4 — THE STUDIO
          What's happening now. The practical ground
          after the philosophical altitude. Four items
          on the left: work, thought, obsession, road.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">
        <Reveal variant="fade">
          <p className="mb-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-16">
            The studio, right now
          </p>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">

          {/* Currently */}
          <Reveal delay={0}>
            <div className="space-y-8">
              <div>
                <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Working on
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  Crypto onboarding at TymeBank. Making blockchain invisible to
                  five&nbsp;million people who should never have to think about
                  gas fees.
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Thinking about
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  What Buddhist philosophy and product design share: both are
                  practices of seeing things as they are, not as you wish they
                  were.
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Obsessed with
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  The moment a complex product suddenly feels inevitable. That
                  breath of recognition. I reverse-engineer it.
                </p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Last drive
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  Coastal roads, no destination. Four hours of engine noise and
                  whatever the silence surfaces.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Tools + Reading */}
          <div>
            <Reveal delay={100}>
              <div className="mb-12">
                <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Tools
                </p>
                <div className="space-y-4">
                  {TOOLS.map((tool) => (
                    <div
                      key={tool.name}
                      className="group flex items-baseline justify-between border-b border-border/6 pb-4 last:border-0"
                    >
                      <span className="text-sm font-medium tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
                        {tool.name}
                      </span>
                      <span className="text-xs text-muted-foreground/35 transition-colors group-hover:text-muted-foreground/55">
                        {tool.why}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <p className="mb-6 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/40 uppercase">
                  Reading
                </p>
                <div className="space-y-4">
                  {READING.map((book) => (
                    <div
                      key={book.title}
                      className="flex items-baseline justify-between border-b border-border/6 pb-4 last:border-0"
                    >
                      <span className="text-sm italic text-foreground/70">
                        {book.title}
                      </span>
                      <span className="text-xs text-muted-foreground/35">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 5 — BELIEFS
          Three convictions. The first is about craft.
          The second echoes Buddhist impermanence.
          The third reframes clarity as practice, not
          achievement. Alternating parallax breathes.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/10 px-6 py-20 md:px-[300px] md:py-32">
        <Reveal variant="fade">
          <p className="mb-16 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase md:mb-20">
            Things I believe
          </p>
        </Reveal>

        <div className="space-y-16 md:space-y-24">
          <Reveal delay={0}>
            <ScrollFloat speed={0.06}>
              <p className="max-w-[22ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/90">
                Every pixel is a decision.
              </p>
              <p className="mt-2 max-w-[22ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/35">
                Every decision is a position.
              </p>
            </ScrollFloat>
          </Reveal>

          <Reveal delay={0}>
            <ScrollFloat speed={-0.04}>
              <p className="max-w-[26ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/90">
                The best interface dissolves.
              </p>
              <p className="mt-2 max-w-[26ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/35">
                Like everything worth making.
              </p>
            </ScrollFloat>
          </Reveal>

          <Reveal delay={0}>
            <ScrollFloat speed={0.05}>
              <p className="max-w-[28ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/90">
                Clarity is not a destination.
              </p>
              <p className="mt-2 max-w-[28ch] text-[clamp(1.5rem,4vw,3.5rem)] leading-[1.1] font-light tracking-tight text-foreground/35">
                It is a daily practice.
              </p>
            </ScrollFloat>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ACT 6 — THE CLOSING
          The page earned this moment. Break the fourth wall.
          "Practice, not a transaction" echoes the Buddhist
          thread. The CTA selects for the right people.
          ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/15 px-6 py-20 md:px-[300px] md:py-32">
        <Reveal variant="fade" delay={0}>
          <div className="mb-10 flex items-center gap-2 md:mb-12">
            <div className="h-1.5 w-1.5 animate-breathe rounded-full bg-foreground/40" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/30 uppercase">
              You&apos;ve read this far
            </span>
          </div>
        </Reveal>

        <ScrollFloat speed={0.08}>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.08] font-light tracking-tight">
            <SplitReveal
              text={"That says something\nabout how you think."}
              stagger={90}
              delay={0}
            />
          </h2>
        </ScrollFloat>

        <Reveal delay={400}>
          <p className="mt-8 max-w-[40ch] text-base leading-relaxed text-muted-foreground/55">
            I work best with people who see making as a practice, not a
            transaction. If that resonates, let&apos;s talk.
          </p>
        </Reveal>

        <ScrollFloat speed={-0.04}>
          <Reveal delay={550} variant="fade">
            <a
              href="mailto:leondesigner221@gmail.com"
              className="mt-8 inline-flex items-center gap-3 font-mono text-[clamp(1rem,2.5vw,1.5rem)] tracking-wide text-foreground underline decoration-foreground/20 underline-offset-[6px] transition-all duration-300 hover:decoration-foreground/60 hover:underline-offset-8"
            >
              leondesigner221@gmail.com
              <ArrowUpRight className="size-5 text-foreground/30" />
            </a>
          </Reveal>
        </ScrollFloat>
      </section>

      {/* ── Footer ── */}
      <Reveal variant="fade" delay={0} threshold={0.5}>
        <footer className="border-t border-border/10 px-6 py-8 md:px-[300px]">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-[10px] text-muted-foreground/30 transition-colors hover:text-muted-foreground/50"
            >
              <ArrowLeft className="size-3" />
              Back to work
            </Link>
            <span className="text-[10px] text-muted-foreground/20">
              &copy; 2026 Leon
            </span>
          </div>
        </footer>
      </Reveal>

    </main>
  )
}
