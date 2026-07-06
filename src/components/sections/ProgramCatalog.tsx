"use client"

import * as React from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { programCategories, academicPrograms, AcademicProgram } from "@/content/programs"
import { ProgramCard } from "@/components/ui/ProgramCard"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"

interface ProgramCatalogProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  onOpenDetails: (program: AcademicProgram) => void
}

export function ProgramCatalog({ activeCategory, setActiveCategory, onOpenDetails }: ProgramCatalogProps) {
  const [searchQuery, setSearchQuery] = React.useState<string>("")

  // Calcular la cantidad de programas por categoría dinámicamente
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = { Todas: academicPrograms.length }
    programCategories.forEach((cat) => {
      counts[cat] = academicPrograms.filter((p) => p.category === cat).length
    })
    return counts
  }, [])

  // Filtrar programas por categoría y búsqueda
  const filteredPrograms = React.useMemo(() => {
    return academicPrograms.filter((program) => {
      const matchesCategory = activeCategory === "Todas" || program.category === activeCategory
      const matchesSearch =
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="catalogo" className="w-full py-16 sm:py-24 bg-[var(--color-cream)] scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Catálogo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[var(--color-wine)]/10">
          <AnimatedReveal direction="up" delay={0.1}>
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-wine)]/5 text-[var(--color-wine)] border border-[var(--color-wine)]/10">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filtrado Inteligente
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-wine)] tracking-tight uppercase leading-tight">
                Catálogo de Programas
              </h2>
              <p className="text-sm text-[var(--color-text)]/60 max-w-md">
                Filtra por categoría o utiliza el buscador para explorar las carreras, posgrados y cursos que impulsarán tu futuro.
              </p>
            </div>
          </AnimatedReveal>

          {/* Buscador Editorial */}
          <AnimatedReveal direction="up" delay={0.15}>
            <div className="relative w-full md:w-80 shrink-0">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--color-text)]/40">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar carrera, maestría..."
                className="w-full h-12 pl-10 pr-4 text-sm bg-white border border-[var(--color-wine)]/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 focus:border-[var(--color-red)] placeholder-[var(--color-text)]/35 text-[var(--color-text)] transition-all shadow-xs"
              />
            </div>
          </AnimatedReveal>
        </div>

        {/* Filtros Premium de Categoría con Contadores */}
        <AnimatedReveal direction="up" delay={0.2}>
          <div className="relative w-full mb-12">
            {/* Contenedor de scroll horizontal seguro en mobile sin scrollbar */}
            <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x snap-mandatory hide-scrollbar">
              
              {/* Opción 'Todas' */}
              <button
                onClick={() => setActiveCategory("Todas")}
                className={`snap-center flex-none h-11 px-6 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all border cursor-pointer select-none ${
                  activeCategory === "Todas"
                    ? "bg-[var(--color-wine)] text-white border-[var(--color-wine)] shadow-lg shadow-[var(--color-wine)]/15 scale-[1.02]"
                    : "bg-white text-[var(--color-wine)] border-[var(--color-wine)]/10 hover:border-[var(--color-wine)]/30 hover:bg-[var(--color-cream)]"
                }`}
              >
                Todas <span className="ml-1 opacity-50 font-semibold">({categoryCounts["Todas"]})</span>
              </button>

              {/* Categorías Dinámicas */}
              {programCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`snap-center flex-none h-11 px-6 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all border cursor-pointer select-none ${
                    activeCategory === category
                      ? "bg-[var(--color-wine)] text-white border-[var(--color-wine)] shadow-lg shadow-[var(--color-wine)]/15 scale-[1.02]"
                      : "bg-white text-[var(--color-wine)] border-[var(--color-wine)]/10 hover:border-[var(--color-wine)]/30 hover:bg-[var(--color-cream)]"
                  }`}
                >
                  {category} <span className="ml-1 opacity-50 font-semibold">({categoryCounts[category] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        {/* Cuadrícula de Tarjetas */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 items-stretch">
            {filteredPrograms.map((program, idx) => (
              <AnimatedReveal
                key={program.id}
                direction="up"
                delay={0.05 * (idx % 3)}
                className="h-full"
              >
                <ProgramCard
                  program={program}
                  onOpenDetails={onOpenDetails}
                />
              </AnimatedReveal>
            ))}
          </div>
        ) : (
          <AnimatedReveal direction="up" delay={0.1}>
            <div className="w-full text-center py-16 bg-white rounded-[2rem] border border-[var(--color-wine)]/5 shadow-sm p-8 max-w-md mx-auto">
              <p className="text-base font-bold text-[var(--color-text)] mb-1">
                No se encontraron programas
              </p>
              <p className="text-xs text-[var(--color-text)]/50">
                Prueba cambiando el filtro de categoría o modificando la consulta en el buscador.
              </p>
            </div>
          </AnimatedReveal>
        )}

      </div>
    </section>
  )
}
