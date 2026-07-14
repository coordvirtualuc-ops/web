import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { urlForImage } from "../../../sanity/lib/image"
import type { BlogPost } from "../../../sanity/lib/types"

// ─── Helper ───────────────────────────────────────────────────────────────────

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

// ─── PostHeader ───────────────────────────────────────────────────────────────

interface PostHeaderProps {
  post: BlogPost
}

export function PostHeader({ post }: PostHeaderProps) {
  const coverUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(1400).height(700).fit("crop").url()
    : null

  const coverAlt = post.coverImage?.alt ?? post.title

  return (
    <header>
      {/* ── Breadcrumb / Back ── */}
      <div className="bg-[#F8F5F2] border-b border-[#EFEFEF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#242424]/55 hover:text-[var(--color-wine)] transition-colors group focus-visible:outline-none focus-visible:underline"
            aria-label="Volver al blog"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Blog UC
          </Link>
        </div>
      </div>

      {/* ── Hero del artículo ── */}
      <div className="bg-[#F8F5F2]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16 md:pb-14">

          {/* Categoría */}
          {post.category && (
            <div className="mb-5">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-wine)]/10 text-[var(--color-wine)]">
                {post.category.title}
              </span>
            </div>
          )}

          {/* Título */}
          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[var(--color-text)] leading-tight tracking-tight mb-6 text-balance">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-[#242424]/65 leading-relaxed mb-8 max-w-2xl text-balance">
              {post.excerpt}
            </p>
          )}

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[#EFEFEF]">
            {/* Autor */}
            {post.author && (
              <div className="flex items-center gap-2.5">
                {post.author.image ? (
                  <div className="relative h-9 w-9 rounded-full overflow-hidden bg-[#EFEFEF] shrink-0">
                    <Image
                      src={
                        urlForImage(post.author.image)
                          ?.width(72)
                          .height(72)
                          .fit("crop")
                          .url() ?? ""
                      }
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-wine)]/10 shrink-0">
                    <User className="h-4 w-4 text-[var(--color-wine)]" aria-hidden="true" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-xs text-[#242424]/50">{post.author.role}</p>
                  )}
                </div>
              </div>
            )}

            {/* Separador vertical */}
            {post.author && (post.publishedAt || post.readingTime) && (
              <div className="hidden sm:block h-6 w-px bg-[#EFEFEF]" aria-hidden="true" />
            )}

            {/* Fecha */}
            {post.publishedAt && (
              <span className="flex items-center gap-1.5 text-sm text-[#242424]/50">
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </span>
            )}

            {/* Tiempo de lectura */}
            {post.readingTime && (
              <span className="flex items-center gap-1.5 text-sm text-[#242424]/50">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {post.readingTime}
              </span>
            )}

            {/* Actualización */}
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <span className="text-xs text-[#242424]/40 italic ml-auto">
                Actualizado {formatDate(post.updatedAt)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Portada ── */}
      {coverUrl && (
        <div className="relative w-full bg-[#111111] overflow-hidden" style={{ aspectRatio: "2/1" }}>
          <Image
            src={coverUrl}
            alt={coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
          {/* Gradiente sutil para transición al contenido */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/30 to-transparent"
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  )
}
