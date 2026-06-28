"use client"
import * as React from "react"
import { useRef, useEffect, useState } from "react"

export function AutoScrollCarousel({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const wasDraggingRef = useRef(false)
  const dragDistanceRef = useRef(0)
  
  const animationRef = useRef<number | undefined>(undefined)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const scroll = () => {
      // Solo hace auto-scroll si no está pausado y no se está arrastrando con el mouse
      if (!isPaused && !isDragging && el) {
        el.scrollLeft += 0.5

        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [isPaused, isDragging])

  const pause = () => {
    setIsPaused(true)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
  }

  const resumeLater = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 2000)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    setIsDragging(true)
    pause()
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftRef.current = el.scrollLeft
    wasDraggingRef.current = false
    dragDistanceRef.current = 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    
    const x = e.pageX - el.offsetLeft
    const walk = (x - startXRef.current) * 1.5
    
    // Acumulamos la distancia para determinar si realmente fue un arrastre o solo un click
    dragDistanceRef.current += Math.abs(x - startXRef.current - (el.scrollLeft - scrollLeftRef.current))
    if (dragDistanceRef.current > 10) {
      wasDraggingRef.current = true
    }
    
    el.scrollLeft = scrollLeftRef.current - walk
  }

  const onMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      resumeLater()
    }
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
    }
    resumeLater()
  }

  const onClickCapture = (e: React.MouseEvent) => {
    // Si el usuario estaba arrastrando, prevenimos que se active el click del enlace interno
    if (wasDraggingRef.current) {
      e.preventDefault()
      e.stopPropagation()
      wasDraggingRef.current = false
    }
  }

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-auto snap-x snap-mandatory hide-scrollbar select-none cursor-grab active:cursor-grabbing ${
        isDragging ? "cursor-grabbing select-none" : ""
      } ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onClickCapture={onClickCapture}
      onTouchStart={pause}
      onTouchEnd={resumeLater}
      onFocus={pause}
      onBlur={resumeLater}
    >
      {children}
    </div>
  )
}
