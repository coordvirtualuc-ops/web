import * as React from "react"
import Image from "next/image"
import { MessageCircle, ArrowRight, MapPin, BookOpen, Clock } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function FinalCTA() {
  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <Section id="final-cta" padding="xl" className="bg-white text-[var(--color-text)] border-t border-[var(--color-wine)]/10 overflow-hidden relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Patrón de fondo editorial sutil (sin contenedor de tarjeta) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-wine)] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje y CTA */}
          <div className="lg:col-span-7">
            <AnimatedReveal direction="up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance mb-6 text-[var(--color-wine)]">
                Da el primer paso hacia tu <span className="text-[var(--color-red)]">formación profesional</span>
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-text)]/80 max-w-xl text-balance leading-relaxed mb-10">
                Solicita información y recibe orientación sobre la oferta académica de UC Universidad Continental en Tepic.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary" 
                  size="lg" 
                  className="bg-[var(--color-wine)] text-white hover:bg-[var(--color-red)] shadow-lg shadow-[var(--color-wine)]/20"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar información por WhatsApp
                </Button>
                <Button 
                  href="#contacto" 
                  variant="outline" 
                  size="lg" 
                  className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)]/5 hover:text-[var(--color-wine)]"
                >
                  Ver contacto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedReveal>
          </div>

          {/* Columna Derecha: Tarjetas de datos rápidos (Limpias) */}
          <div className="lg:col-span-5 lg:pl-10 relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-[var(--color-wine)]/5">
            
            {/* Mascota Mini visible en esquina inferior */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 md:w-40 md:h-40 opacity-95 pointer-events-none select-none z-0 mascot-float">
              <Image
                src="/images/brand/mascota-uc.webp"
                alt="Mascota UC"
                fill
                className="object-contain object-bottom-right drop-shadow-md"
                sizes="(max-width: 768px) 112px, 160px"
              />
            </div>

            <AnimatedReveal direction="left" delay={0.2} className="flex flex-col gap-0 relative z-10">
              
              <div className="flex items-start gap-4 py-6 border-b border-[var(--color-wine)]/10">
                <div className="mt-1 text-[var(--color-red)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--color-text)]">Tepic, Nayarit</h4>
                  <p className="text-[var(--color-text)]/70 text-sm">Ubicación accesible para la comunidad local.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6 border-b border-[var(--color-wine)]/10">
                <div className="mt-1 text-[var(--color-red)]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--color-text)]">Atención por WhatsApp</h4>
                  <p className="text-[var(--color-text)]/70 text-sm">Orientación rápida, directa y personalizada.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6">
                <div className="mt-1 text-[var(--color-red)]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[var(--color-text)]">Oferta académica institucional</h4>
                  <p className="text-[var(--color-text)]/70 text-sm">Programas diseñados para el desarrollo integral.</p>
                </div>
              </div>

            </AnimatedReveal>
          </div>

        </div>
      </div>
    </Section>
  )
}