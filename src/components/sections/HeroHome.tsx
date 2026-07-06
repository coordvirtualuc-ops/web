"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, GraduationCap, Users, BookOpen, Clock, Award, Globe, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"
import { AutoScrollCarousel } from "@/components/ui/AutoScrollCarousel"

export function HeroHome() {
  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)
  const carouselRef = React.useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current
    if (!container) return

    // Pausar el auto-scroll para que no interrumpa el desplazamiento smooth
    if (typeof (container as any).pauseAutoScroll === "function") {
      ;(container as any).pauseAutoScroll()
    }

    const scrollAmount = 340
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })

    // Reanudar el auto-scroll tras un retraso
    if (typeof (container as any).resumeAutoScroll === "function") {
      ;(container as any).resumeAutoScroll()
    }
  }

  // Array adaptado con las rutas de las imágenes tipo "póster vertical"
  const mainBachelors = [
    { title: "Administración de Empresas", wp: WHATSAPP_MESSAGES.administracion, image: "/images/poster-admin.webp" },
    { title: "Educación", wp: WHATSAPP_MESSAGES.educacion, image: "/images/poster-educacion.webp" },
    { title: "Criminología y Criminalística", wp: WHATSAPP_MESSAGES.criminologia, image: "/images/poster-criminologia.webp" },
    { title: "Contabilidad y Fiscalización", wp: WHATSAPP_MESSAGES.contabilidad, image: "/images/poster-contabilidad.webp" },
    { title: "Lenguas Extranjeras", wp: WHATSAPP_MESSAGES.lenguas, image: "/images/poster-lenguas.webp" },
    { title: "Licenciatura en Derecho", wp: WHATSAPP_MESSAGES.derecho, image: "/images/poster-derecho.webp" },
    { title: "Ingeniería en Sistemas Computacionales con Enfoque en Negocios Digitales", wp: WHATSAPP_MESSAGES.ingenieriaSistemas, image: "/images/poster-sistemas.webp" },
    { title: "Maestría en Administración Pública", wp: WHATSAPP_MESSAGES.maestriaAdministracionPublica, image: "/images/poster-maestria-administracion-publica.webp" },
  ]

  const valuePropositions = [
    { title: "Más de 8 generaciones de egresados", desc: "", icon: Award },
    { title: "Programas con RVOE", desc: "", icon: BookOpen },
    { title: "Modalidades y horarios flexibles", desc: "", icon: Clock },
    { title: "Certificación en Cambridge", desc: "", icon: Globe },
    { title: "Línea de Formación en Emprendimiento", desc: "", icon: Lightbulb },
    { title: "Profesores altamente capacitados y con experiencia profesional", desc: "", icon: GraduationCap },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-cream)] pt-20 pb-20 lg:pt-32 lg:pb-32 flex items-center min-h-[90vh]">
      
      {/* Fondo Inmersivo (Claro) */}
      <div className="absolute inset-0 z-0 bg-[var(--color-cream)]">
        <Image
          src="/images/heroo-bg.webp" 
          alt="Estudiantes en UC Universidad Continental"
          fill
          priority
          className="object-cover object-[70%_center] opacity-30 sm:opacity-55 lg:opacity-75 mix-blend-multiply"
          sizes="100vw"
        />
        {/* Gradientes direccionales para asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-cream)]/90 lg:via-[var(--color-cream)]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/20 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <AnimatedReveal direction="up" delay={0.1}>
              <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] text-balance mb-6 drop-shadow-sm">
                Estudia en UC Universidad Continental en <br className="hidden lg:block" />
                <span className="text-[var(--color-red)]">Tepic Nayarit</span>
              </h1>
            </AnimatedReveal>
 
            <AnimatedReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-[var(--color-text)]/80 md:text-xl leading-relaxed text-balance mb-10 max-w-2xl">
                Una universidad en Tepic Nayarit con enfoque humanista, acompañamiento cercano y programas de excelencia académica para impulsar tu futuro profesional.
              </p>
            </AnimatedReveal>
 
            <AnimatedReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="group text-lg px-8 shadow-xl shadow-[var(--color-red)]/20 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)]">
                  Solicitar información
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="#oferta-academica" variant="outline" size="lg" className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white backdrop-blur-md">
                  Ver oferta académica
                </Button>
              </div>
            </AnimatedReveal>
          </div>
 
          {/* Columna Derecha: Bloque de valor institucional integrado */}
          <div className="flex flex-col gap-5 lg:col-span-5 w-full max-w-lg md:max-w-2xl lg:max-w-xl mx-auto lg:ml-auto">
            <AnimatedReveal direction="left" delay={0.4}>
              <div className="flex flex-col gap-2 p-6 relative overflow-hidden bg-white/35 backdrop-blur-sm rounded-3xl border border-[var(--color-wine)]/5 shadow-sm">
                
                {/* Mascota Watermark de Fondo */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-[0.11] pointer-events-none select-none z-0 mascot-watermark">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota Watermark"
                    fill
                    className="object-contain object-bottom-right"
                    sizes="144px"
                  />
                </div>

                <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-wine)] mb-4 pl-1 relative z-10">¿Por qué elegir UC?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 relative z-10">
                  {valuePropositions.map((val, idx) => {
                    const Icon = val.icon
                    return (
                      <div key={idx} className="flex items-start gap-3 py-3 border-b border-[var(--color-wine)]/10 last:border-b-0 group">
                        <div className="text-[var(--color-red)] group-hover:scale-110 transition-transform mt-0.5 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base text-[var(--color-text)] tracking-wide leading-snug">{val.title}</h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </AnimatedReveal>
          </div>
 
        </div>
 
        {/* Sección de "Nuestras Carreras" (Estilo Portadas Verticales) */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-[var(--color-wine)]/10">
          <AnimatedReveal direction="up" delay={0.5}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-[var(--color-wine)] tracking-tight uppercase">Programas Académicos</h2>
              <a href="#oferta-academica" className="inline-flex items-center text-sm font-medium text-[var(--color-text)]/70 hover:text-[var(--color-red)] transition-colors group">
                <span className="hidden sm:inline">Ver oferta completa</span>
                <span className="sm:hidden">Ver todas</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Carrusel de Portadas con Botones Flotantes */}
            <div className="relative group/carousel">
              {/* Flecha Izquierda */}
              <button
                onClick={() => scrollCarousel("left")}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-12 h-12 rounded-full bg-white text-[var(--color-wine)] border border-[var(--color-wine)]/10 shadow-lg hover:bg-[var(--color-wine)] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                aria-label="Deslizar carrusel hacia atrás"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <AutoScrollCarousel ref={carouselRef} className="flex gap-4 lg:gap-6 pb-8 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                {mainBachelors.map((bachelor, index) => {
                  const wpUrl = createWhatsAppLink(bachelor.wp)

                  return (
                    <div key={index} className="group relative flex-none w-[76vw] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px] aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-wine)]/40 border border-[var(--color-wine)]/10 snap-center sm:snap-start">
                      
                      {/* Imagen de Portada */}
                      <Image
                        src={bachelor.image}
                        alt={bachelor.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      
                      {/* Gradientes Oscuros para el texto */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-wine)]/80 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Contenido Superpuesto */}
                      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-5">
                        <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight text-white mb-3 text-balance transform transition-transform duration-300 group-hover:-translate-y-1">
                          {bachelor.title}
                        </h3>
                        
                        <a href={wpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[var(--color-cream)] group-hover:text-white transition-colors transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                          Solicitar Info <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  )
                })}
              </AutoScrollCarousel>

              {/* Flecha Derecha */}
              <button
                onClick={() => scrollCarousel("right")}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-12 h-12 rounded-full bg-white text-[var(--color-wine)] border border-[var(--color-wine)]/10 shadow-lg hover:bg-[var(--color-wine)] hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 cursor-pointer"
                aria-label="Deslizar carrusel hacia adelante"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </AnimatedReveal>
        </div>

      </div>
    </section>
  )
}