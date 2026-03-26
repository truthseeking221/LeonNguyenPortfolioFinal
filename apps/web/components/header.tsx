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
        <Link 
          href="/" 
          className="pointer-events-auto group flex items-center text-xl font-semibold tracking-[-0.04em] text-white"
        >
          <span>L</span>
          <span className="flex w-0 items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2" style={{ transitionDelay: '0ms' }}>
            <span className="h-[1.5px] w-full origin-left scale-x-0 bg-white/50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ transitionDelay: '50ms' }} />
          </span>
          <span>e</span>
          <span className="flex w-0 items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2" style={{ transitionDelay: '50ms' }}>
            <span className="h-[1.5px] w-full origin-left scale-x-0 bg-white/50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ transitionDelay: '100ms' }} />
          </span>
          <span>o</span>
          <span className="flex w-0 items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2" style={{ transitionDelay: '100ms' }}>
            <span className="h-[1.5px] w-full origin-left scale-x-0 bg-white/50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ transitionDelay: '150ms' }} />
          </span>
          <span>n</span>
          <span className="flex w-0 items-center justify-end overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2.5" style={{ transitionDelay: '150ms' }}>
            <span className="h-[4px] w-[4px] scale-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" style={{ transitionDelay: '200ms' }} />
          </span>
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
