import * as React from "react"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { ArrowRight } from "lucide-react"

// ─── BlogNewsletterCTA ────────────────────────────────────────────────────────

export function BlogNewsletterCTA() {
  const waMessage =
    "Hola, quiero recibir novedades y artículos de UC Universidad Continental."
  const waLink = createWhatsAppLink(waMessage)

  return (
    <section
      id="blog-novedades"
      className="bg-[#550f2a] py-16 md:py-24"
      aria-labelledby="blog-novedades-titulo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Etiqueta */}
          <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
            Mantente informado
          </span>

          {/* Título */}
          <h2
            id="blog-novedades-titulo"
            className="font-montserrat text-3xl sm:text-4xl font-bold text-white mb-5 text-balance"
          >
            Recibe novedades de UC
          </h2>

          {/* Descripción */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 text-balance">
            Consulta nuevos artículos, convocatorias y orientación académica
            directamente con nuestro equipo.
          </p>

          {/* CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#550f2a] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#F8F5F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#550f2a] shadow-lg"
          >
            Quiero recibir novedades
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
