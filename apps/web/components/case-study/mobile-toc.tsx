"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CustomEase } from "gsap/all"
import { useLenis } from "lenis/react"
import {
  PROJECTS,
  formatProjectPosition,
  getCaseStudyNavigation,
} from "./projects"

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase)
  CustomEase.create("sleek", "M0,0 C0.16,1 0.3,1 1,1")
}

export interface TOCItem {
  id: string
  label: string
}

export function MobileToC({
  items,
  currentProject,
}: {
  items: TOCItem[]
  currentProject: string
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const lenis = useLenis()

  const containerRef = React.useRef<HTMLDivElement>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const sheetRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const {
    currentIndex,
    currentProject: activeProject,
    prevProject,
    nextProject,
    totalProjects,
  } = getCaseStudyNavigation(currentProject)

  React.useEffect(() => {
    const sectionEls = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sectionEls.length === 0) {
      return
    }

    let ticking = false

    function update() {
      const trigger = window.scrollY + window.innerHeight * 0.35

      let foundIndex = 0
      for (let index = sectionEls.length - 1; index >= 0; index--) {
        const element = sectionEls[index]!
        if (trigger >= element.offsetTop) {
          foundIndex = index
          break
        }
      }

      setActiveIndex(foundIndex)
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  React.useEffect(() => {
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      lenis?.start()
    }
  }, [lenis])

  const { contextSafe } = useGSAP({ scope: containerRef })

  const lockBackgroundScroll = React.useCallback(() => {
    lenis?.stop()
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }, [lenis])

  const unlockBackgroundScroll = React.useCallback(() => {
    document.documentElement.style.overflow = ""
    document.body.style.overflow = ""
    lenis?.start()
  }, [lenis])

  const closeMenuInstant = React.useCallback(() => {
    setIsOpen(false)
    unlockBackgroundScroll()

    if (overlayRef.current) {
      gsap.killTweensOf(overlayRef.current)
      gsap.set(overlayRef.current, { autoAlpha: 0, visibility: "hidden" })
    }

    if (sheetRef.current) {
      gsap.killTweensOf(sheetRef.current)
      gsap.set(sheetRef.current, { y: 24, opacity: 0 })
    }
  }, [unlockBackgroundScroll])

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenuInstant()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [closeMenuInstant, isOpen])

  const toggleMenu = React.useCallback(() => {
    contextSafe(() => {
      if (!isOpen) {
        setIsOpen(true)
        lockBackgroundScroll()

        gsap.set(overlayRef.current, { visibility: "visible" })

        const tl = gsap.timeline()
        tl.to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.35,
          ease: "power2.out",
        }, 0)
          .fromTo(
            sheetRef.current,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "sleek",
            },
            0
          )
          .fromTo(
            ".toc-mobile-group",
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.05,
              ease: "sleek",
            },
            0.08
          )
          .fromTo(
            ".toc-mobile-item",
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.025,
              ease: "power2.out",
            },
            0.16
          )
      } else {
        const tl = gsap.timeline({
          onComplete: closeMenuInstant,
        })

        tl.to(".toc-mobile-item", {
          y: -8,
          opacity: 0,
          duration: 0.18,
          stagger: 0.015,
          ease: "power2.in",
        }, 0)
          .to(".toc-mobile-group", {
            y: 8,
            opacity: 0,
            duration: 0.2,
            stagger: 0.02,
            ease: "power2.in",
          }, 0.03)
          .to(sheetRef.current, {
            y: 24,
            opacity: 0,
            duration: 0.25,
            ease: "power2.inOut",
          }, 0.06)
          .to(overlayRef.current, {
            autoAlpha: 0,
            duration: 0.25,
            ease: "power2.inOut",
          }, 0.08)
      }
    })()
  }, [closeMenuInstant, contextSafe, isOpen, lockBackgroundScroll])

  const positionLabel = `${formatProjectPosition(currentIndex)} / ${formatProjectPosition(
    totalProjects - 1
  )}`
  const activeLabel = items[activeIndex]?.label || "Overview"

  return (
    <div ref={containerRef} className="xl:hidden">
      <div
        ref={overlayRef}
        className="invisible fixed inset-0 z-[65] bg-black/30 opacity-0"
        onClick={toggleMenu}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />

        <div
          ref={sheetRef}
          id="case-study-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Case study navigation"
          className="absolute inset-x-0 bottom-0 mx-auto flex max-h-[80svh] w-full max-w-lg flex-col overflow-hidden rounded-t-[26px] border border-border/20 bg-background px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 shadow-[0_-24px_80px_rgba(0,0,0,0.18)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-foreground/10" />

          <div
            data-lenis-prevent
            className="scrollbar-hide min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-1 [touch-action:pan-y]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="toc-mobile-group border-b border-border/10 pb-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                    Project {positionLabel}
                  </p>
                  <h2 className="mt-2 text-[1.9rem] leading-none font-medium tracking-tight text-foreground">
                    {activeProject.title}
                  </h2>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={prevProject.href}
                    onClick={closeMenuInstant}
                    className="toc-mobile-item inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/15 text-muted-foreground/55 transition-colors hover:bg-foreground/[0.03] hover:text-foreground"
                    aria-label={`Previous project: ${prevProject.title}`}
                  >
                    <ArrowLeft className="size-4" />
                  </Link>

                  <Link
                    href={nextProject.href}
                    onClick={closeMenuInstant}
                    className="toc-mobile-item inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/15 text-muted-foreground/55 transition-colors hover:bg-foreground/[0.03] hover:text-foreground"
                    aria-label={`Next project: ${nextProject.title}`}
                  >
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-muted-foreground/55">
                {activeProject.subtitle}
              </p>
            </div>

            <div className="toc-mobile-group mt-5">
              <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                Jump to Section
              </p>

              <ul className="mt-3 space-y-1.5">
                {items.map((item, index) => {
                  const isActive = index === activeIndex

                  return (
                    <li key={item.id} className="toc-mobile-item">
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => {
                          event.preventDefault()
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({ behavior: "smooth" })
                          toggleMenu()
                        }}
                        className={cnSectionRow(isActive)}
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/30 uppercase tabular-nums">
                            {formatProjectPosition(index)}
                          </span>
                          <span className="text-[15px] font-medium tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground/55" />
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="toc-mobile-group mt-6 border-t border-border/10 pb-24 pt-5">
              <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                Browse Projects
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {PROJECTS.map((project, index) => {
                  const isActive = project.id === currentProject

                  return (
                    <Link
                      key={project.id}
                      href={project.href}
                      onClick={closeMenuInstant}
                      aria-current={isActive ? "page" : undefined}
                      className={cnProjectRow(isActive)}
                    >
                      <div className="min-w-0">
                        <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/30 uppercase tabular-nums">
                          {formatProjectPosition(index)}
                        </span>
                        <p className="mt-1 truncate text-[13px] font-medium tracking-tight text-foreground/85">
                          {project.title}
                        </p>
                      </div>
                      {isActive && (
                        <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/35 uppercase">
                          Current
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.5rem))] left-1/2 z-[66] -translate-x-1/2">
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="case-study-mobile-nav"
          className={`flex items-center gap-2.5 rounded-full border border-border/20 px-4 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-500 hover:border-border/40 active:scale-95 ${
            isOpen ? "bg-foreground text-background" : "bg-background/82 text-foreground"
          }`}
        >
          {isOpen ? (
            <div className="font-medium text-[11px] tracking-[0.18em] uppercase">
              Close
            </div>
          ) : (
            <>
              <div className="relative flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-foreground/20">
                <div className="block h-2 w-2 animate-ping rounded-full bg-foreground/50" />
                <div className="absolute h-2 w-2 rounded-full bg-foreground" />
              </div>
              <div className="flex flex-col items-start translate-y-px">
                <span className="mb-[2px] font-mono text-[9px] leading-none text-muted-foreground/60 uppercase tracking-[0.18em]">
                  ToC · {positionLabel}
                </span>
                <span className="text-[11px] font-medium leading-none tracking-tight">
                  {activeLabel}
                </span>
              </div>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function cnProjectRow(isActive: boolean) {
  return [
    "flex min-h-[72px] items-start justify-between gap-3 rounded-[16px] border px-3.5 py-3 text-left transition-colors",
    isActive
      ? "border-border/10 bg-foreground/[0.04]"
      : "border-border/15 hover:bg-foreground/[0.03]",
  ].join(" ")
}

function cnSectionRow(isActive: boolean) {
  return [
    "flex items-center justify-between gap-3 rounded-[16px] border px-4 py-2.5 transition-colors",
    isActive
      ? "border-border/10 bg-foreground/[0.04] text-foreground"
      : "border-border/15 text-muted-foreground/70 hover:bg-foreground/[0.03] hover:text-foreground/85",
  ].join(" ")
}
