"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ArrowRight, MessageCircle, Quote } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink } from "@/lib/whatsapp"

interface Testimonial {
  id: string
  name: string
  program: string
  generation: string
  image: string
  summary: string
  fullText: string
  initials: string
  whatsappMessage: string
}

const testimonialsData: Testimonial[] = [
  {
    id: "maria-fernanda",
    name: "María Fernanda López Martínez",
    program: "Licenciatura en Educación",
    generation: "Generación: 2021–2024",
    image: "/images/testimonios/maria-fernanda-lopez.webp",
    summary: "Su experiencia en UC transformó su forma de entender la educación mediante proyectos con impacto real en la comunidad.",
    fullText: "Estudiar en la Universidad Continental fue una experiencia que transformó mi forma de entender la educación. Lo que más valoro fue la oportunidad de participar en proyectos enfocados en problemáticas reales de la comunidad, ya que me permitieron aplicar los conocimientos adquiridos en clase y comprender el impacto que puede tener un docente en su entorno. Además, siempre encontré docentes preparados y dispuestos a acompañarnos en nuestro desarrollo profesional y personal. Hoy ejerzo con la confianza de contar con una formación sólida, humana y actualizada.",
    initials: "ML",
    whatsappMessage: "Hola, quiero información sobre la Licenciatura en Educación."
  },
  {
    id: "jose-antonio",
    name: "José Antonio Ramírez Gómez",
    program: "Licenciatura en Administración de Empresas",
    generation: "Generación: 2020–2023",
    image: "/images/testimonios/jose-antonio-ramirez.webp",
    summary: "Gracias a la flexibilidad de UC pudo estudiar y trabajar, además de fortalecer habilidades de emprendimiento.",
    fullText: "Elegí Universidad Continental porque necesitaba una modalidad que me permitiera trabajar y estudiar al mismo tiempo. Gracias a la flexibilidad de sus programas pude concluir mi carrera sin descuidar mis responsabilidades laborales. La línea de formación en emprendimiento me ayudó a desarrollar habilidades para iniciar mi propio proyecto de negocio y los docentes compartían experiencias reales de su práctica profesional, lo que hizo que cada clase tuviera una aplicación inmediata en el mundo laboral.",
    initials: "JR",
    whatsappMessage: "Hola, quiero información sobre la Licenciatura en Administración de Empresas."
  },
  {
    id: "daniela-sanchez",
    name: "Daniela Sánchez Ortega",
    program: "Licenciatura en Criminología y Criminalística",
    generation: "Generación: 2019–2022",
    image: "/images/testimonios/daniela-sanchez.webp",
    summary: "Destaca la formación práctica, las visitas académicas y los proyectos relacionados con seguridad y prevención social.",
    fullText: "Una de las fortalezas de Universidad Continental es que la formación va mucho más allá de la teoría. Durante la carrera participamos en actividades prácticas, visitas académicas y proyectos relacionados con problemáticas reales de seguridad y prevención social. Esto me permitió desarrollar habilidades de análisis e investigación que actualmente aplico en mi desempeño profesional. Además, el acompañamiento constante de los docentes hizo que cada etapa de mi formación fuera una experiencia enriquecedora.",
    initials: "DS",
    whatsappMessage: "Hola, quiero información sobre la Licenciatura en Criminología y Criminalística."
  },
  {
    id: "carlos-hernandez",
    name: "Carlos Alberto Hernández Ruiz",
    program: "Licenciatura en Contabilidad",
    generation: "Generación: 2021–2024",
    image: "/images/testimonios/carlos-hernandez.webp",
    summary: "Valora la calidad de profesores con experiencia profesional y programas actualizados para el contexto laboral.",
    fullText: "Lo que más destaco de mi experiencia en UC es la calidad de sus docentes. Muchos de ellos se encontraban ejerciendo profesionalmente mientras impartían clases, por lo que compartían situaciones reales que enriquecieron nuestro aprendizaje. Los programas académicos se mantienen actualizados y enfocados en las necesidades actuales de las organizaciones, lo que me permitió egresar con conocimientos pertinentes y competencias que hoy aplico en mi trabajo diario.",
    initials: "CH",
    whatsappMessage: "Hola, quiero información sobre la Licenciatura en Contabilidad y Fiscalización."
  },
  {
    id: "andrea-torres",
    name: "Andrea Valeria Torres Pérez",
    program: "Licenciatura en Lenguas Extranjeras",
    generation: "Generación: 2020–2023",
    image: "/images/testimonios/andrea-torres.webp",
    summary: "Su formación en idiomas y preparación para certificaciones fortalecieron su perfil profesional.",
    fullText: "La formación en idiomas que recibí en Universidad Continental me abrió oportunidades que jamás imaginé. Además de fortalecer mis competencias lingüísticas, tuve acceso a procesos de preparación para certificaciones internacionales como Cambridge y la Alianza Francesa, lo que enriqueció significativamente mi perfil profesional. En un mundo cada vez más globalizado, contar con estas herramientas representa una gran ventaja competitiva. La cercanía de los docentes y el enfoque práctico de las clases hicieron que el aprendizaje fuera dinámico y significativo.",
    initials: "AT",
    whatsappMessage: "Hola, quiero información sobre la Licenciatura en Lenguas Extranjeras."
  },
  {
    id: "gabriela-mendoza",
    name: "Mtra. Gabriela Mendoza Velázquez",
    program: "Maestría en Lenguas Extranjeras",
    generation: "Generación: 2022–2024",
    image: "/images/testimonios/gabriela-mendoza.webp",
    summary: "La maestría le permitió fortalecer competencias profesionales con modalidad flexible y aplicación directa en su práctica docente.",
    fullText: "La Maestría en Lenguas Extranjeras me permitió fortalecer mis competencias profesionales desde una perspectiva actual y global. Los contenidos académicos se encontraban alineados con las tendencias educativas contemporáneas y fueron impartidos por docentes con amplia experiencia académica y profesional. La modalidad flexible me permitió continuar con mis actividades laborales mientras cursaba el programa, y los proyectos desarrollados durante la maestría tuvieron una aplicación directa en mi práctica docente y en los contextos educativos donde me desempeño.",
    initials: "GM",
    whatsappMessage: "Hola, quiero solicitar información en UC Universidad Continental."
  }
]

