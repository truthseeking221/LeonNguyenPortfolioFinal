"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="ml-3 h-5 w-10" />

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="pointer-events-auto ml-3 relative h-5 w-10 shrink-0 cursor-pointer rounded-full border border-white/25 transition-all duration-300 hover:border-white/50"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="absolute top-1 left-1 block h-3 w-3 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(${isDark ? 20 : 0}px)` }}
      />
    </button>
  )
}
