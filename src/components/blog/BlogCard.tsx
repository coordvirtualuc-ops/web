import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { urlForImage } from "../../../sanity/lib/image"
import type { BlogPostListItem } from "../../../sanity/lib/types"

// ─── Helper: fecha legible en español ────────────────────────────────────────

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface BlogCardProps {
  post: BlogPostListItem
  /** Tamaño visual de la card */
  size?: "default" | "featured"
}

// ─── BlogCard ─────────────────────────────────────────────────────────────────

export function BlogCard({ post, size = "default" }: BlogCardProps) {
  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage)
        ?.width(size === "featured" ? 900 : 600)
        .height(size === "featured" ? 500 : 340)
        .fit("crop")
        .url()
    : null

  const imageAlt = post.coverImage?.alt ?? post.title

  const href = `/blog/${post.slug}`

  return (
    <article
      className={[
        "group flex flex-col bg-white rounded-2xl border border-[#EFEFEF]",
        "overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--color-wine)]/20",
        "h-full",
      ].join(" ")}
    >
      {/* ── Imagen o fallback ── */}
      <div
        className={[
          "relative overflow-hidden shrink-0 bg-[#EFEFEF]",
          size === "featured" ? "h-64 sm:h-80" : "h-48",
        ].join(" ")}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes={
              size === "featured"
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback institucional sin imagen
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#550f2a] to-[#8c002a]">
            <span
              className="font-montserrat text-4xl font-black text-white/20 select-none leading-none"
              aria-hidden="true"
            >
              UC
            </span>
          </div>
        )}

        {/* Categoría badge sobre imagen */}
        {post.category && (
          <span
            className={[
              "absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
              "bg-white/95 text-[var(--color-wine)] shadow-sm",
            ].join(" ")}
          >
            {post.category.title}
          </span>
        )}
      </div>

      {/* ── Contenido ── */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Meta: fecha y tiempo de lectura */}
        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#242424]/50">
          {post.publishedAt && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {post.readingTime}
            </span>
          )}
        </div>

        {/* Título */}
        <h3
          className={[
            "font-montserrat font-bold text-[var(--color-text)] leading-snug mb-3",
            "group-hover:text-[var(--color-wine)] transition-colors",
            size === "featured" ? "text-xl sm:text-2xl" : "text-lg",
          ].join(" ")}
        >
          <Link href={href} className="focus-visible:outline-none">
            <span className="focus-visible:underline">{post.title}</span>
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[var(--color-text)]/65 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Autor + CTA */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-[#EFEFEF]">
          {post.author?.name ? (
            <span className="text-xs text-[#242424]/50 font-medium truncate">
              {post.author.name}
            </span>
          ) : (
            <span className="text-xs text-[#242424]/40 italic">Blog UC</span>
          )}

          <Link
            href={href}
            className={[
              "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider shrink-0",
              "text-[var(--color-wine)] hover:text-[var(--color-red)] transition-colors",
            ].join(" ")}
            aria-label={`Leer artículo: ${post.title}`}
          >
            Leer artículo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
