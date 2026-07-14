import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts, getFeaturedPosts, getCategories } from "../../../sanity/lib/posts"
import { BlogCard } from "@/components/blog/BlogCard"
import { BlogCategoryChips } from "@/components/blog/BlogCategoryChips"
import { BlogEmptyState } from "@/components/blog/BlogEmptyState"
import { BlogRecommendedPrograms } from "@/components/blog/BlogRecommendedPrograms"
import { BlogNewsletterCTA } from "@/components/blog/BlogNewsletterCTA"
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

// ─── BlogPage ─────────────────────────────────────────────────────────────────
// Server Component. Todos los datos se obtienen en el servidor.

export async function BlogPage() {
  // Fetch paralelo para rendimiento óptimo
  const [allPosts, featuredPosts, categories] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(3),
    getCategories(),
  ])

  const hasPosts = allPosts.length > 0

  // Usar destacados o fallback con los más recientes
  const heroFeatured = featuredPosts.length > 0 ? featuredPosts : allPosts.slice(0, 3)
  const mainFeatured = heroFeatured[0]
  const secondaryFeatured = heroFeatured.slice(1, 3)

  // Grid: todos los posts (excluye los destacados si los hay, para no duplicar)
  // Si no hay destacados, mostrar todos desde el inicio de forma normal
  const gridPosts =
    featuredPosts.length > 0
      ? allPosts.filter((p) => !featuredPosts.some((f) => f._id === p._id))
      : allPosts

  const waLink = createWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="blog-hero"
        className="relative bg-[#F8F5F2] border-b border-[#EFEFEF] overflow-hidden"
        aria-labelledby="blog-hero-titulo"
      >
        {/* Textura sutil de fondo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #550f2a 0, #550f2a 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Texto principal ── */}
            <div>
              {/* Etiqueta editorial */}
              <span className="inline-flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] bg-[var(--color-wine)]/8 px-3 py-1.5 rounded-full">
                Blog UC
              </span>

              <h1
                id="blog-hero-titulo"
                className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight leading-none mb-6 text-balance"
              >
                Blog{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--color-wine)" }}
                >
                  UC
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-[var(--color-text)]/75 leading-relaxed mb-4 text-balance font-medium">
                Orientación, vida universitaria y recursos para acompañarte en
                tu proceso académico.
              </p>

              <p className="text-base text-[var(--color-text)]/55 leading-relaxed mb-10 max-w-lg text-balance">
                Explora artículos sobre elección de carrera, modalidades de
                estudio, vida universitaria y preparación para tu futuro
                profesional.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/oferta-academica"
                  className="inline-flex items-center gap-2 bg-[#8c002a] text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#550f2a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c002a] focus-visible:ring-offset-2 shadow-md shadow-[#8c002a]/20"
                >
                  Ver oferta académica
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#8c002a] text-[#8c002a] px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#8c002a] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c002a] focus-visible:ring-offset-2"
                >
                  Hablar con admisiones
                </a>
              </div>
            </div>

            {/* ── Mascota decorativa ── */}
            <div className="hidden lg:flex justify-center items-end">
              <div className="relative">
                {/* Aureola decorativa */}
                <div
                  className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#550f2a]/6 to-[#8c002a]/3"
                  aria-hidden="true"
                />
                <Image
                  src="/images/brand/mascota-uc.webp"
                  alt="Nayo, mascota de UC Universidad Continental"
                  width={360}
                  height={400}
                  priority
                  className="relative drop-shadow-xl max-h-[420px] w-auto object-contain mascot-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. CATEGORÍAS
      ══════════════════════════════════════════════════════════════ */}
      {categories.length > 0 && (
        <section
          id="blog-categorias"
          className="bg-white border-b border-[#EFEFEF] py-5"
          aria-label="Categorías del blog"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlogCategoryChips categories={categories} />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          3. ESTADO VACÍO o CONTENIDO
      ══════════════════════════════════════════════════════════════ */}
      {!hasPosts ? (
        <section
          id="blog-empty"
          className="bg-white border-b border-[#EFEFEF]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlogEmptyState />
          </div>
        </section>
      ) : (
        <>
          {/* ════════════════════════════════════════════════════════
              4. ARTÍCULOS DESTACADOS
          ════════════════════════════════════════════════════════ */}
          {heroFeatured.length > 0 && (
            <section
              id="blog-destacados"
              className="bg-white py-16 md:py-24"
              aria-labelledby="blog-destacados-titulo"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-2">
                      {featuredPosts.length > 0 ? "Artículos destacados" : "Últimos artículos"}
                    </span>
                    <h2
                      id="blog-destacados-titulo"
                      className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)]"
                    >
                      Lo más relevante para ti
                    </h2>
                  </div>
                  <Link
                    href="#todos-los-articulos"
                    className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[var(--color-wine)] hover:text-[var(--color-red)] transition-colors focus-visible:outline-none focus-visible:underline shrink-0"
                  >
                    Ver todos
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                {/* Layout editorial: 1 grande + 2 secundarios */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Card principal */}
                  {mainFeatured && (
                    <div className="lg:col-span-7">
                      <BlogCard post={mainFeatured} size="featured" />
                    </div>
                  )}

                  {/* Cards secundarios */}
                  {secondaryFeatured.length > 0 && (
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      {secondaryFeatured.map((post) => (
                        <BlogCard key={post._id} post={post} size="default" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════════════
              5. TODOS LOS ARTÍCULOS (Grid)
          ════════════════════════════════════════════════════════ */}
          <section
            id="todos-los-articulos"
            className="bg-[#F8F5F2] py-16 md:py-24"
            aria-labelledby="todos-articulos-titulo"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Encabezado */}
              <div className="mb-10 md:mb-14">
                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--color-wine)] mb-2">
                  Explorar
                </span>
                <h2
                  id="todos-articulos-titulo"
                  className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)]"
                >
                  {gridPosts.length > 0 ? "Todos los artículos" : "Artículos publicados"}
                </h2>
              </div>

              {gridPosts.length > 0 ? (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                  role="list"
                  aria-label="Lista de artículos del blog"
                >
                  {gridPosts.map((post) => (
                    <div key={post._id} role="listitem">
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                // Si todos los posts fueron destacados, mostrarlos en el grid también
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                  role="list"
                  aria-label="Lista de artículos del blog"
                >
                  {allPosts.map((post) => (
                    <div key={post._id} role="listitem">
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* ══════════════════════════════════════════════════════════════
          6. CARRERAS SUGERIDAS
      ══════════════════════════════════════════════════════════════ */}
      <BlogRecommendedPrograms />

      {/* ══════════════════════════════════════════════════════════════
          7. CTA NOVEDADES
      ══════════════════════════════════════════════════════════════ */}
      <BlogNewsletterCTA />
    </>
  )
}
