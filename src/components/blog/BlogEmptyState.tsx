import * as React from "react"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

// ─── BlogEmptyState ───────────────────────────────────────────────────────────

export function BlogEmptyState() {
  const waLink = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      {/* Ícono decorativo */}
      <div
        className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#550f2a] to-[#8c002a] shadow-lg"
        aria-hidden="true"
      >
        <BookOpen className="h-9 w-9 text-white/90" />
      </div>

      {/* Textos */}
      <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4 text-balance max-w-lg">
        Pronto publicaremos nuevos artículos
      </h2>
      <p className="text-[var(--color-text)]/65 text-base leading-relaxed max-w-md mb-10 text-balance">
        Estamos preparando contenido de orientación, vida universitaria y
        admisiones para acompañarte en tu proceso académico.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/oferta-academica"
          className="inline-flex items-center gap-2 bg-[#8c002a] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#550f2a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c002a] focus-visible:ring-offset-2"
        >
          Ver oferta académica
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-[#8c002a] text-[#8c002a] px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#8c002a] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c002a] focus-visible:ring-offset-2"
        >
          Hablar con admisiones
        </a>
      </div>
    </div>
  )
}
