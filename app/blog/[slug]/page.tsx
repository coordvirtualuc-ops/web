import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs } from "../../../sanity/lib/posts"
import { urlForImage } from "../../../sanity/lib/image"
import { PostHeader } from "@/components/blog/PostHeader"
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer"
import { PostCTABar } from "@/components/blog/PostCTABar"
import { PostRelatedPrograms } from "@/components/blog/PostRelatedPrograms"
import { BlogNewsletterCTA } from "@/components/blog/BlogNewsletterCTA"

// ─── generateStaticParams ─────────────────────────────────────────────────────
// Genera rutas estáticas para todos los slugs publicados en Sanity.
// ISR con revalidate: 60 en getAllPostSlugs actualiza la lista periódicamente.

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

// ─── Metadata dinámica ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Blog UC",
    }
  }

  // Prioridad: campo SEO del post → excerpt → descripción genérica
  const title = post.seo?.metaTitle ?? `${post.title} | Blog UC`
  const description =
    post.seo?.metaDescription ?? post.excerpt ?? "Blog UC Universidad Continental"

  // OG image: seo.ogImage → coverImage → sin imagen
  const ogImageUrl = post.seo?.ogImage
    ? urlForImage(post.seo.ogImage)?.width(1200).height(630).fit("crop").url()
    : post.coverImage
    ? urlForImage(post.coverImage)?.width(1200).height(630).fit("crop").url()
    : undefined

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    ...(post.seo?.noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description,
      type: "article",
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      ...(ogImageUrl && {
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: post.seo?.ogImage?.alt ?? post.title,
          },
        ],
      }),
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  // Si el post no existe o no está publicado → 404
  if (!post) {
    notFound()
  }

  return (
    <>
      {/* ─── Cabecera: portada + título + meta ─── */}
      <PostHeader post={post} />

      {/* ─── Cuerpo del artículo ─── */}
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Contenido Portable Text */}
          {post.content?.length > 0 && (
            <article
              aria-label={`Contenido del artículo: ${post.title}`}
              className="mb-0"
            >
              <PortableTextRenderer content={post.content} />
            </article>
          )}

          {/* CTA inline: WhatsApp + Inscríbete */}
          <PostCTABar />

        </div>
      </div>

      {/* ─── Programas relacionados ─── */}
      <PostRelatedPrograms
        mode={post.relatedProgramsMode}
        slugs={post.relatedProgramSlugs}
      />

      {/* ─── Bloque de novedades ─── */}
      <BlogNewsletterCTA />
    </>
  )
}
