"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

export function HeroHome() {
  const whatsappUrl = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  // Array adaptado con las rutas de las imágenes tipo "póster vertical"
  const mainBachelors = [
    { title: "Administración de Empresas", wp: WHATSAPP_MESSAGES.administracion, image: "/images/poster-admin.webp" },
    { title: "Educación", wp: WHATSAPP_MESSAGES.educacion, image: "/images/poster-educacion.webp" },
    { title: "Criminología y Criminalística", wp: WHATSAPP_MESSAGES.criminologia, image: "/images/poster-criminologia.webp" },
    { title: "Contabilidad y Fiscalización", wp: WHATSAPP_MESSAGES.contabilidad, image: "/images/poster-contabilidad.webp" },
    { title: "Lenguas Extranjeras", wp: WHATSAPP_MESSAGES.lenguas, image: "/images/poster-lenguas.webp" },
  ]

  const valuePropositions = [
    { title: "Oferta académica", desc: "Programas actualizados para el mundo de hoy.", icon: BookOpen },
    { title: "Acompañamiento cercano", desc: "Atención personalizada en cada paso.", icon: Users },
    { title: "Formación integral", desc: "Desarrollo profesional y humano ético.", icon: GraduationCap },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-black)] pt-20 pb-20 lg:pt-32 lg:pb-32 flex items-center min-h-[90vh]">
      
      {/* Fondo Inmersivo (Estilo Streaming) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroo-bg.webp" 
          alt="Estudiantes en UC Universidad Continental"
          fill
          priority
          className="object-cover object-center opacity-60 filter blur-sm lg:blur-none"
          sizes="100vw"
        />
        {/* Gradientes oscuros para asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)] via-transparent to-black/30 z-10"></div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <AnimatedReveal direction="up" delay={0.1}>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] text-balance mb-6 drop-shadow-lg">
                Estudia en <span className="text-[var(--color-red)]">UC</span> <br className="hidden lg:block" />
                Universidad Continental
              </h1>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-[#EFEFEF]/80 md:text-xl leading-relaxed text-balance mb-10 max-w-2xl drop-shadow-md">
                Formación profesional, humana y cercana para estudiantes que buscan crecer con propósito, práctica y acompañamiento real.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="group text-lg px-8 shadow-xl shadow-[var(--color-red)]/20 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)]">
                  Solicitar información
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="#oferta-academica" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-md">
                  Ver oferta académica
                </Button>
              </div>
            </AnimatedReveal>
          </div>

          {/* Columna Derecha: Bloque de valor institucional integrado */}
          <div className="flex flex-col gap-5 lg:col-span-5 w-full max-w-lg mx-auto lg:ml-auto">
            <AnimatedReveal direction="left" delay={0.4}>
              <div className="flex flex-col gap-3 rounded-3xl bg-[var(--color-black)]/50 backdrop-blur-md p-6 border border-white/5 shadow-2xl">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#EFEFEF]/50 mb-3 pl-1">Nuestro Compromiso:</h4>
                {valuePropositions.map((val, idx) => {
                  const Icon = val.icon
                  return (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-white/5">
                      <div className="bg-white/10 p-3 rounded-lg text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-white tracking-wide">{val.title}</h3>
                        <p className="text-sm text-[#EFEFEF]/70 leading-snug">{val.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AnimatedReveal>
          </div>

        </div>

        {/* Sección de "Nuestras Carreras" (Estilo Portadas Verticales) */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-white/10">
          <AnimatedReveal direction="up" delay={0.5}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">Licenciaturas Principales</h2>
              <a href="#oferta-academica" className="inline-flex items-center text-sm font-medium text-white hover:text-[var(--color-red)] transition-colors group">
                <span className="hidden sm:inline">Ver oferta completa</span>
                <span className="sm:hidden">Ver todas</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Grid de Portadas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {mainBachelors.map((bachelor, index) => {
                const wpUrl = createWhatsAppLink(bachelor.wp)

                return (
                  <div key={index} className="group relative aspect-[2/3] w-full rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-wine)]/40 border border-white/10">
                    
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
            </div>
          </AnimatedReveal>
        </div>

      </div>
    </section>
  )
}