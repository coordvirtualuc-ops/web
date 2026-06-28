import * as React from "react"
import { GraduationCap, BookOpen, Clock, Globe } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"

export function StatsBlock() {
  const pillars = [
    {
      num: "01",
      title: "Aprendizaje con impacto real",
      desc: "Combinamos la teoría con la práctica activa para que resuelvas problemáticas reales de tu entorno desde el primer día.",
      icon: GraduationCap,
    },
    {
      num: "02",
      title: "Certificación Cambridge",
      desc: "Fortalecemos tu perfil profesional con el dominio del idioma inglés respaldado por estándares de nivel internacional.",
      icon: Globe,
    },
    {
      num: "03",
      title: "Docentes y programas actualizados",
      desc: "Planes de estudio vigentes impartidos por profesores con amplia experiencia y participación activa en su sector laboral.",
      icon: BookOpen,
    },
    {
      num: "04",
      title: "Modalidades flexibles",
      desc: "Formatos y horarios diseñados para adaptarse a tu estilo de vida, permitiéndote trabajar y estudiar de manera equilibrada.",
      icon: Clock,
    },
  ]

  return (
    <Section id="modelo-educativo" background="light" padding="xl" className="border-t border-[var(--color-muted)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Columna Izquierda: Encabezado Sticky (Pegajoso) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <AnimatedReveal direction="up">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-4">
              Filosofía UC
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[var(--color-text)] tracking-tight leading-[1.1] text-balance mb-6">
              Modelo Educativo Humanista
            </h3>
            <p className="text-lg text-[var(--color-text)]/70 text-balance leading-relaxed">
              Formamos profesionistas comprometidos con su entorno, combinando excelencia académica, acompañamiento constante y una visión humanista que trasciende las aulas.
            </p>
          </AnimatedReveal>
        </div>

        {/* Columna Derecha: Lista Ordenada y Minimalista */}
        <div className="lg:col-span-7 flex flex-col">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <AnimatedReveal 
                key={index} 
                direction="up" 
                delay={0.1 * index}
              >
                <div className="group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 py-10 border-b border-[var(--color-muted)] transition-colors hover:border-[var(--color-wine)]/30">
                  
                  {/* Número Editorial */}
                  <div className="text-4xl sm:text-5xl font-black text-[var(--color-muted)] group-hover:text-[var(--color-red)]/20 transition-colors">
                    {pillar.num}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-[var(--color-cream)] p-2.5 rounded-lg text-[var(--color-wine)] group-hover:bg-[var(--color-wine)] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-wine)] transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[var(--color-text)]/70 text-lg leading-relaxed text-balance sm:pl-14">
                      {pillar.desc}
                    </p>
                  </div>

                </div>
              </AnimatedReveal>
            )
          })}

          {/* Último elemento visual para cerrar la lista con elegancia */}
          <AnimatedReveal direction="up" delay={0.5}>
            <div className="pt-10 flex items-center gap-4 text-[var(--color-text)]/40 italic text-sm font-medium">
              <div className="h-px w-12 bg-[var(--color-muted)]" />
              Educación para la humanidad
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </Section>
  )
}