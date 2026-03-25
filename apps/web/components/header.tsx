"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const pathname = usePathname()
  const isAbout = pathname === "/about"

  return (
    <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="flex h-16 items-center justify-between px-6 md:px-[300px]">
        <Link href="/" className="pointer-events-auto text-xl font-semibold tracking-[-0.04em] text-white">
          Leon
        </Link>
        <nav className="pointer-events-auto flex items-center gap-1">
          <Link
            href="/#work"
            className="group relative px-4 py-2 font-mono text-xs font-medium tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 hover:text-white"
          >
            Work
            <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            href="/about"
            className={cn(
              "group relative px-4 py-2 font-mono text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white",
              isAbout ? "text-white" : "text-white/70"
            )}
          >
            About
            <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            href="/#contact"
            className="group relative px-4 py-2 font-mono text-xs font-medium tracking-[0.15em] text-white/70 uppercase transition-colors duration-300 hover:text-white"
          >
            Contact
            <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
          <a
            href="/cv-an-nguyen-leon-2026.pdf"
            download
            className="ml-3 rounded-full border border-white/25 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.15em] text-white/70 uppercase transition-all duration-300 hover:border-white/60 hover:text-white"
          >
            CV ↓
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
