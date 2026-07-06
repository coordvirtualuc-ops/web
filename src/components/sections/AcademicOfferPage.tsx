"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Clock, 
  MessageCircle, 
  Award, 
  Globe,
  Sparkles,
  Compass,
  ArrowUpRight,
  HelpCircle
} from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { createWhatsAppLink } from "@/lib/whatsapp"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { ProgramCatalog } from "./ProgramCatalog"
import { ProgramDetailModal } from "./ProgramDetailModal"
import { ProgramCard } from "@/components/ui/ProgramCard"
import { AcademicProgram, academicPrograms, programCategories, getFeaturedPrograms } from "@/content/programs"

export function AcademicOfferPage() {
  const [selectedProgram, setSelectedProgram] = React.useState<AcademicProgram | null>(null)
  const [activeCategory, setActiveCategory] = React.useState<string>("Todas")

  const searchParams = useSearchParams()

  React.useEffect(() => {
    const categoriaParam = searchParams.get("categoria")
    if (categoriaParam) {
      const decodedParam = decodeURIComponent(categoriaParam)
      if (decodedParam === "Todas" || programCategories.includes(decodedParam as any)) {
        setActiveCategory(decodedParam)
        
        // Desplazarse al catálogo
        setTimeout(() => {
          const element = document.getElementById("catalogo")
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 150)
      }
    }
  }, [searchParams])

  const totalPrograms = academicPrograms.length
  const totalCategories = programCategories.length

  // WhatsApp Messages
  const generalWpUrl = createWhatsAppLink(
    "Hola, quiero información sobre la oferta académica de UC Universidad Continental."
  )
  
  const finalCTAWhatsAppUrl = createWhatsAppLink(
    "Hola, quiero recibir orientación para formar parte de UC Universidad Continental."
  )

  // Slideshow Logic
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  const slideshowImages = React.useMemo(() => {
    // Filtramos dinámicamente imágenes horizontales válidas del catálogo de programas
    const urls = academicPrograms
      .map((p) => p.image)
      .filter((img) => img && img.startsWith("/images/programas/"))
    return Array.from(new Set(urls)).slice(0, 7)
  }, [])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  React.useEffect(() => {
    if (prefersReducedMotion || slideshowImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [prefersReducedMotion, slideshowImages])

  const handleScrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById("catalogo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSelectCategoryAndScroll = (category: string) => {
    setActiveCategory(category)
    const element = document.getElementById("catalogo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const featuredPrograms = React.useMemo(() => {
    return getFeaturedPrograms()
  }, [])

  const psychologicalRoutes = [
    {
      title: "Estoy por iniciar",
      subtitle: "Enfoque: Bachillerato / Licenciaturas",
      categoryKey: "Licenciaturas",
      desc: "Comienza tu trayectoria profesional con nuestros programas de bachillerato o carreras presenciales y sabatinas.",
      icon: GraduationCap,
      actionText: "Ver licenciaturas",
      color: "from-[var(--color-wine)]/5 to-[var(--color-wine)]/10 text-[var(--color-wine)] hover:border-[var(--color-wine)]/20",
    },
    {
      title: "Quiero crecer profesionalmente",
      subtitle: "Enfoque: Posgrados / Educación Continua",
      categoryKey: "Posgrados",
      desc: "Lleva tu especialidad al siguiente nivel con maestrías diseñadas para líderes del sector público y corporativo.",
      icon: Award,
      actionText: "Ver posgrados",
      color: "from-[var(--color-red)]/5 to-[var(--color-red)]/10 text-[var(--color-red)] hover:border-[var(--color-red)]/20",
    },
    {
      title: "Necesito flexibilidad",
      subtitle: "Enfoque: Estudia en Línea / Idiomas",
      categoryKey: "Estudia en Línea",
      desc: "Estudia de forma remota a través de UC Virtual o especialízate en lenguas extranjeras con horarios dinámicos.",
      icon: Globe,
      actionText: "Ver modalidad en línea",
      color: "from-amber-600/5 to-amber-600/10 text-amber-800 hover:border-amber-600/20",
    },
  ]

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-x-hidden">
      
      {/* 1. HERO CON CARRUSEL DE FONDO */}
      <section className="relative w-full overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32 flex items-center min-h-[85vh]">
        
        {/* Fondo Carrusel Slideshow (Estilo Claro) */}
        <div className="absolute inset-0 z-0 bg-[var(--color-cream)]">
          {slideshowImages.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                prefersReducedMotion
                  ? idx === 0 ? "opacity-[0.08]" : "opacity-0"
                  : idx === currentSlide ? "opacity-[0.08]" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-center grayscale opacity-80"
                sizes="100vw"
              />
            </div>
          ))}
          
          {/* Overlay de gradiente claro para contraste sobre fondo claro */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-cream)]/90 lg:via-[var(--color-cream)]/75 to-transparent z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Columna Izquierda: Textos, CTAs y Barra de Métricas */}
            <div className="flex flex-col items-start lg:col-span-7 text-[var(--color-text)]">
              
              <AnimatedReveal direction="up" delay={0.1}>
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-6 text-balance text-[var(--color-wine)]">
                  Oferta Académica <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-[var(--color-text)]/75 md:text-xl leading-relaxed mb-10 text-balance max-w-2xl font-medium">
                  Explora programas diseñados para acompañar tu formación profesional con enfoque humano, flexible y actualizado.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    onClick={handleScrollToCatalog}
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 bg-[var(--color-red)] text-white hover:bg-white hover:text-[var(--color-wine)] h-13 rounded-xl cursor-pointer shadow-lg transition-all"
                  >
                    Explorar programas
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    href={generalWpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)]/5 h-13 rounded-xl cursor-pointer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Hablar con admisiones
                  </Button>
                </div>
              </AnimatedReveal>

              {/* Barra de Métricas Integrada y Sobria sobre fondo claro */}
              <AnimatedReveal direction="up" delay={0.4} className="w-full">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-[var(--color-wine)]/10 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-black text-[var(--color-red)]">{totalPrograms}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text)]/65 leading-tight">
                      Programas<br />Académicos
                    </span>
                  </div>
                  <div className="w-px h-8 bg-[var(--color-wine)]/10 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-black text-[var(--color-red)]">{totalCategories}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text)]/65 leading-tight">
                      Áreas de<br />Estudio
                    </span>
                  </div>
                  <div className="w-px h-8 bg-[var(--color-wine)]/10 hidden sm:block" />
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-[var(--color-wine)]/5 rounded-lg border border-[var(--color-wine)]/10 shrink-0">
                      <Users className="h-4 w-4 text-[var(--color-red)]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text)]/65 leading-tight">
                      Acompañamiento<br />Cercano
                    </span>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Guía visual Mascota en Móvil (Estilo claro) */}
              <AnimatedReveal direction="up" delay={0.5} className="w-full">
                <div className="flex items-center gap-3 lg:hidden mt-8 bg-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 p-3.5 rounded-2xl max-w-sm">
                  <div className="relative w-10 h-10 shrink-0 mascot-float">
                    <Image
                      src="/images/brand/mascota-uc.webp"
                      alt="Mascota Guía"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-wine)]">Asesoría UC</p>
                    <p className="text-[10px] text-[var(--color-text)]/75 leading-snug">Te ayudo a encontrar tu programa ideal.</p>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Columna Derecha: Mascota Acompañante con Burbuja en Desktop */}
            <div className="hidden lg:flex flex-col items-center lg:col-span-5 relative select-none">
              <AnimatedReveal direction="left" delay={0.4} className="w-full flex flex-col items-center">
                {/* Contenedor relativo para centrar el búho y la burbuja */}
                <div className="relative flex flex-col items-center">
                  {/* Burbuja de Diálogo Alineada */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[var(--color-wine)] px-4 py-2 rounded-2xl border border-[var(--color-wine)]/10 shadow-xl text-xs font-bold animate-bounce-subtle z-30 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-ping shrink-0" />
                    Te ayudo a encontrar tu programa.
                  </div>
                  {/* Imagen de la Mascota Escalada Responsivamente */}
                  <div className="relative w-80 h-80 xl:w-96 xl:h-96 2xl:w-[26rem] 2xl:h-[26rem] mascot-float overflow-hidden">
                    <Image
                      src="/images/brand/mascota-uc.webp"
                      alt="Mascota UC Guía"
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 1280px) 320px, (max-width: 1536px) 384px, 416px"
                      priority
                    />
                  </div>
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE ENTRADA PSICOLÓGICA */}
      <Section id="entrada-psicologica" background="wine" padding="lg" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedReveal direction="up">
            <span className="text-xs font-black uppercase tracking-widest text-[var(--color-cream)]/70">
              Orientación Personalizada
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5 tracking-tight leading-tight">
              Encuentra una ruta que tenga sentido para ti
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-cream)]/80 max-w-2xl mx-auto leading-relaxed">
              No todos llegan buscando lo mismo. Algunos quieren iniciar, otros especializarse, otros estudiar con más flexibilidad. La oferta académica UC está organizada para ayudarte a elegir con claridad.
            </p>
          </AnimatedReveal>
        </div>

        {/* Tarjetas de Ruta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {psychologicalRoutes.map((route, idx) => {
            const Icon = route.icon
            return (
              <AnimatedReveal
                key={idx}
                direction="up"
                delay={0.1 * idx}
              >
                <div
                  onClick={() => handleSelectCategoryAndScroll(route.categoryKey)}
                  className={`group relative flex flex-col justify-between p-8 bg-white border border-[var(--color-wine)]/5 rounded-[2rem] hover:shadow-xl hover:shadow-[var(--color-wine)]/5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden h-full`}
                >
                  <div>
                    {/* Icono de Ruta */}
                    <div className="inline-flex p-3 bg-[var(--color-cream)] text-[var(--color-wine)] rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-[var(--color-red)]" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-[var(--color-text)] tracking-tight leading-snug mb-1 group-hover:text-[var(--color-red)] transition-colors">
                      {route.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[var(--color-red)] uppercase tracking-wider mb-4 opacity-75">
                      {route.subtitle}
                    </p>
                    
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/65 leading-relaxed mb-6 font-sans">
                      {route.desc}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-xs font-bold text-[var(--color-wine)] group-hover:text-[var(--color-red)] uppercase tracking-wider gap-1.5 transition-colors pt-2">
                    {route.actionText} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </AnimatedReveal>
            )
          })}
        </div>
      </Section>

      {/* 3. SECCIÓN PROGRAMAS DESTACADOS */}
      {featuredPrograms.length > 0 && (
        <Section id="programas-destacados" background="default" padding="lg" className="border-b border-[var(--color-wine)]/5 relative overflow-hidden">
          
          {/* Mascota Watermark Background */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 opacity-[0.03] pointer-events-none select-none z-0 mascot-watermark">
            <Image
              src="/images/brand/mascota-uc.webp"
              alt="Watermark"
              fill
              className="object-contain"
              sizes="192px"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimatedReveal direction="right">
              <span className="text-xs font-black uppercase tracking-widest text-[var(--color-red)]">
                Selección Curada
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-wine)] mt-2 tracking-tight uppercase leading-tight">
                Programas destacados
              </h2>
              <p className="text-sm text-[var(--color-text)]/60 max-w-lg mt-1">
                Conoce las carreras y especialidades con mayor demanda y proyección dentro de nuestra comunidad.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="left" className="shrink-0">
              <button
                onClick={handleScrollToCatalog}
                className="inline-flex items-center text-xs font-bold text-[var(--color-wine)] hover:text-[var(--color-red)] uppercase tracking-wider gap-1.5 transition-colors group cursor-pointer"
              >
                Explora toda la oferta académica
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </button>
            </AnimatedReveal>
          </div>

          {/* Fila de destacados utilizando ProgramCard */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {featuredPrograms.slice(0, 4).map((program, idx) => (
              <AnimatedReveal
                key={program.id}
                direction="up"
                delay={0.05 * idx}
                className="h-full"
              >
                <div className="h-full scale-[0.98] hover:scale-[1] transition-transform duration-300">
                  <div className="absolute -top-3 left-4 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-[var(--color-red)] text-white rounded-md shadow-md">
                      <Sparkles className="h-3 w-3 shrink-0 animate-pulse" /> Destacado
                    </span>
                  </div>
                  <ProgramCard
                    program={program}
                    onOpenDetails={setSelectedProgram}
                  />
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Section>
      )}

      {/* 4. CATÁLOGO DE PROGRAMAS */}
      <ProgramCatalog
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onOpenDetails={setSelectedProgram}
      />

      {/* 5. MODAL DE DETALLE DETALLADO */}
      <ProgramDetailModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />

      {/* 6. CTA FINAL MEJORADO */}
      <section className="w-full py-20 sm:py-28 bg-white border-t border-[var(--color-wine)]/5">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2rem] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl">
            
            {/* Patrón de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_65%)] opacity-20" />

            {/* Acompañante Mascota */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-48 sm:h-48 opacity-[0.11] lg:opacity-[0.14] pointer-events-none select-none z-0 mascot-float">
              <Image
                src="/images/brand/mascota-uc.webp"
                alt="Mascota UC"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-center flex flex-col items-center">
              <AnimatedReveal direction="up">
                <span className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#F8F5F2] bg-white/10 border border-white/10 rounded">
                  Tu futuro inicia hoy
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-white">
                  Tu siguiente paso empieza con una decisión clara
                </h2>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <p className="text-sm sm:text-base text-[var(--color-cream)]/85 leading-relaxed text-balance max-w-xl">
                  Explora los programas, resuelve tus dudas y recibe orientación para elegir la opción que mejor se adapte a tus objetivos.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3} className="w-full">
                <div className="pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    href={finalCTAWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="flex items-center justify-center gap-2 px-8 h-13 shadow-xl bg-[var(--color-red)] text-white hover:bg-white hover:text-[var(--color-wine)] border-none rounded-xl font-bold cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    Hablar con admisiones
                  </Button>
                  
                  <Button
                    href="/inscribete"
                    variant="outline"
                    size="lg"
                    className="border-white/35 text-white hover:bg-white/10 h-13 rounded-xl cursor-pointer font-bold"
                  >
                    Iniciar inscripción
                  </Button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
