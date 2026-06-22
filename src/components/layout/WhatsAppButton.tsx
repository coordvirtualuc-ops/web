import * as React from "react"
import { MessageCircle } from "lucide-react"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function WhatsAppButton() {
  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#8c002a] p-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#550f2a] focus:outline-none focus:ring-2 focus:ring-[#8c002a] focus:ring-offset-2 select-none md:px-4 md:py-2.5"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden text-sm font-semibold tracking-wide md:inline">
        WhatsApp
      </span>
    </a>
  )
}