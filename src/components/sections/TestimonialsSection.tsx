import * as React from "react"
import { Quote } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"

export function TestimonialsSection() {
  // TODO: Reemplazar estos testimonios por testimonios reales autorizados por UC.
  const testimonials = [
    {
      name: "Egresada UC",
      program: "Licenciatura",
      text: "En UC encontré acompañamiento cercano y docentes que me ayudaron a fortalecer mi confianza profesional.",
    },
    {
      name: "Egresado UC",
      program: "Licenciatura",
      text: "La formación humanista y práctica me permitió entender mejor mi entorno y prepararme para nuevos retos.",
    },
    {
      name: "Egresada UC",
      program: "Educación Continua",
      text: "Los horarios flexibles y la atención personalizada hicieron más sencillo continuar mi preparación.",
    },
  ]

  return (
    <Section id="testimonios" padding="lg" className="bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--color-wine)] mb-4">
            Historias de nuestra comunidad UC
          </h2>
          <p className="text-lg text-[#242424]/80 text-balance mx-auto">
            Testimonios que reflejan el acompañamiento, la formación humanista y la experiencia académica de UC.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <AnimatedReveal key={idx} direction="up" delay={idx * 0.1} className="h-full">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[var(--color-wine)]/5 border border-[var(--color-wine)]/10 h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <Quote className="h-10 w-10 text-[var(--color-wine)]/10 absolute top-6 right-6 group-hover:text-[var(--color-red)]/20 transition-colors" />
                
                <div className="flex-1 mb-6 mt-4">
                  <p className="text-[#242424] text-lg leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-[#F8F5F2]">
                  <p className="font-bold text-[var(--color-wine)]">{testimonial.name}</p>
                  <p className="text-xs text-[#242424]/60 uppercase tracking-widest font-semibold mt-1">{testimonial.program}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        
      </div>
    </Section>
  )
}
