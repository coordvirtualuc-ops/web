"use client"

import * as React from "react"
import Image from "next/image"
import { MessageCircle, ArrowRight, Send } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES, createWhatsAppFormLink } from "@/lib/whatsapp"

export function AdmissionsCTA() {
  const admissionsUrl = createWhatsAppLink(WHATSAPP_MESSAGES.inscribete)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre") as string,
      correo: formData.get("correo") as string,
      telefono: formData.get("telefono") as string,
      carrera: formData.get("carrera") as string,
      modalidad: formData.get("modalidad") as string,
      pregunta: formData.get("pregunta") as string,
    }
    const url = createWhatsAppFormLink(data)
    setLastWhatsAppUrl(url)
    window.open(url, "_blank", "noopener,noreferrer")
    setIsSubmitted(true)
  }

  return (
    <Section id="admisiones-cta" padding="xl" className="bg-[var(--color-cream)]">
      <AnimatedReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Copy y CTAs */}
          <div className="lg:col-span-6 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] tracking-tight text-balance mb-6">
              Tu proceso puede <span className="text-[var(--color-red)]">empezar hoy</span>
            </h2>
            <p className="text-lg text-[var(--color-text)]/80 text-balance mb-10 leading-relaxed">
              Escríbenos por WhatsApp, recibe orientación personalizada y conoce el programa que mejor se adapta a tus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button 
                href={admissionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                size="lg" 
                className="group bg-[var(--color-wine)] text-white hover:bg-[var(--color-red)] shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar con admisiones
              </Button>
              <Button 
                href="#oferta-academica" 
                variant="outline" 
                size="lg" 
                className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white"
              >
                Ver oferta académica
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Formulario o Confirmación */}
          <div className="lg:col-span-6 w-full">
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 flex flex-col items-center text-center relative overflow-visible min-h-[400px] justify-center">
                {/* Mascota en el estado enviado */}
                <div className="mb-6 pointer-events-none">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota institucional de UC Universidad Continental"
                    width={180}
                    height={180}
                    priority={false}
                    className="h-28 w-auto object-contain drop-shadow-xl sm:h-32 lg:h-36"
                  />
                </div>
                
                <h3 className="text-2xl font-black text-[var(--color-wine)] mb-3">
                  Solicitud lista para enviar
                </h3>
                
                <p className="text-[var(--color-text)]/80 text-sm sm:text-base leading-relaxed mb-4 max-w-md">
                  Abrimos WhatsApp con tu información. Solo falta que confirmes el envío del mensaje para que el equipo de UC pueda atenderte.
                </p>
                
                <p className="text-[var(--color-wine)]/70 text-xs font-semibold uppercase tracking-wider mb-8 italic">
                  Te esperamos del otro lado.
                </p>
                
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <Button
                    onClick={() => {
                      if (lastWhatsAppUrl) {
                        window.open(lastWhatsAppUrl, "_blank", "noopener,noreferrer")
                      }
                    }}
                    type="button"
                    variant="primary"
                    className="w-full bg-[var(--color-red)] hover:bg-[var(--color-wine)] text-white shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> Abrir WhatsApp nuevamente
                  </Button>
                  
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                    }}
                    type="button"
                    className="text-sm font-semibold text-[var(--color-wine)] hover:text-[var(--color-red)] transition-colors underline py-2 cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 relative overflow-visible">
                {/* Logo de Contáctanos */}
                <div className="absolute -top-4 -left-4 bg-[var(--color-wine)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider z-30">
                  Contáctanos
                </div>

                {/* Mascota en el formulario */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:-top-24 lg:translate-x-0 z-20 pointer-events-none">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota institucional de UC Universidad Continental"
                    width={180}
                    height={180}
                    priority={false}
                    className="h-24 w-auto object-contain drop-shadow-lg sm:h-28 lg:h-36"
                  />
                </div>
                  
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 relative z-10">
                  Solicita información
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]" placeholder="Tu nombre" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="correo" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Correo electrónico *</label>
                      <input type="email" id="correo" name="correo" required className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]" placeholder="tu@correo.com" />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Teléfono *</label>
                      <input type="tel" id="telefono" name="telefono" required className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]" placeholder="10 dígitos" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="carrera" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Programa de interés *</label>
                      <select id="carrera" name="carrera" required className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]">
                        <option value="">Selecciona...</option>
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Posgrado">Posgrado</option>
                        <option value="Centro de Idiomas">Centro de Idiomas</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modalidad" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Modalidad *</label>
                      <select id="modalidad" name="modalidad" required className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]">
                        <option value="">Selecciona...</option>
                        <option value="Presencial">Presencial</option>
                        <option value="En línea">En línea</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pregunta" className="block text-sm font-medium text-[var(--color-text)]/80 mb-1">Pregunta o comentario</label>
                    <textarea id="pregunta" name="pregunta" rows={3} className="w-full rounded-lg border border-[var(--color-wine)]/20 bg-white px-4 py-2 text-[var(--color-text)] focus:border-[var(--color-red)] focus:outline-none focus:ring-1 focus:ring-[var(--color-red)]" placeholder="¿Cómo podemos ayudarte?"></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full bg-[var(--color-wine)] hover:bg-[var(--color-red)] text-white shadow-lg">
                    <Send className="mr-2 h-4 w-4" /> Enviar a WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </AnimatedReveal>
    </Section>
  )
}