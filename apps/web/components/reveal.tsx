"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

type Variant = "up" | "fade" | "line" | "left" | "right" | "scale" | "blur-up"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: Variant
  distance?: number
  threshold?: number
  once?: boolean
}

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)"

function getHidden(variant: Variant, distance: number): React.CSSProperties {
  switch (variant) {
    case "up":
      return { opacity: 0, transform: `translateY(${distance}px)` }
    case "left":
      return { opacity: 0, transform: `translateX(${-distance}px)` }
    case "right":
      return { opacity: 0, transform: `translateX(${distance}px)` }
    case "scale":
      return { opacity: 0, transform: "scale(0.91)" }
    case "blur-up":
      return { opacity: 0, transform: `translateY(${distance}px)`, filter: "blur(12px)" }
    case "line":
      return { opacity: 0, transform: "scaleX(0)", transformOrigin: "left" }
    case "fade":
    default:
      return { opacity: 0 }
  }
}

function getVisible(variant: Variant): React.CSSProperties {
  switch (variant) {
    case "up":
    case "left":
    case "right":
      return { opacity: 1, transform: "translate(0)" }
    case "scale":
      return { opacity: 1, transform: "scale(1)" }
    case "blur-up":
      return { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
    case "line":
      return { opacity: 1, transform: "scaleX(1)" }
    case "fade":
    default:
      return { opacity: 1 }
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  distance = 32,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const needsFilter = variant === "blur-up"

  const baseStyle: React.CSSProperties = {
    transitionProperty: needsFilter
      ? "opacity, transform, filter"
      : "opacity, transform",
    transitionDuration: variant === "scale" ? "1s" : "0.8s",
    transitionTimingFunction: EASING,
    transitionDelay: `${delay}ms`,
    willChange: "transform, opacity",
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...baseStyle,
        ...(isVisible ? getVisible(variant) : getHidden(variant, distance)),
      }}
    >
      {children}
    </div>
  )
}
