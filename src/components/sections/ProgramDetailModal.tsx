"use client"

import * as React from "react"
import Image from "next/image"
import { X, Clock, BookOpen, GraduationCap, Briefcase, Award, CheckCircle, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { AcademicProgram } from "@/content/programs"

interface ProgramDetailModalProps {
  program: AcademicProgram | null
  isOpen: boolean
  onClose: () => void
}

export function ProgramDetailModal({ program, isOpen, onClose }: ProgramDetailModalProps) {
  // Manejo de la tecla Escape y scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen || !program) return null

  const whatsappUrl = createWhatsAppLink(program.whatsappMessage)

  // Cierre en clic sobre overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Comprobar si un array está confirmado
  const isConfirmedArray = (arr: string[]) => {
    if (!arr || arr.length === 0) return false
    if (arr.length === 1 && arr[0].toLowerCase().includes("por confirmar")) return false
    return true
  }

  const hasPendingData = 
    !isConfirmedArray(program.profile) || 
    program.modality === "Por confirmar" || 
    program.duration === "Por confirmar"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/75 backdrop-blur-md transition-opacity duration-300"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Contenedor Modal Dossier Premium */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row transition-all duration-500 scale-100 border border-[var(--color-wine)]/5">
        
        {/* Botón de Cerrar Flotante */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[var(--color-wine)] hover:text-[var(--color-red)] shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer border border-[var(--color-wine)]/5"
          aria-label="Cerrar detalles"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Columna Izquierda: Tarjeta de Presentación (Fija en desktop) */}
        <div className="relative w-full md:w-[42%] flex flex-col justify-between bg-[var(--color-cream)] border-r border-[var(--color-wine)]/5 overflow-hidden md:min-h-full">
          
          {/* Imagen de fondo */}
          <div className="relative w-full aspect-[16/10] md:aspect-auto md:absolute md:inset-0 z-0">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            {/* Capa de degradado profunda para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine)] via-[var(--color-wine)]/65 to-transparent md:bg-gradient-to-t md:from-[var(--color-wine)]/90 md:via-[var(--color-wine)]/80 md:to-[var(--color-wine)]/40 z-10" />
          </div>

          {/* Información superpuesta (Desktop & Mobile) */}
          <div className="relative z-20 flex flex-col justify-end p-6 sm:p-8 flex-grow text-white space-y-4 pt-16 md:pt-32">
            <div>
              <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-[var(--color-red)] text-white rounded-full mb-3 shadow-sm">
                {program.category}
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-balance">
                {program.title}
              </h2>
            </div>

            {/* Metadatos Rápidos */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-[var(--color-cream)] opacity-80 shrink-0" />
                <div>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-white/50">Modalidad</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">{program.modality}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-[var(--color-cream)] opacity-80 shrink-0" />
                <div>
                  <span className="block text-[8px] font-bold uppercase tracking-wider text-white/50">Duración</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">{program.duration}</span>
                </div>
              </div>
            </div>

            {/* CTA Primario Sticky en Columna */}
            <div className="pt-4 hidden md:block">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full bg-[var(--color-red)] text-white hover:bg-white hover:text-[var(--color-wine)] border-none rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer h-12 text-sm transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4.5 w-4.5 shrink-0" />
                Pedir información
              </Button>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Contenido Detallado (Scroll independiente) */}
        <div className="w-full md:w-[58%] p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-full scrollbar-none hide-scrollbar bg-white">
          <div className="space-y-8">
            
            {/* 1. Por qué elegir este programa */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-red)]">
                Por qué elegir este programa
              </h3>
              <p className="text-sm text-[var(--color-text)]/85 leading-relaxed font-sans">
                {program.description}
              </p>
              {program.objective && (
                <p className="text-sm text-[var(--color-text)]/75 leading-relaxed italic pl-4 border-l-2 border-[var(--color-red)]/40 bg-[var(--color-cream)]/30 py-2.5 pr-2.5 rounded-r-xl">
                  “{program.objective}”
                </p>
              )}
            </div>

            {/* 2. Qué desarrollarás (Highlights) */}
            {program.highlights && program.highlights.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-red)] flex items-center gap-2">
                  <Award className="h-4.5 w-4.5 text-[var(--color-wine)] shrink-0" />
                  Qué desarrollarás
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text)]/80 leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-[var(--color-red)] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Campo Laboral */}
            {program.careerField && program.careerField.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-red)] flex items-center gap-2">
                  <Briefcase className="h-4.5 w-4.5 text-[var(--color-wine)] shrink-0" />
                  Campo laboral
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.careerField.map((field, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1.5 text-xs font-semibold text-[var(--color-text)]/80 bg-[var(--color-cream)] border border-[var(--color-wine)]/10 rounded-xl"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Diferenciadores UC */}
            {program.differentiators && program.differentiators.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-[var(--color-wine)]/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-red)]">
                  Diferenciadores UC
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.differentiators.map((diff, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-wine)] bg-[var(--color-wine)]/5 rounded"
                    >
                      {diff}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Alerta de datos pendientes */}
            {hasPendingData && (
              <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  Algunos detalles específicos de este programa están en proceso de actualización y serán confirmados a la brevedad por el departamento de admisiones.
                </p>
              </div>
            )}
          </div>

          {/* 5. Bloque de Acompañamiento Orientado */}
          <div className="mt-10 pt-6 border-t border-[var(--color-wine)]/10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[var(--color-cream)]/40 p-5 rounded-2xl border border-[var(--color-wine)]/5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 mascot-float select-none">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Guía UC"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-bold text-[var(--color-wine)]">
                  Orientación académica
                </h5>
                <p className="text-[11px] text-[var(--color-text)]/70 leading-normal max-w-sm">
                  Si tienes dudas sobre modalidad, requisitos o duración, admisiones puede orientarte.
                </p>
              </div>
            </div>
            
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="flex items-center justify-center gap-2 px-6 shadow-md hover:shadow-lg bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] rounded-xl h-11 text-xs shrink-0 cursor-pointer w-full sm:w-auto font-bold"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Pedir información
            </Button>
          </div>

        </div>

      </div>
    </div>
  )
}
