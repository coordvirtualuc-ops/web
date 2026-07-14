"use client"

import * as React from "react"
import Image from "next/image"
import { 
  ArrowRight, 
  MessageCircle, 
  Target, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Compass, 
  Eye, 
  Award,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  Sparkles
} from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"
import { createWhatsAppLink } from "@/lib/whatsapp"

export function IdentityPage() {
  // WhatsApp Link for final CTA
  const whatsappUrl = createWhatsAppLink(
    "Hola, quiero recibir orientación sobre UC Universidad Continental."
  )

  const pilaresModelo = [
    {
      title: "Formación Humanista",
      description: "Fomentamos la honestidad, el respeto, la responsabilidad, la empatía, la lealtad y la tolerancia como base del actuar profesional.",
      icon: Compass,
    },
    {
      title: "Excelencia Académica",
      description: "Brindamos una formación de calidad, pertinente e innovadora para responder a los retos del entorno profesional.",
      icon: Award,
    },
    {
      title: "Aprendizaje basado en Proyectos Transversales",
      description: "Integramos los conocimientos de distintas asignaturas para desarrollar proyectos que resuelven necesidades reales de empresas, organizaciones y comunidades.",
      icon: Target,
    },
    {
      title: "Vinculación con la Comunidad",
      description: "Promovemos el servicio, la participación y la responsabilidad social como parte de la formación universitaria.",
      icon: BookOpen,
    },
    {
      title: "Impacto Social",
      description: "Formamos profesionales capaces de generar cambios positivos que contribuyan al bienestar de su comunidad y de la sociedad.",
      icon: GraduationCap,
    },
    {
      title: "Desarrollo Integral",
      description: "Impulsamos el crecimiento personal, ético y profesional para formar líderes comprometidos con la transformación de su entorno.",
      icon: Heart,
    },
  ]

  const valores = [
    "Calidad",
    "Honestidad",
    "Lealtad",
    "Respeto",
    "Responsabilidad",
    "Tolerancia",
    "Empatía"
  ]

  const porQueElegir = [
    {
      title: "Titulación con Validez Oficial",
      desc: "Todos nuestros programas cuentan con RVOE y están avalados por la SEP y la Dirección General de Profesiones (DGP), lo que te permite obtener tu título y cédula profesional con reconocimiento oficial."
    },
    {
      title: "Concluye tu carrera en 3 años",
      desc: "Nuestros planes de estudio están diseñados para que obtengas tu formación profesional en tres años, permitiéndote incorporarte antes al mercado laboral o continuar con estudios de posgrado."
    },
    {
      title: "Certificación Internacional en Inglés",
      desc: "Nuestros estudiantes egresan con Certificación Cambridge B1, fortaleciendo sus competencias y ampliando sus oportunidades académicas y laborales."
    },
    {
      title: "Vinculación con el Sector Productivo",
      desc: "Contamos con convenios con instituciones públicas y privadas donde podrás realizar prácticas profesionales y servicio social, generando experiencia y oportunidades de empleo."
    },
    {
      title: "Formación para Emprender",
      desc: "Impulsamos una línea de formación en emprendimiento para desarrollar habilidades de liderazgo, innovación y creación de proyectos que generen valor para la sociedad."
    },
    {
      title: "Docentes con Experiencia Profesional",
      desc: "Aprende de profesores con estudios de posgrado y experiencia activa en su campo profesional, quienes enriquecen el aprendizaje con casos y conocimientos del entorno laboral."
    },
    {
      title: "Grupos Reducidos",
      desc: "Nuestros grupos pequeños favorecen un acompañamiento académico cercano, atención personalizada y un mejor seguimiento del desarrollo de cada estudiante."
    },
    {
      title: "Aprendizaje Basado en Proyectos Transversales",
      desc: "Integramos los conocimientos de distintas asignaturas mediante proyectos que responden a necesidades reales de empresas, organizaciones y comunidades, fortaleciendo la experiencia práctica y el compromiso social."
    },
    {
      title: "Modalidades y Horarios Flexibles",
      desc: "Elige la modalidad que mejor se adapte a tu estilo de vida: presencial, mixta o virtual, con horarios diseñados para estudiantes que trabajan, emprenden o tienen otras responsabilidades."
    },
    {
      title: "Múltiples Opciones de Titulación",
      desc: "Ofrecemos diversas modalidades de titulación para que puedas elegir la opción que mejor se adapte a tu perfil académico y profesional."
    }
  ]

  return (
    <div className="w-full bg-[var(--color-cream)] overflow-x-hidden">
      
      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative w-full overflow-hidden bg-[var(--color-cream)] pt-24 pb-20 lg:pt-36 lg:pb-32 flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0 bg-[var(--color-cream)]">
          <Image
            src="/images/heroo-bg.webp" 
            alt="Fondo institucional UC"
            fill
            priority
            className="object-cover object-[70%_center] opacity-20 sm:opacity-35 lg:opacity-45 mix-blend-multiply"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream)] via-[var(--color-cream)]/90 lg:via-[var(--color-cream)]/75 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/20 to-transparent z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Texto Hero */}
            <div className="flex flex-col items-start lg:col-span-7">
              <AnimatedReveal direction="up" delay={0.1}>
                <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-red)] bg-[var(--color-red)]/10 rounded-full mb-5">
                  Identidad UC
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight text-[var(--color-wine)] leading-[1.1] mb-10 text-balance uppercase">
                  “En UC la sabiduría no solo se aprende, <span className="text-[var(--color-red)]">también se vive.</span>”
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Button
                    href="/oferta-academica"
                    variant="primary"
                    size="lg"
                    className="group text-base px-8 shadow-xl shadow-[var(--color-red)]/15 bg-[var(--color-red)] text-white hover:bg-[var(--color-wine)] h-13 rounded-xl cursor-pointer"
                  >
                    Conoce la oferta académica
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    href="/inscribete"
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-wine)]/30 text-[var(--color-wine)] hover:bg-[var(--color-wine)] hover:text-white backdrop-blur-md h-13 rounded-xl cursor-pointer"
                  >
                    Inscríbete
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            {/* Mascota en Hero */}
            <div className="flex justify-center lg:col-span-5 w-full select-none">
              <AnimatedReveal direction="left" delay={0.3} className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-wine)]/5 to-[var(--color-red)]/5 rounded-full blur-2xl z-0" />
                <div className="relative w-full h-full mascot-float z-10">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Nayo - Guardián del Conocimiento"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 280px, 400px"
                  />
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEMBLANZA INSTITUCIONAL & VIDEO */}
      <Section id="semblanza" background="light" padding="lg" className="border-t border-[var(--color-wine)]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Título y Tarjeta de Video */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 tracking-tight uppercase leading-tight">
                Semblanza de UC Universidad Continental
              </h2>
            </AnimatedReveal>

            {/* Bloque de Video Institucional */}
            <AnimatedReveal direction="up" delay={0.2}>
              <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2rem] p-6 sm:p-8 text-white shadow-xl border border-[var(--color-wine)]/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_70%)] opacity-20" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex p-3 bg-white/10 rounded-2xl text-[var(--color-cream)]">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold uppercase">Video Institucional</h3>
                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    Conoce más sobre la historia y esencia de UC. Descubre cómo vivimos nuestra misión educativa día con día.
                  </p>
                  <div className="pt-2">
                    <Button
                      href="https://drive.google.com/file/d/14QXe4oTf-bMGAvTouYItCc0OthFeYjfH/view?resourcekey"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] border-none font-bold rounded-xl cursor-pointer inline-flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                    >
                      Ver video institucional
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Columna Derecha: Texto de Semblanza */}
          <div className="lg:col-span-7">
            <AnimatedReveal direction="left" delay={0.2} className="space-y-6 text-sm sm:text-base text-[var(--color-text)]/85 leading-relaxed font-sans text-balance">
              <p>
                En el 2010 UC Universidad Continental nace como proyecto de titulación de una egresada de la licenciatura en Ciencias de la Educación de la Universidad Autónoma de Nayarit, el cual consistía en la creación de una institución de nivel superior.
              </p>
              <p>
                De 2012 a 2015 se inicia con el diseño del Modelo Educativo Humanista por expertos en el área del diseño curricular, y con una firme convicción de amor a la educación, que a través de sus conocimientos adquiridos, poder consolidar una institución que aporte y retribuya a la sociedad como un eje transformador de profesionistas integrales, consolidándose con un modelo formativo enfocado al desarrollo humano.
              </p>
              <p>
                En el 2017 UC Universidad Continental se consolida legalmente con la validez oficial por parte de la Secretaría de Educación Pública y la Dirección General de Profesiones y así da inicio a su primera generación llevando como objetivo principal, calidad educativa y responsabilidad social.
              </p>
              <p>
                Se cuenta con una mesa directiva profesional en el área de la educación, centrada en los procesos de innovación educativa, con actitud de servicio, responsabilidad social y compromiso ético.
              </p>
              <p>
                Actualmente se cuenta con 8 generaciones de alumnos egresados, los cuales ya se encuentran en el campo laboral representando dignamente a esta noble institución.
              </p>
              <p>
                Existe la inmensa satisfacción de colaborar en UC, pero ante todo existe la inmensa satisfacción de servir a nuestros estudiantes para una verdadera transformación integral.
              </p>
              <p className="font-bold text-[var(--color-red)] text-lg border-t border-[var(--color-wine)]/10 pt-4 mt-8">
                Educación para la humanidad.
              </p>
            </AnimatedReveal>
          </div>

        </div>
      </Section>

      {/* 3. MODELO EDUCATIVO HUMANISTA */}
      <Section id="modelo-educativo" background="default" padding="lg" className="relative overflow-hidden border-t border-[var(--color-wine)]/5">
        
        {/* Mascota Watermark Background */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.03] pointer-events-none select-none z-0 mascot-watermark">
          <Image
            src="/images/brand/mascota-uc.webp"
            alt="Mascota Watermark"
            fill
            className="object-contain"
            sizes="256px"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
              Enfoque Pedagógico
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 mb-4 tracking-tight uppercase">
              Modelo Educativo Humanista
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text)]/85 max-w-2xl mx-auto leading-relaxed text-balance">
              Formamos personas y profesionales con excelencia académica, valores y sentido humanista, promoviendo el pensamiento crítico, la innovación y el compromiso social para transformar positivamente su entorno.
            </p>
          </AnimatedReveal>
        </div>

        {/* Pilares Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pilaresModelo.map((pilar, idx) => {
            const IconComponent = pilar.icon
            return (
              <AnimatedReveal 
                key={idx} 
                direction="up" 
                delay={idx * 0.05}
                className="group flex flex-col p-6 sm:p-8 bg-white rounded-[2rem] border border-[var(--color-wine)]/5 hover:border-[var(--color-red)]/20 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--color-wine)]/5 text-[var(--color-red)] mb-5 group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-wine)] transition-colors uppercase">
                  {pilar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text)]/70 leading-relaxed font-sans">
                  {pilar.description}
                </p>
              </AnimatedReveal>
            )
          })}
        </div>
      </Section>

      {/* 4. FILOSOFÍA INSTITUCIONAL */}
      <Section id="filosofia" background="wine" padding="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-cream)]/70">
              Nuestra Misión y Visión
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight uppercase">
              Filosofía Institucional
            </h2>
          </AnimatedReveal>
        </div>

        {/* Misión y Visión */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Misión */}
          <AnimatedReveal direction="up" delay={0.1} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-[var(--color-cream)] mb-6">
              <Target className="h-6 w-6 text-[var(--color-red)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Misión</h3>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans">
              Formar seres humanos con capacidades profesionales que generen conocimientos de excelencia académica, para la resolución de problemáticas sociales, promoviendo el desarrollo sustentable comunitario, con actitud crítica y reflexiva, así como valores para la consolidación de una sociedad más justa, solidaria, humanista e inclusiva.
            </p>
          </AnimatedReveal>

          {/* Visión */}
          <AnimatedReveal direction="up" delay={0.2} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-[var(--color-cream)] mb-6">
              <Eye className="h-6 w-6 text-[var(--color-red)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Visión</h3>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans">
              Posicionarse como una institución reconocida por su nivel académico, consolidada y de prestigio; que forma egresados de excelencia y con valores capaces de transformar su entorno.
            </p>
          </AnimatedReveal>

        </div>
      </Section>

      {/* 5. VALORES UC */}
      <Section id="valores" background="light" padding="lg" className="border-b border-[var(--color-wine)]/5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
              Pilares de Conducta
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 tracking-tight uppercase">
              Valores Institucionales UC
            </h2>
          </AnimatedReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
          {valores.map((val, idx) => (
            <AnimatedReveal 
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[var(--color-wine)] hover:text-white rounded-xl border border-[var(--color-wine)]/5 transition-all duration-300 group cursor-default shadow-xs"
            >
              <CheckCircle2 className="h-4 w-4 text-[var(--color-red)] group-hover:text-white transition-colors shrink-0" />
              <span className="text-sm sm:text-base font-bold text-[var(--color-text)] group-hover:text-white transition-colors">
                {val}
              </span>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* 6. ¿POR QUÉ ELEGIR UC? */}
      <Section id="elegir-uc" background="muted" padding="lg" className="border-b border-[var(--color-wine)]/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
                Ventajas de nuestra propuesta
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 mb-4 tracking-tight uppercase">
                ¿Por qué elegir UC Universidad Continental?
              </h2>
              <p className="text-base sm:text-lg text-[var(--color-text)]/80 leading-relaxed text-balance">
                Formamos profesionales con excelencia académica, visión humanista y experiencia práctica para transformar su entorno y construir un futuro con mayores oportunidades.
              </p>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {porQueElegir.map((punto, idx) => (
              <AnimatedReveal 
                key={idx}
                direction="up"
                delay={idx * 0.04}
                className="group p-6 sm:p-8 bg-white rounded-[2rem] border border-[var(--color-wine)]/5 hover:border-[var(--color-red)]/20 hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-wine)]/5 text-[var(--color-red)] group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors shrink-0 mt-0.5 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-wine)] transition-colors">
                      {punto.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text)]/70 leading-relaxed font-sans">
                      {punto.desc}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

        </div>
      </Section>

      {/* 7. MASCOTA INSTITUCIONAL */}
      <Section id="mascota-institucional" background="light" padding="lg" className="border-b border-[var(--color-wine)]/5 relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Nayo Grande */}
            <div className="lg:col-span-5 flex justify-center w-full select-none">
              <AnimatedReveal direction="right" className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-wine)]/5 to-[var(--color-red)]/5 rounded-full blur-2xl z-0" />
                <div className="relative w-full h-full mascot-float z-10">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Nayo - Guardián del Conocimiento"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 280px, 400px"
                  />
                </div>
              </AnimatedReveal>
            </div>

            {/* Columna Derecha: Texto de la Mascota */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedReveal direction="left">
                <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-red)] bg-[var(--color-red)]/10 rounded-full">
                  Identidad y Símbolos
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-3 mb-5 tracking-tight uppercase leading-tight">
                  Nayo, el Guardián del Conocimiento
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-text)]/80 leading-relaxed font-sans text-balance">
                  Nayo es la mascota oficial de UC Universidad Continental y representa el espíritu de la institución: una educación centrada en la sabiduría, el pensamiento crítico, la empatía y el compromiso con la transformación social.
                </p>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section id="cta-final" background="light" padding="lg" className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2rem] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          
          {/* Patrones de fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_60%)] opacity-20" />
          
          {/* Mascota en el CTA */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 opacity-[0.12] pointer-events-none select-none z-0 mascot-float">
            <Image
              src="/images/brand/mascota-uc.webp"
              alt="Mascota UC en Cierre"
              fill
              className="object-contain object-bottom-right"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 224px"
            />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col items-start">
            <AnimatedReveal direction="up">
              <span className="inline-block px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 rounded-full mb-5">
                Da el primer paso
              </span>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 text-balance leading-tight uppercase">
                Construye tu camino profesional en UC
              </h2>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2}>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-10 text-balance leading-relaxed">
                Explora nuestra oferta académica y recibe orientación para elegir el programa que mejor se adapte a tus objetivos.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.3} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button 
                  href="/oferta-academica" 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wine)] shadow-lg shadow-black/10 h-13 rounded-xl cursor-pointer font-bold"
                >
                  Ver oferta académica
                </Button>
                <Button 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 h-13 rounded-xl cursor-pointer font-bold"
                >
                  <MessageCircle className="mr-2 h-5 w-5 fill-white/10" />
                  Hablar con admisiones
                </Button>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </Section>

    </div>
  )
}
