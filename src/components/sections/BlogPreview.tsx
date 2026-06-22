import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedReveal } from "@/components/ui/AnimatedReveal"

// Array local de ejemplo editorial (reemplazable por @/content/blog)
const localBlogPosts = [
  {
    category: "Orientación Vocacional",
    title: "¿Cómo elegir una carrera universitaria?",
    excerpt: "Descubre las preguntas clave y los pasos que debes seguir para tomar una de las decisiones más importantes de tu vida con seguridad y propósito.",
    href: "/blog/como-elegir-carrera",
    gradient: "from-[#8c002a] to-[#550f2a]"
  },
  {
    category: "Vida Universitaria",
    title: "La importancia de una formación integral",
    excerpt: "El éxito profesional de hoy requiere más que solo conocimiento técnico: exige valores, ética y responsabilidad social.",
    href: "/blog/formacion-integral",
    gradient: "from-[#242424] to-[#111111]"
  },
  {
    category: "Comunidad",
    title: "Estudiar en Tepic: una decisión cercana y profesional",
    excerpt: "Conoce por qué iniciar tu etapa universitaria en tu ciudad te brinda ventajas únicas para tu desarrollo académico y personal.",
    href: "/blog/estudiar-en-tepic",
    gradient: "from-[#EFEFEF] to-[#d1d1d1]"
  }
]

export function BlogPreview() {
  return (
    <Section id="blog-preview" background="default" padding="xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <AnimatedReveal direction="up" className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight text-balance mb-4">
            Vida académica, orientación y comunidad
          </h2>
          <p className="text-lg text-[var(--color-text)]/70 text-balance leading-relaxed">
            Un espacio para compartir noticias, orientación vocacional, eventos y contenido útil para aspirantes y estudiantes.
          </p>
        </AnimatedReveal>
        
        <AnimatedReveal direction="left" delay={0.2} className="hidden md:block">
          <Button href="/blog" variant="outline">
            Ver blog <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Artículo Destacado (Ocupa 7 columnas) */}
        <AnimatedReveal direction="up" delay={0.1} className="lg:col-span-7">
          <div className="group relative flex flex-col h-full min-h-[400px] overflow-hidden rounded-[2rem] bg-white border border-[var(--color-muted)] transition-all duration-300 hover:shadow-xl">
            {/* Placeholder visual editorial */}
            <div className={`h-48 sm:h-64 w-full bg-gradient-to-br ${localBlogPosts[0].gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
            
            <div className="flex flex-col flex-1 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-3">
                {localBlogPosts[0].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4 group-hover:text-[var(--color-wine)] transition-colors">
                {localBlogPosts[0].title}
              </h3>
              <p className="text-[var(--color-text)]/70 text-balance mb-8 flex-1">
                {localBlogPosts[0].excerpt}
              </p>
              
              <a href={localBlogPosts[0].href} className="inline-flex items-center text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-red)] transition-colors mt-auto">
                Leer artículo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </AnimatedReveal>

        {/* Columna Derecha: 2 Artículos Secundarios (Ocupan 5 columnas) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {localBlogPosts.slice(1).map((post, index) => (
            <AnimatedReveal key={index} direction="up" delay={0.2 + (index * 0.1)} className="h-full">
              <div className="group flex flex-col h-full rounded-[2rem] bg-white border border-[var(--color-muted)] p-6 sm:p-8 transition-all duration-300 hover:shadow-md hover:border-[var(--color-wine)]/30">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-wine)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[var(--color-text)]/70 text-sm mb-6 flex-1 text-balance">
                  {post.excerpt}
                </p>
                
                <a href={post.href} className="inline-flex items-center text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-red)] transition-colors mt-auto">
                  Leer artículo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>

      <AnimatedReveal direction="up" delay={0.4} className="mt-8 md:hidden">
        <Button href="/blog" variant="outline" className="w-full">
          Ver blog <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </AnimatedReveal>
    </Section>
  )
}