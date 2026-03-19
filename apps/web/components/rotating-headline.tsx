"use client"

import * as React from "react"

const PHRASES: [string, string][] = [
  ["complexity", "clarity"],
  ["friction", "flow"],
  ["noise", "signal"],
  ["chaos", "systems"],
]

const HOLD_MS = 2800

export function RotatingHeadline({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length)
    }, HOLD_MS)
    return () => clearInterval(interval)
  }, [])

  const line1 = PHRASES.map(([w]) => `Turning ${w}`)
  const line2 = PHRASES.map(([, w]) => `into ${w}.`)

  return (
    <span className={className}>
      <TextStrip words={line1} activeIndex={index} delay={0} />
      <TextStrip words={line2} activeIndex={index} delay={60} />
    </span>
  )
}

/* ─────────────────────────────────────────────────────
   TextStrip — The slot machine.

   Only 2 items exist at a time: [current, next].
   Container height = exactly 1 measured line.
   overflow: hidden = the mask.

   To cycle:
   1. Slide the strip up by 1 lineH (CSS transition)
   2. After transition ends: swap content + reset
      translateY to 0 with transition: none.
      Visually identical — the swap is invisible.
   ───────────────────────────────────────────────────── */

function TextStrip({
  words,
  activeIndex,
  delay = 0,
}: {
  words: string[]
  activeIndex: number
  delay?: number
}) {
  const slotRef = React.useRef<HTMLSpanElement>(null)
  const [lineH, setLineH] = React.useState(0)
  const [display, setDisplay] = React.useState(activeIndex)
  const [sliding, setSliding] = React.useState(false)

  // Measure one line's rendered height
  React.useEffect(() => {
    function measure() {
      if (slotRef.current) setLineH(slotRef.current.offsetHeight)
    }
    measure()
    window.addEventListener("resize", measure, { passive: true })
    return () => window.removeEventListener("resize", measure)
  }, [])

  // activeIndex changed → trigger the slide
  React.useEffect(() => {
    if (activeIndex === display) return
    setSliding(true)
  }, [activeIndex, display])

  // After slide completes → swap content & reset position (invisible)
  React.useEffect(() => {
    if (!sliding) return
    const t = setTimeout(() => {
      setDisplay(activeIndex)
      setSliding(false)
    }, 600 + delay)
    return () => clearTimeout(t)
  }, [sliding, activeIndex, delay])

  const n = words.length
  const currentWord = words[display % n]!
  const nextWord = words[activeIndex % n]!

  return (
    <span
      className="block overflow-hidden"
      style={{ height: lineH > 0 ? lineH : undefined }}
    >
      <span
        className="block will-change-transform"
        style={{
          transition: sliding
            ? `transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
            : "none",
          transform:
            sliding && lineH > 0
              ? `translateY(-${lineH}px)`
              : "translateY(0)",
        }}
      >
        <span ref={slotRef} className="block">
          {currentWord}
        </span>
        <span className="block">{nextWord}</span>
      </span>
    </span>
  )
}
