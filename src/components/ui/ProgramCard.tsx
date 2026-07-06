"use client"

import * as React from "react"
import Image from "next/image"
import { Clock, BookOpen, MessageCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { AcademicProgram } from "@/content/programs"

interface ProgramCardProps {
  program: AcademicProgram
  onOpenDetails: (program: AcademicProgram) => void
}

export function ProgramCard({ program, onOpenDetails }: ProgramCardProps) {
  const whatsappUrl = createWhatsAppLink(program.whatsappMessage)

  return (
    <div className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[var(--color-wine)]/5 shadow-[0_4px_20px_-4px_rgba(85,15,42,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(85,15,42,0.12)] hover:-translate-y-2 transition-all duration-500 min-w-0 h-full">
      
      {/* Contenedor de Imagen Protagonista */}
      <div className="relative aspect-[16/10] w-full bg-[var(--color-cream)] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradiente de cobertura suave en imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Badge de Categoría Premium */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[var(--color-wine)] rounded-full shadow-sm">
            {program.category}
          </span>
        </div>
      </div>

      {/* Cuerpo de la Card */}
      <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
        <div className="space-y-4">
          
          {/* Título de Carrera */}
          <h3 className="text-xl sm:text-2xl font-black text-[var(--color-text)] tracking-tight leading-snug group-hover:text-[var(--color-red)] transition-colors line-clamp-2">
            {program.title}
          </h3>

          {/* Ficha técnica rápida (Pills discretas) */}
          <div className="flex flex-wrap gap-2 pb-1.5 border-b border-[var(--color-wine)]/5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-cream)] border border-[var(--color-wine)]/10 text-[var(--color-text)]/75">
              <BookOpen className="h-3.5 w-3.5 text-[var(--color-red)] shrink-0" />
              {program.modality === "Por confirmar" ? "Por confirmar" : program.modality}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-cream)] border border-[var(--color-wine)]/10 text-[var(--color-text)]/75">
              <Clock className="h-3.5 w-3.5 text-[var(--color-red)] shrink-0" />
              {program.duration === "Por confirmar" ? "Por confirmar" : program.duration}
            </span>
          </div>

          {/* Descripción Corta */}
          <p className="text-sm text-[var(--color-text)]/70 leading-relaxed line-clamp-3 font-sans pt-1">
            {program.shortDescription}
          </p>
        </div>

        {/* CTAs de la Card */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <Button
            onClick={() => onOpenDetails(program)}
            variant="outline"
            size="sm"
            className="w-full text-xs h-11 border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white rounded-xl font-bold cursor-pointer transition-all flex items-center justify-center gap-1 group/btn"
          >
            Detalles
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Button>
          
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            className="w-full text-xs h-11 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] border-none rounded-xl font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[var(--color-red)]/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            Pedir Info
          </Button>
        </div>
      </div>

    </div>
  )
}
