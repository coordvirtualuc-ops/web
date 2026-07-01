"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { MessageCircle, X } from "lucide-react"
import { createWhatsAppLink } from "@/lib/whatsapp"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Timer to display bubble after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowBubble(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Burbuja automática */}
      {showBubble && !isOpen && (
        <div className="pointer-events-auto absolute bottom-20 right-0 md:right-3 flex items-center gap-2.5 bg-[#8c002a] text-[var(--color-cream)] px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 animate-fade-in animate-bounce-subtle z-40 max-w-[260px] md:max-w-xs transition-all duration-300">
          <p className="text-xs sm:text-sm font-semibold leading-snug">
            Te ayudamos a elegir tu programa.
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowBubble(false)
            }}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar sugerencia"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          
          {/* Triangulito de la burbuja */}
          <div className="absolute right-6 -bottom-2 w-0 h-0 border-t-8 border-t-[#8c002a] border-x-8 border-x-transparent" />
        </div>
      )}

      {/* Panel del Chat */}
      {isOpen && (
        <div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Chat de orientación UC"
          className="pointer-events-auto absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[380px] bg-[var(--color-cream)] border border-[var(--color-wine)]/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col z-40 transition-all duration-300 animate-scale-up origin-bottom-right"
        >
          {/* Header del Chat */}
          <div className="bg-[var(--color-wine)] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              {/* Mini Mascota */}
              <div className="w-10 h-10 relative overflow-hidden bg-white/10 rounded-full border border-white/20 p-1 flex items-center justify-center">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Mascota UC"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-black text-sm tracking-wide leading-tight">UC Universidad Continental</h4>
                <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Admisiones y orientación</p>
              </div>
            </div>
            
            {/* Botón Cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cuerpo del Chat / Mensajes */}
          <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto max-h-[320px] md:max-h-[380px]">
            {/* Burbuja del Bot del Búho */}
            <div className="flex gap-3 items-start">
              {/* Avatar Bot Búho */}
              <div className="w-8 h-8 relative overflow-hidden bg-[var(--color-wine)]/5 rounded-full border border-[var(--color-wine)]/10 p-0.5 shrink-0">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Búho UC"
                  width={24}
                  height={24}
                  className="object-contain animate-pulse"
                />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-4 border border-[var(--color-wine)]/5 shadow-sm max-w-[85%]">
                <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed">
                  Te orientamos para elegir el programa y la modalidad que mejor se adapte a tus objetivos.
                </p>
              </div>
            </div>
          </div>

          {/* Botones de Acción (CTAs) */}
          <div className="px-6 pb-6 pt-2 bg-white/50 border-t border-[var(--color-wine)]/5 flex flex-col gap-2.5">
            <a
              href={createWhatsAppLink("Hola, quiero información sobre UC Universidad Continental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[var(--color-wine)] text-white hover:bg-[var(--color-red)] text-center text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/cta"
            >
              <MessageCircle className="h-4 w-4 fill-white stroke-none" />
              <span>Hablar con admisiones</span>
            </a>

            <a
              href={createWhatsAppLink("Hola, quiero iniciar mi proceso de inscripción en UC Universidad Continental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] text-center text-xs sm:text-sm font-bold uppercase tracking-wider border border-[var(--color-wine)]/20 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Quiero iniciar mi inscripción</span>
            </a>

            <a
              href={createWhatsAppLink("Hola, tengo una duda sobre UC Universidad Continental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] text-center text-xs sm:text-sm font-bold uppercase tracking-wider border border-[var(--color-wine)]/20 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Tengo una duda</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false)
                const el = document.getElementById("oferta-academica")
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="w-full py-3 px-4 rounded-xl bg-transparent hover:bg-[var(--color-wine)]/5 text-[var(--color-wine)] text-center text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Ver programas académicos
            </button>
          </div>
        </div>
      )}

      {/* Botón Flotante de la Mascota */}
      <button
        onClick={toggleChat}
        className="pointer-events-auto flex items-center justify-center relative w-16 h-16 rounded-full bg-[var(--color-cream)] border-2 border-[var(--color-wine)]/20 shadow-2xl hover:scale-105 hover:border-[var(--color-red)]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:ring-offset-2 select-none group cursor-pointer z-50"
        aria-label="Chat de orientación UC"
        aria-expanded={isOpen}
      >
        {/* Mascota en el botón flotante */}
        <div className="w-12 h-12 relative overflow-hidden mascot-float">
          <Image
            src="/images/brand/mascota-uc.webp"
            alt="Búho UC"
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>

        {/* Badge de WhatsApp discreto */}
        <div className="absolute bottom-0 right-0 bg-[#25d366] text-white rounded-full p-1 border-2 border-white shadow-md">
          <MessageCircle className="h-3.5 w-3.5 fill-white stroke-none" />
        </div>
      </button>

    </div>
  )
}