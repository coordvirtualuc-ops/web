"use client"

import * as React from "react"
import Image from "next/image"
import { 
  ArrowRight, 
  MessageCircle, 
  Target, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Heart, 
  Compass, 
  Eye, 
  Award,
  CheckCircle2
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
      title: "Aprendizaje con impacto real",
      description: "Nuestros planes de estudio conectan directamente la teoría con retos del entorno laboral actual.",
      icon: Target,
    },
    {
      title: "Profesores altamente capacitados",
      description: "Docentes experimentados en activo que transmiten experiencia práctica además de académica.",
      icon: GraduationCap,
    },
    {
      title: "Programas innovadores y actualizados",
      description: "Plan curricular diseñado para responder a las demandas del mercado profesional contemporáneo.",
      icon: BookOpen,
    },
    {
      title: "Modalidades flexibles según programa",
      description: "Horarios y formatos adaptables para que puedas balancear tu formación y tus compromisos diarios.",
      icon: Clock,
    },
    {
      title: "Acompañamiento cercano",
      description: "Atención personalizada para asegurar tu éxito académico y tu desarrollo personal en cada etapa.",
      icon: Heart,
    },
    {
      title: "Formación con sentido humano",
      description: "Impulsamos valores, ética y el desarrollo integral del estudiante para contribuir a la sociedad.",
      icon: Compass,
    },
  ]

  const valores = [
    { name: "Respeto", desc: "Reconocimiento del valor propio y de los demás." },
    { name: "Responsabilidad", desc: "Cumplimiento consciente de nuestros compromisos." },
    { name: "Compromiso", desc: "Dedicación y entrega hacia metas académicas y sociales." },
    { name: "Servicio", desc: "Disposición para apoyar y aportar valor a nuestra comunidad." },
    { name: "Honestidad", desc: "Actuación con rectitud, ética y transparencia." },
    { name: "Superación", desc: "Búsqueda constante de crecimiento y excelencia." },
    { name: "Humanismo", desc: "El estudiante como centro y fin de toda acción formativa." },
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
                  Quiénes somos
                </span>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.2}>
                <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] mb-6 text-balance">
                  Identidad <span className="text-[var(--color-red)]">UC</span>
                </h1>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-[var(--color-text)]/85 md:text-xl leading-relaxed mb-10 text-balance max-w-2xl font-medium">
                  Una universidad con enfoque humanista, acompañamiento cercano y compromiso con la formación profesional.
                </p>
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={0.4}>
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
            <div className="flex justify-center lg:col-span-5 w-full">
              <AnimatedReveal direction="left" delay={0.3} className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-wine)]/5 to-[var(--color-red)]/5 rounded-full blur-2xl z-0" />
                <div className="relative w-full h-full mascot-float z-10">
                  <Image
                    src="/images/brand/mascota-uc.webp"
                    alt="Mascota UC"
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

      {/* 2. BLOQUE QUIÉNES SOMOS */}
      <Section id="quienes-somos" background="light" padding="lg" className="border-t border-[var(--color-wine)]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5">
            <AnimatedReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
                Nuestra Esencia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 tracking-tight">
                UC Universidad Continental
              </h2>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-7">
            <AnimatedReveal direction="left" delay={0.2}>
              <p className="text-lg sm:text-xl text-[var(--color-text)]/90 leading-relaxed font-sans text-balance">
                Somos una institución educativa enfocada en formar personas con criterio, preparación profesional y sentido humano. Nuestro compromiso es acompañar a cada estudiante en su desarrollo académico, personal and profesional.
              </p>
              <div className="mt-8 h-1 w-20 bg-[var(--color-red)] rounded" />
            </AnimatedReveal>
          </div>

        </div>
      </Section>

      {/* 3. MODELO EDUCATIVO HUMANISTA */}
      <Section id="modelo-educativo" background="default" padding="lg" className="relative overflow-hidden border-t border-[var(--color-wine)]/5">
        
        {/* Mascota Watermark Background */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.04] pointer-events-none select-none z-0 mascot-watermark">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 mb-4 tracking-tight">
              Modelo Educativo Humanista
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto leading-relaxed">
              Creemos en una formación que combina conocimiento, acompañamiento y aplicación real. Nuestro modelo pone al estudiante al centro de su proceso formativo.
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
                className="group flex flex-col p-6 sm:p-8 bg-white/70 backdrop-blur-xs rounded-2xl border border-[var(--color-wine)]/5 hover:border-[var(--color-red)]/20 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-wine)]/5 text-[var(--color-red)] mb-5 group-hover:bg-[var(--color-red)] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-wine)] transition-colors">
                  {pilar.title}
                </h3>
                <p className="text-sm text-[var(--color-text)]/70 leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 tracking-tight">
              Filosofía Institucional
            </h2>
          </AnimatedReveal>
        </div>

        {/* Misión, Visión, Propósito */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Misión */}
          <AnimatedReveal direction="up" delay={0.1} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-[var(--color-cream)] mb-6">
              <Target className="h-6 w-6 text-[var(--color-red)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Misión</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              “Formar estudiantes con preparación académica, criterio profesional y compromiso humano.”
            </p>
          </AnimatedReveal>

          {/* Visión */}
          <AnimatedReveal direction="up" delay={0.2} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-[var(--color-cream)] mb-6">
              <Eye className="h-6 w-6 text-[var(--color-red)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Visión</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              “Consolidarnos como una institución educativa cercana, actualizada y comprometida con el desarrollo de sus estudiantes.”
            </p>
          </AnimatedReveal>

          {/* Propósito */}
          <AnimatedReveal direction="up" delay={0.3} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col h-full hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-[var(--color-cream)] mb-6">
              <Award className="h-6 w-6 text-[var(--color-red)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Propósito</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
              “Impulsar una educación que prepare para la vida profesional sin perder el sentido humano.”
            </p>
          </AnimatedReveal>

        </div>

        {/* Disclaimer / Nota de base editable */}
        <AnimatedReveal direction="up" delay={0.4} className="relative z-10 text-center mt-12">
          <p className="text-xs text-white/50 italic max-w-lg mx-auto">
            * Estos textos son bases editables y no deben presentarse como documentos oficiales definitivos sin previa confirmación institucional.
          </p>
        </AnimatedReveal>
      </Section>

      {/* 5. VALORES UC */}
      <Section id="valores" background="light" padding="lg" className="border-b border-[var(--color-wine)]/5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <AnimatedReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
              Pilares de Conducta
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wine)] mt-2 tracking-tight">
              Valores UC
            </h2>
          </AnimatedReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {valores.map((val, idx) => (
            <AnimatedReveal 
              key={idx}
              direction="up"
              delay={idx * 0.05}
              className="flex items-center gap-2.5 px-5 py-3 bg-[var(--color-cream)] hover:bg-[var(--color-wine)] hover:text-white rounded-xl border border-[var(--color-wine)]/5 transition-all duration-300 group cursor-default"
            >
              <CheckCircle2 className="h-4 w-4 text-[var(--color-red)] group-hover:text-white transition-colors" />
              <span className="text-sm sm:text-base font-bold text-[var(--color-text)] group-hover:text-white transition-colors">
                {val.name}
              </span>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* 6. TRAYECTORIA */}
      <Section id="trayectoria" background="muted" padding="md" className="border-b border-[var(--color-wine)]/5">
        <div className="max-w-4xl mx-auto bg-white border border-[var(--color-wine)]/5 rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {/* Fondo decorativo sutil */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-red)]/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="md:col-span-5">
              <AnimatedReveal direction="right">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)]">
                  Presencia Local
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--color-wine)] mt-1.5 leading-tight tracking-tight">
                  Una comunidad académica en crecimiento
                </h2>
              </AnimatedReveal>
            </div>

            <div className="md:col-span-7">
              <AnimatedReveal direction="left" delay={0.2}>
                <p className="text-base sm:text-lg text-[var(--color-text)]/80 leading-relaxed font-sans">
                  UC Universidad Continental continúa fortaleciendo su presencia académica en Tepic Nayarit, impulsando programas de formación para estudiantes que buscan avanzar en su desarrollo profesional.
                </p>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </Section>

      {/* 7. CTA FINAL */}
      <Section id="cta-final" background="light" padding="lg" className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-wine)] to-[#3a0a1d] rounded-[2rem] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          
          {/* Patrones de fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-red),transparent_60%)] opacity-20" />
          
          {/* Mascota en el CTA */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 opacity-95 pointer-events-none select-none z-0 mascot-float">
            <Image
              src="/images/brand/mascota-uc.webp"
              alt="Mascota UC en Cierre"
              fill
              className="object-contain object-bottom-right drop-shadow-md"
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 text-balance leading-tight">
                Construye tu camino profesional en UC
              </h2>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.2}>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-10 text-balance leading-relaxed">
                Explora la oferta académica y recibe orientación para elegir el programa que mejor se adapte a tus objetivos.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={0.3} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button 
                  href="/oferta-academica" 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-[var(--color-wine)] hover:bg-[var(--color-cream)] hover:text-[var(--color-wine)] shadow-lg shadow-black/10 h-13 rounded-xl cursor-pointer"
                >
                  Ver oferta académica
                </Button>
                <Button 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 h-13 rounded-xl cursor-pointer"
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
