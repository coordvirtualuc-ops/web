import * as React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function ProgramGrid() {
  const generalWhatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)
  
  const mainBachelors = [
    "Administración de Empresas",
    "Educación",
    "Criminología y Criminalística",
    "Contabilidad y Fiscalización",
    "Lenguas Extranjeras"
  ]

  return (
    <Section id="oferta-academica" background="default" padding="xl">
      <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <AnimatedReveal direction="up">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-wine)] mb-3">
            Niveles Académicos
          </h2>
          <p className="text-3xl md:text-5xl font-black text-[var(--color-text)] tracking-tight text-balance">
            Impulsa tu futuro con nuestros programas de excelencia
          </p>
        </AnimatedReveal>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Panel Destacado Panorámico: Licenciaturas */}
        <AnimatedReveal direction="up" delay={0.1}>
          <div className="group relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/nivel-licenciaturas.webp"
              alt="Licenciaturas en UC Universidad Continental"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            {/* Gradiente oscuro de izquierda a derecha para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent z-10 sm:hidden" />
            
            <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-16 max-w-3xl">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-md">
                Licenciaturas
              </h3>
              <p className="text-[#EFEFEF] text-lg md:text-xl text-balance mb-8 max-w-xl">
                Conviértete en un profesional ético y competente en las áreas con mayor demanda y proyección.
              </p>
              
              {/* Etiquetas estilo "géneros de cine" */}
              <div className="flex flex-wrap gap-2 mb-10">
                {mainBachelors.map((bachelor, index) => (
                  <span key={index} className="rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white shadow-sm">
                    {bachelor}
                  </span>
                ))}
              </div>

              <div>
                <Button href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] border-none shadow-lg shadow-[var(--color-red)]/20">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Grid Secundario (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Panel: Bachillerato */}
          <AnimatedReveal direction="up" delay={0.2}>
            <div className="group relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/images/nivel-bachillerato.webp"
                alt="Bachillerato en UC"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachillerato</h3>
                <p className="text-[#EFEFEF]/80 text-balance mb-6 max-w-sm">
                  Bases sólidas para tu etapa universitaria con un enfoque integral.
                </p>
                <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[var(--color-cream)] hover:text-white uppercase tracking-wider">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimatedReveal>

          {/* Panel: Posgrados */}
          <AnimatedReveal direction="up" delay={0.3}>
            <div className="group relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/images/nivel-posgrados.webp"
                alt="Posgrados en UC"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Posgrados</h3>
                <p className="text-[#EFEFEF]/80 text-balance mb-6 max-w-sm">
                  Especialízate y lleva tu perfil profesional al siguiente nivel directivo.
                </p>
                <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[var(--color-cream)] hover:text-white uppercase tracking-wider">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimatedReveal>

          {/* Panel: Diplomados */}
          <AnimatedReveal direction="up" delay={0.4}>
            <div className="group relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/images/nivel-diplomados.webp"
                alt="Diplomados en UC"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine)]/90 via-[var(--color-wine)]/40 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Diplomados</h3>
                <p className="text-[#EFEFEF]/90 text-balance mb-6 max-w-sm">
                  Educación continua para actualizar y certificar tus conocimientos.
                </p>
                <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[var(--color-cream)] hover:text-white uppercase tracking-wider">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimatedReveal>

          {/* Panel: Idiomas */}
          <AnimatedReveal direction="up" delay={0.5}>
            <div className="group relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image
                src="/images/nivel-idiomas.webp"
                alt="Centro de Idiomas en UC"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Centro de Idiomas</h3>
                <p className="text-[#EFEFEF]/80 text-balance mb-4 max-w-sm">
                  Domina nuevos horizontes comunicativos y expande tus oportunidades.
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/10">Inglés</span>
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/10">Francés</span>
                </div>
                <a href={createWhatsAppLink(WHATSAPP_MESSAGES.ingles)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-[var(--color-cream)] hover:text-white uppercase tracking-wider">
                  Consultar cursos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimatedReveal>

        </div>
      </div>

      <AnimatedReveal direction="up" delay={0.6} className="mt-16 text-center">
        <Button href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="px-10 py-6 text-lg w-full sm:w-auto shadow-xl shadow-[var(--color-wine)]/20 hover:shadow-[var(--color-wine)]/40 rounded-full">
          Quiero recibir información general
        </Button>
      </AnimatedReveal>
    </Section>
  )
}