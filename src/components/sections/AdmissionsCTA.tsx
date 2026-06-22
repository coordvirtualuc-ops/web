import * as React from "react"
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function AdmissionsCTA() {
  const admissionsUrl = createWhatsAppLink(WHATSAPP_MESSAGES.admisiones)

  return (
    <Section id="admisiones-cta" padding="lg">
      <AnimatedReveal direction="up">
        {/* Contenedor Principal (Fondo oscuro) */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] px-6 py-12 sm:px-12 sm:py-16 lg:p-20 shadow-2xl">
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-wine)] opacity-20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Columna Izquierda: Copy y CTAs */}
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance mb-6">
                Tu proceso puede <span className="text-[var(--color-red)]">empezar hoy</span>
              </h2>
              <p className="text-lg text-[#EFEFEF]/80 text-balance mb-10 leading-relaxed">
                Escríbenos por WhatsApp, recibe orientación personalizada y conoce el programa que mejor se adapta a tus objetivos.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button 
                  href={admissionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary" 
                  size="lg" 
                  className="group bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] border-none"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar con admisiones
                </Button>
                <Button 
                  href="#oferta-academica" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Ver oferta académica
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta de Pasos (Clara) */}
            <div className="w-full">
              <div className="bg-[var(--color-cream)] rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 relative">
                <div className="absolute -top-4 -left-4 bg-[var(--color-wine)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                  Proceso simple
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
                  Pasos para iniciar:
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 group">
                    <div className="mt-0.5 bg-white rounded-full p-1 shadow-sm text-[var(--color-wine)] group-hover:bg-[var(--color-wine)] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)]">Elige el programa que te interesa</p>
                      <p className="text-sm text-[var(--color-text)]/70 mt-1">Explora nuestra oferta educativa y encuentra tu vocación.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group">
                    <div className="mt-0.5 bg-white rounded-full p-1 shadow-sm text-[var(--color-wine)] group-hover:bg-[var(--color-wine)] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)]">Solicita información</p>
                      <p className="text-sm text-[var(--color-text)]/70 mt-1">Escríbenos para resolver dudas sin compromiso.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group">
                    <div className="mt-0.5 bg-white rounded-full p-1 shadow-sm text-[var(--color-wine)] group-hover:bg-[var(--color-wine)] group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-text)]">Recibe orientación de admisiones</p>
                      <p className="text-sm text-[var(--color-text)]/70 mt-1">Te guiaremos paso a paso en tu proceso de inscripción.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </AnimatedReveal>
    </Section>
  )
}