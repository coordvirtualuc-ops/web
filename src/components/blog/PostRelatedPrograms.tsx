import * as React from "react"
import Link from "next/link"
import { ArrowRight, GraduationCap, Clock, MonitorSmartphone } from "lucide-react"
import { academicPrograms } from "@/content/programs"
import { createWhatsAppLink } from "@/lib/whatsapp"

// ─── Selección determinista idéntica a BlogRecommendedPrograms ────────────────

function getDayOffset(): number {
  const today = new Date()
  return Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86_400_000
  )
}

function getRandomPrograms(count = 3) {
  const valid = academicPrograms.filter(
    (p) => p.id && p.status !== "coming-soon"
  )
  if (valid.length <= count) return valid.slice(0, count)
  const offset = getDayOffset() % valid.length
  return [0, 1, 2].map((i) => valid[(offset + i) % valid.length])
}

function getManualPrograms(slugs: string[]) {
  const byId = new Map(academicPrograms.map((p) => [p.id, p]))
  return slugs
    .map((s) => byId.get(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3)
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface PostRelatedProgramsProps {
  mode?: "random" | "manual" | "none"
  slugs?: string[]
}

// ─── PostRelatedPrograms ──────────────────────────────────────────────────────

export function PostRelatedPrograms({
  mode = "random",
  slugs = [],
}: PostRelatedProgramsProps) {
  if (mode === "none") return null

  const programs =
    mode === "manual" && slugs.length > 0
      ? getManualPrograms(slugs)
      : getRandomPrograms(3)

  if (!programs.length) return null

  return (
    <section
      id="programas-relacionados"
      className="bg-[#F8F5F2] py-16 md:py-24"
      aria-labelledby="programas-relacionados-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-3">
              Oferta Académica
            </span>
            <h2
              id="programas-relacionados-titulo"
              className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] text-balance"
            >
              Programas que pueden interesarte
            </h2>
          </div>
          <Link
            href="/oferta-academica"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-wine)] hover:text-[var(--color-red)] transition-colors shrink-0 focus-visible:outline-none focus-visible:underline"
          >
            Ver todos los programas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const waMessage = `Hola, quiero información sobre ${program.title} en UC Universidad Continental.`
            const waLink = createWhatsAppLink(waMessage)

            return (
              <div
                key={program.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#EFEFEF] overflow-hidden hover:shadow-md hover:border-[var(--color-wine)]/20 transition-all duration-300"
              >
                {/* Banda superior */}
                <div
                  className="h-1.5 bg-gradient-to-r from-[#550f2a] to-[#8c002a]"
                  aria-hidden="true"
                />

                <div className="flex flex-col flex-1 p-6">
                  {/* Icono + categoría */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#550f2a]/10 shrink-0">
                      <GraduationCap
                        className="h-5 w-5 text-[var(--color-wine)]"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-wine)]">
                      {program.category}
                    </span>
                  </div>

                  {/* Nombre */}
                  <h3 className="font-montserrat text-lg font-bold text-[var(--color-text)] leading-snug mb-3 group-hover:text-[var(--color-wine)] transition-colors">
                    {program.shortTitle}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-[#242424]/65 leading-relaxed mb-5 flex-1">
                    {program.shortDescription}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-6 text-xs text-[#242424]/55">
                    {program.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {program.duration}
                      </span>
                    )}
                    {program.modality && (
                      <span className="flex items-center gap-1">
                        <MonitorSmartphone
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        {program.modality}
                      </span>
                    )}
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col gap-2.5 mt-auto">
                    <Link
                      href="/oferta-academica#catalogo"
                      className="inline-flex items-center justify-center gap-2 bg-[#8c002a] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#550f2a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c002a] focus-visible:ring-offset-2"
                    >
                      Ver programa
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-[#EFEFEF] text-[#242424]/70 px-5 py-2.5 rounded-xl text-xs font-semibold hover:border-[var(--color-wine)] hover:text-[var(--color-wine)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-wine)] focus-visible:ring-offset-2"
                    >
                      Pedir información
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
