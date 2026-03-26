"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Header() {
  const pathname = usePathname()
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  // GSAP Timeline Registration for the mobile menu reveal
  useGSAP(() => {
    // Initial states for staggered elements
    gsap.set(".mobile-link-inner", { y: "120%", rotate: 4 });
    gsap.set(".mobile-menu-overlay", { clipPath: "circle(0% at 100% 0%)" });

    tl.current = gsap.timeline({ paused: true })
      .to(".mobile-menu-overlay", {
        clipPath: "circle(150% at 100% 0%)",
        duration: 2.2,
        ease: "power2.inOut"
      })
      .to(".mobile-link-inner", {
        y: "0%",
        rotate: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=1.4")
      .to(".mobile-social", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=1.3");
  }, { scope: menuRef });

  // Play/Reverse logic mapped to React state
  useEffect(() => {
    if (isMobileMenuOpen) {
      tl.current?.timeScale(1).play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.timeScale(1).reverse(); // 1.0 reverse speed - identical to the opening pace
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close menu on route transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="pointer-events-none animate-hero-header fixed inset-x-0 top-0 z-[60] mix-blend-difference">
        <div className="flex h-16 items-center justify-between px-6 md:px-12 lg:px-24 2xl:px-[300px]">
          {/* Logo */}
          <Link 
            href="/" 
            className="pointer-events-auto group flex items-center text-xl font-semibold text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="tracking-[-0.04em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:tracking-[0.02em]">
              Leon
            </span>
            <span className="ml-1 h-[4px] w-[4px] -translate-x-2 rounded-full bg-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative px-4 py-2 font-mono text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-white",
                  pathname === link.href ? "text-white" : "text-white/70"
                )}
              >
                {link.name}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
            <a
              href="/cv-an-nguyen-leon-2026.pdf"
              download
              className="ml-3 rounded-full border border-white/25 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.15em] text-white/70 uppercase transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              CV ↓
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="pointer-events-auto md:hidden relative z-[70] flex h-10 w-10 flex-col items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <div className={cn("absolute transition-all duration-300", isMobileMenuOpen ? "translate-y-0 delay-0" : "-translate-y-2 delay-300")}>
              <span className={cn("block h-[1.5px] w-6 bg-white transition-transform duration-300 origin-center", isMobileMenuOpen ? "rotate-45 delay-300" : "rotate-0 delay-0")} />
            </div>
            {/* Middle Line */}
            <div className={cn("absolute transition-all duration-300", isMobileMenuOpen ? "opacity-0 scale-x-0 delay-0" : "opacity-100 scale-x-100 delay-300")}>
              <span className="block h-[1.5px] w-6 bg-white" />
            </div>
            {/* Bottom Line */}
            <div className={cn("absolute transition-all duration-300", isMobileMenuOpen ? "translate-y-0 delay-0" : "translate-y-2 delay-300")}>
              <span className={cn("block h-[1.5px] w-6 bg-white transition-transform duration-300 origin-center", isMobileMenuOpen ? "-rotate-45 delay-300" : "rotate-0 delay-0")} />
            </div>
          </button>
        </div>
      </header>

      {/* Cinematic Mobile Menu Overlay */}
      <div 
        ref={menuRef} 
        className="fixed inset-0 z-[55] md:hidden pointer-events-none"
      >
        <div className="mobile-menu-overlay absolute inset-0 bg-background pointer-events-auto flex flex-col justify-center px-6 pb-20 pt-32">
          
          {/* Gigantic Nav Typographies */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="overflow-hidden py-2 cursor-pointer">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link-inner block text-6xl font-light tracking-tighter text-foreground hover:text-foreground/70 transition-colors"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            
            <div className="overflow-hidden mt-8">
              <a
                href="/cv-an-nguyen-leon-2026.pdf"
                download
                className="mobile-link-inner inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-foreground/70 border border-foreground/20 rounded-full px-6 py-4 hover:border-foreground/50 transition-colors"
              >
                Download CV 
              </a>
            </div>
          </nav>

          {/* Social Links & Utilities */}
          <div className="absolute bottom-12 left-6 right-6 flex items-end justify-between border-t border-foreground/10 pt-6">
            <div className="flex flex-col gap-3">
              {[
                { label: 'LinkedIn', url: '#' }, 
                { label: 'Twitter', url: '#' }, 
                { label: 'Behance', url: '#' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  className="mobile-social opacity-0 translate-y-4 font-mono text-xs uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <div className="mobile-social opacity-0 translate-y-4 pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