function TestimonialAvatar({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <span className="font-bold text-lg text-[var(--color-wine)] select-none">
        {initials}
      </span>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setHasError(true)}
      sizes="56px"
    />
  )
}

function TestimonialModalAvatar({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-wine)]/10 to-[var(--color-magenta)]/20 flex items-center justify-center">
        <span className="font-black text-6xl text-[var(--color-wine)]/20 select-none">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover animate-fade-in"
      onError={() => setHasError(true)}
      sizes="(max-width: 768px) 100vw, 30vw"
    />
  )
}

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState<Testimonial | null>(null)
  const scrollContainer = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!selectedTestimonial) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTestimonial(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedTestimonial])

  React.useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedTestimonial])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainer.current
    if (!container) return
    const scrollAmount = 400
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedTestimonial(null)
    }
  }

  return (
    <Section id="testimonios" padding="xl" className="bg-[#F8F5F2] overflow-hidden relative">
      
      {/* Estilos para animaciones de modales e interactividad */}
      <style>{`
        @keyframes ucFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ucScaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: ucFadeIn 250ms ease-out forwards;
        }
        .animate-scale-up {
          animation: ucScaleUp 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Controles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <AnimatedReveal direction="up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-wine)] mb-4">
                Historias de nuestra comunidad UC
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text)]/80 text-balance">
                Conoce experiencias de estudiantes y egresados que vivieron la formación humanista, práctica y cercana de UC.
              </p>
            </AnimatedReveal>
          </div>
          
          {/* Controles del Carrusel */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Deslizar carrusel a la izquierda"
              className="p-3.5 rounded-full border border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Deslizar carrusel a la derecha"
              className="p-3.5 rounded-full border border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Contenedor Carrusel */}
        <div className="relative">
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 hide-scrollbar"
          >
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="flex-none w-[85vw] sm:w-[380px] md:w-[400px] snap-center bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
              >
                <div>
                  {/* Identidad */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-[var(--color-wine)]/10 to-[var(--color-magenta)]/20 flex items-center justify-center border border-[var(--color-wine)]/10">
                      <TestimonialAvatar src={t.image} alt={t.name} initials={t.initials} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm text-[var(--color-wine)] leading-tight tracking-wide">{t.name}</h4>
                      <p className="text-[10px] text-[var(--color-magenta)] font-bold uppercase tracking-widest mt-1">{t.program}</p>
                      <p className="text-[10px] text-[var(--color-text)]/50 font-medium">{t.generation}</p>
                    </div>
                  </div>
                  
                  {/* Resumen */}
                  <p className="text-[var(--color-text)]/80 text-base leading-relaxed italic mb-8">
                    "{t.summary}"
                  </p>
                </div>

                <div>
                  {/* Botón Leer Testimonio */}
                  <button 
                    onClick={() => setSelectedTestimonial(t)}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] hover:text-[var(--color-red)] transition-colors group/btn py-2 cursor-pointer"
                  >
                    Leer testimonio <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Modal / Ficha Completa */}
      {selectedTestimonial && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonio completo de ${selectedTestimonial.name}`}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-opacity animate-fade-in"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-wine)]/10 max-w-3xl w-full relative flex flex-col max-h-[90vh] md:max-h-[85vh] animate-scale-up">
            
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[var(--color-text)] hover:text-[var(--color-red)] transition-colors cursor-pointer border border-[var(--color-wine)]/10 shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                
                {/* Columna Izquierda: Foto */}
                <div className="md:col-span-4 w-full">
                  <div className="relative w-full aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-wine)]/10 to-[var(--color-magenta)]/20 border border-[var(--color-wine)]/10 shadow-md">
                    <TestimonialModalAvatar 
                      src={selectedTestimonial.image} 
                      alt={selectedTestimonial.name} 
                      initials={selectedTestimonial.initials} 
                    />
                  </div>
                </div>

                {/* Columna Derecha: Testimonio completo y CTA */}
                <div className="md:col-span-8 flex flex-col relative overflow-hidden">
                  
                  {/* Mascota Watermark de fondo sutil en Modal */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.08] pointer-events-none select-none z-0 mascot-watermark">
                    <Image
                      src="/images/brand/mascota-uc.webp"
                      alt="Mascota Watermark"
                      fill
                      className="object-contain object-bottom-right"
                      sizes="128px"
                    />
                  </div>

                  <span className="text-[var(--color-magenta)] text-xs font-bold uppercase tracking-wider pl-0.5 relative z-10">
                    {selectedTestimonial.program}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-[var(--color-text)] leading-tight mt-1 mb-2 relative z-10">
                    {selectedTestimonial.name}
                  </h3>
                  
                  <p className="text-xs text-[var(--color-text)]/50 font-semibold uppercase tracking-widest pl-0.5 mb-6 relative z-10">
                    {selectedTestimonial.generation}
                  </p>

                  <div className="relative mb-6 z-10">
                    <Quote className="h-10 w-10 text-[var(--color-wine)]/5 absolute -top-4 -left-4 pointer-events-none" />
                    <p className="text-[var(--color-text)]/80 text-sm sm:text-base leading-relaxed italic relative z-10 pl-2">
                      "{selectedTestimonial.fullText}"
                    </p>
                  </div>

                  <div className="mt-4 pt-6 border-t border-[var(--color-muted)] relative z-10">
                    <Button
                      href={createWhatsAppLink(selectedTestimonial.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="bg-[var(--color-wine)] text-white hover:bg-[var(--color-red)] shadow-lg shadow-[var(--color-wine)]/20 w-full sm:w-auto"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Solicitar información
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </Section>
  )
}
