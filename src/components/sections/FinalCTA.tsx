import * as React from "react"
import { MessageCircle, ArrowRight, MapPin, BookOpen, Clock } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function FinalCTA() {
  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <Section id="final-cta" padding="xl" className="bg-[var(--color-black)] text-white">
      <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1c] p-8 sm:p-16 lg:p-20 shadow-2xl">
        
        {/* Patrón de fondo editorial */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-red)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje y CTA */}
          <div className="lg:col-span-7">
            <AnimatedReveal direction="up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-balance mb-6">
                Da el primer paso hacia tu <span className="text-[var(--color-cream)]">formación profesional</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-xl text-balance leading-relaxed mb-10">
                Solicita información y recibe orientación sobre la oferta académica de UC Universidad Continental en Tepic.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] hover:text-[var(--color-red)]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar información por WhatsApp
                </Button>
                <Button 
                  href="/contacto" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Ver contacto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedReveal>
          </div>

          {/* Columna Derecha: Tarjetas de datos rápidos */}
          <div className="lg:col-span-5 lg:pl-10">
            <AnimatedReveal direction="left" delay={0.2} className="flex flex-col gap-4">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15">
                <div className="mt-1 text-[var(--color-cream)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Tepic, Nayarit</h4>
                  <p className="text-white/70 text-sm">Ubicación accesible para la comunidad local.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15">
                <div className="mt-1 text-[var(--color-cream)]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Atención x WhatsApp</h4>
                  <p className="text-white/70 text-sm">Orientación rápida, directa y personalizada.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15">
                <div className="mt-1 text-[var(--color-cream)]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Oferta académica institucional</h4>
                  <p className="text-white/70 text-sm">Programas diseñados para el desarrollo integral.</p>
                </div>
              </div>

            </AnimatedReveal>
          </div>

        </div>
      </div>
    </Section>
  )
}