"use client"

import * as React from "react"
import Image from "next/image"
import { 
  ArrowRight, 
  MessageCircle, 
  Heart, 
  Compass, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  Users, 
  Handshake, 
  Target,
  Smile,
  ChevronRight
} from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink } from "@/lib/whatsapp"

export function StudentLifePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  // WhatsApp Links
  const whatsappGeneralUrl = createWhatsAppLink(
    "Hola, quiero conocer más sobre UC Universidad Continental."
  )
  const whatsappCTAUrl = createWhatsAppLink(
    "Hola, quiero recibir orientación para formar parte de UC Universidad Continental."
  )

  const slideshowImages = [
    "/images/vida-uc/aula.webp",
    "/images/vida-uc/comunidad.webp",
    "/images/vida-uc/actividades.webp",
    "/images/vida-uc/acompanamiento.webp"
  ]

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  React.useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [prefersReducedMotion, slideshowImages.length])

  const pilaresExperiencia = [
    {
      title: "Acompañamiento cercano",
      description: "Orientación personalizada y constante para guiarte en tu camino académico.",
      icon: Heart,
    },
    {
      title: "Ambiente académico humano",
      description: "Un espacio de respeto y colaboración enfocado en tu bienestar integral.",
      icon: Compass,
    },
    {
      title: "Formación para la vida profesional",
      description: "Habilidades prácticas y teóricas alineadas a las demandas laborales reales.",
      icon: GraduationCap,
    },
  ]

  const galeriaEditorial = [
    {
      title: "Comunidad conectada",
      image: "/images/vida-uc/comunidad.webp",
      colSpan: "md:col-span-8", 
      aspect: "aspect-video md:aspect-[16/9]"
    },
    {
      title: "Aprendizaje activo",
      image: "/images/vida-uc/aula.webp",
      colSpan: "md:col-span-4",
      aspect: "aspect-[4/3] md:aspect-[3/4]"
    },
    {
      title: "Espacios de desarrollo",
      image: "/images/vida-uc/actividades.webp",
      colSpan: "md:col-span-4",
      aspect: "aspect-[4/3] md:aspect-[3/4]"
    },
    {
      title: "Acompañamiento",
      image: "/images/vida-uc/acompanamiento.webp",
      colSpan: "md:col-span-8",
      aspect: "aspect-video md:aspect-[16/9]"
    },
  ]

  const actividades = [
    {
      title: "Actividades académicas",
      description: "Talleres, conferencias y dinámicas enfocadas en enriquecer tu desarrollo profesional.",
      icon: Award,
    },
    {
      title: "Proyectos formativos",
      description: "Iniciativas prácticas que te permiten aplicar lo aprendido directamente en casos reales.",
      icon: BookOpen,
    },
    {
      title: "Eventos institucionales",
      description: "Encuentros, ceremonias y jornadas que celebran el talento y los logros de nuestra comunidad.",
      icon: Sparkles,
    },
    {
      title: "Vida estudiantil",
      description: "Una experiencia activa que fomenta la integración, el compañerismo y el sentido de pertenencia.",
      icon: Users,
    },
    {
      title: "Participación y colaboración",
      description: "Proyectos grupales y comunitarios que promueven el trabajo en equipo y el impacto social.",
      icon: Handshake,
    },
    {
      title: "Desarrollo personal",
      description: "Acompañamiento integral que impulsa tu crecimiento ético, emocional e intelectual.",
      icon: Target,
    },
  ]

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-x-hidden">
      
      {/* 1. HERO CON CARRUSEL DE FONDO */}
      <section className="relative w-full overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32 flex items-center min-h-[85vh]">
        
        {/* Fondo Carrusel Slideshow */}
        <div className="absolute inset-0 z-0 bg-[var(--color-cream)]">
          {slideshowImages.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                prefersReducedMotion
                  ? idx === 0 ? "opacity-15" : "opacity-0"
                  : idx === currentSlide ? "opacity-15" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide Vida UC ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover object-center grayscale opacity-80"
                sizes="100vw"
              />
            </div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-cream)]/90 lg:via-[var(--color-cream)]/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-[var(--color-cream)]/30 z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Texto Hero */}
            <div className="flex flex-col items-start lg:col-span-7">
              <AnimatedReveal direction="up" delay={0.1}>
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-red)] bg-[var(--color-red)]/5 rounded-full mb-6 border border-[var(--color-red)]/10 shadow-sm backdrop-blur-sm">
                  Experiencia Estudiantil
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <h1 className="text-4xl font-black tracking-tight text-[var(--color-wine)] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6 text-balance drop-shadow-sm">
                  Vida <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <p className="text-lg sm:text-xl text-[var(--color-text)] md:text-2xl leading-relaxed mb-10 text-balance max-w-xl font-medium">
                  Experiencias académicas, culturales y profesionales que impulsarán tu desarrollo personal y profesional.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    href="/oferta-academica"
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 shadow-xl shadow-[var(--color-red)]/20 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] h-14 rounded-2xl cursor-pointer transition-all duration-300"
                  >
                    Conoce la oferta académica
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/20 text-[var(--color-wine)] hover:bg-[var(--color-wine)]/5 backdrop-blur-md h-14 rounded-2xl cursor-pointer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Hablar con admisiones
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            {/* Mascota en Hero (Más Protagónica) */}
            <div className="flex justify-center lg:col-span-5 w-full relative">
              <AnimatedReveal direction="left" delay={0.3} className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[450px] aspect-square flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-wine)]/10 to-[var(--color-red)]/10 rounded-full blur-3xl z-0" />
                
                {/* Burbuja de diálogo */}
                <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-2xl shadow-xl shadow-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 z-20 whitespace-nowrap animate-float-slow">
                  <p className="text-sm sm:text-base font-bold text-[var(--color-wine)] flex items-center gap-2">
                    <span>👋</span> Bienvenido a tu nueva casa
                  </p>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-[var(--color-wine)]/10" />
                </div>

                <div className="relative w-full h-full mascot-float z-10">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota UC"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 300px, 450px"
                  />
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BLOQUE EDITORIAL - VIVIR LA EXPERIENCIA UC */}
      <Section id="vivir-experiencia" background="wine" padding="lg">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cream)]/80">
              Formación con Sentido
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 tracking-tight">
              Vivir la experiencia UC
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-cream)]/90 leading-relaxed font-sans text-balance">
              Estudiar en UC es formar parte de una comunidad que acompaña tu crecimiento académico, personal y profesional.
            </p>
          </AnimatedReveal>
        </div>

        {/* 3 Ideas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pilaresExperiencia.map((pilar, idx) => {
            const IconComp = pilar.icon
            return (
              <AnimatedReveal 
                key={idx} 
                direction="up" 
                delay={idx * 0.1}
                className="flex flex-col items-center text-center p-8 sm:p-10 bg-white rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-cream)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--color-cream)] text-[var(--color-wine)] mb-6 relative z-10 group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors duration-500">
                  <IconComp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-wine)] mb-4 relative z-10">
                  {pilar.title}
                </h3>
                <p className="text-base text-[var(--color-text)]/80 leading-relaxed font-sans relative z-10">
                  {pilar.description}
                </p>
              </AnimatedReveal>
            )
          })}
        </div>
      </Section>

      {/* 3. GALERÍA EDITORIAL */}
      <Section id="galeria" background="default" padding="lg">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
              Experiencia Universitaria
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-3 mb-6 tracking-tight">
              Nuestra comunidad en acción
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text)]/80 leading-relaxed font-sans text-balance">
              Momentos que definen el espíritu, la colaboración y el aprendizaje en nuestros espacios.
            </p>
          </AnimatedReveal>
        </div>

        {/* Layout Asimétrico Editorial */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {galeriaEditorial.map((item, idx) => (
            <AnimatedReveal 
              key={idx} 
              direction="up" 
              delay={idx * 0.1}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-white ${item.colSpan}`}
            >
              <div className={`relative w-full ${item.aspect}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay oscuro premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-2">
                    {item.title}
                    <ChevronRight className="h-6 w-6 text-white/50 group-hover:text-white transition-colors" />
                  </h3>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* 4. BLOQUE ACOMPAÑAMIENTO CERCANO */}
      <Section id="acompanamiento" background="light" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Texto Acompañamiento */}
          <div className="lg:col-span-6">
            <AnimatedReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
                A tu lado
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-3 mb-6 tracking-tight text-balance">
                Acompañamiento cercano en cada etapa
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-text)]/85 mb-8 leading-relaxed font-sans text-balance">
                En UC, el estudiante no recorre su formación solo. Nuestro enfoque busca orientar, resolver dudas y acompañar cada etapa del proceso académico.
              </p>
              
              {/* Puntos de acompañamiento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "Orientación académica",
                  "Comunicación cercana",
                  "Apoyo durante el proceso",
                  "Seguimiento desde admisiones"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[var(--color-cream)]/50 p-3 rounded-xl border border-[var(--color-wine)]/5 hover:border-[var(--color-red)]/10 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-wine)]/5 flex items-center justify-center shrink-0 text-[var(--color-red)]">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-text)]/90">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          {/* Imagen y Mascota */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <AnimatedReveal direction="left" delay={0.2} className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image
                src="/images/vida-uc/acompanamiento.webp"
                alt="Acompañamiento estudiantil"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wine)]/40 to-transparent z-10" />
              
              {/* Mascota overlay sutil guiñando */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 opacity-100 pointer-events-none select-none z-20 mascot-float">
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Mascota UC apoyo"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="128px"
                />
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </Section>

      {/* 5. BLOQUE COMUNIDAD Y ACTIVIDADES */}
      <Section id="actividades" background="wine" padding="lg">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cream)]/70">
              Desarrollo Integral
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 tracking-tight">
              Comunidad y actividades
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-cream)]/90 leading-relaxed font-sans text-balance">
              Enriquecemos tu experiencia universitaria con diversas oportunidades de integración, aprendizaje práctico y colaboración.
            </p>
          </AnimatedReveal>
        </div>

        {/* Cards Actividades Premium */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {actividades.map((act, idx) => {
            const Icon = act.icon
            return (
              <AnimatedReveal 
                key={idx} 
                direction="up" 
                delay={idx * 0.05}
                className="group flex flex-col p-8 sm:p-10 bg-white rounded-[2rem] border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--color-cream)] text-[var(--color-wine)] mb-6 group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors duration-500 shrink-0">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-wine)] mb-4">
                  {act.title}
                </h3>
                <p className="text-base text-[var(--color-text)]/75 leading-relaxed font-sans">
                  {act.description}
                </p>
              </AnimatedReveal>
            )
          })}
        </div>
      </Section>

      {/* 6. TESTIMONIO / FRASE INSTITUCIONAL */}
      <Section id="frase-institucional" background="light" padding="md" className="relative overflow-hidden border-y border-[var(--color-wine)]/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red)]/5 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-wine)]/5 rounded-tr-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center py-10 lg:py-16">
          <AnimatedReveal direction="up" className="flex flex-col items-center">
            <Smile className="h-10 w-10 text-[var(--color-red)] mb-8 opacity-80" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] tracking-tight leading-tight max-w-3xl text-balance">
              “Educación para la humanidad”
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-wine)] to-[var(--color-red)] my-8 rounded-full" />
            <p className="text-lg sm:text-xl text-[var(--color-text)]/85 italic max-w-2xl font-medium">
              Una forma de aprender con sentido humano, criterio profesional y acompañamiento cercano.
            </p>
          </AnimatedReveal>
        </div>
      </Section>

      {/* 7. CTA FINAL */}
      <Section id="cta-final-vida" background="default" padding="lg">
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2.5rem] p-10 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl">
          
          {/* Patrones de fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_60%)] opacity-30" />
          
          {/* Mascota en el CTA */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-100 pointer-events-none select-none z-0 mascot-float">
            <Image
              src="/images/brand/mascota-uc.webp"
              alt="Mascota UC Comunidad"
              fill
              className="object-contain object-bottom-right drop-shadow-xl"
              sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
            />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-start">
            <AnimatedReveal direction="up">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                Forma parte de UC
              </span>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight drop-shadow-sm">
                Inicia tu historia con nosotros
              </h2>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 text-balance leading-relaxed font-medium">
                Explora nuestra oferta académica o solicita orientación para iniciar tu proceso.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.3} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button 
                  href="/oferta-academica" 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wine)] shadow-xl shadow-black/10 h-14 rounded-2xl cursor-pointer transition-colors"
                >
                  Ver oferta académica
                </Button>
                <Button 
                  href="/inscribete" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 h-14 rounded-2xl cursor-pointer backdrop-blur-sm"
                >
                  Inscríbete
                </Button>
                <Button 
                  href={whatsappCTAUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white/10 h-14 rounded-2xl cursor-pointer backdrop-blur-sm"
                >
                  <MessageCircle className="mr-2 h-5 w-5 fill-white/10" />
                  WhatsApp
                </Button>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </Section>

    </div>
  )
}
