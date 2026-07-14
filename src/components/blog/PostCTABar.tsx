import * as React from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

// ─── PostCTABar ───────────────────────────────────────────────────────────────
// Bloque de CTA embebido en el artículo, con WhatsApp y link a Inscríbete.
// Sirve como pausa visual editorial y punto de conversión natural.

interface PostCTABarProps {
  /** Si se pasa, se usa un mensaje personalizado por carrera */
  programName?: string
}

export function PostCTABar({ programName }: PostCTABarProps) {
  const waMessage = programName
    ? `Hola, quiero información sobre ${programName} en UC Universidad Continental.`
    : WHATSAPP_MESSAGES.general

  const waLink = createWhatsAppLink(waMessage)

  return (
    <aside
      className="my-12 rounded-2xl bg-gradient-to-br from-[#550f2a] to-[#8c002a] p-8 sm:p-10 text-white"
      aria-label="¿Te interesa estudiar en UC?"
    >
      {/* Etiqueta */}
      <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
        UC Universidad Continental
      </span>

      {/* Título */}
      <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">
        ¿Te interesa estudiar en UC?
      </h2>

      {/* Texto */}
      <p className="text-white/75 leading-relaxed mb-8 max-w-lg text-balance">
        Nuestro equipo de admisiones está listo para orientarte. Habla con
        nosotros por WhatsApp o da el primer paso e inscríbete hoy.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-white text-[#550f2a] px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#F8F5F2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#550f2a] shadow-lg"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Hablar con admisiones
        </a>

        <Link
          href="/inscribete"
          className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#550f2a]"
        >
          Inscríbete
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  )
}
