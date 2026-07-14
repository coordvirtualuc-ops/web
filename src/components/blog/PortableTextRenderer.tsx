"use client"

/**
 * PortableTextRenderer
 * Renderizador de Portable Text con componentes custom institucionales UC.
 * Soporta: h2/h3/h4, blockquote, listas, strong, em, links, imágenes internas.
 *
 * Es un Client Component porque @portabletext/react requiere contexto de React.
 * Al ser un leaf component puro de presentación, no afecta el SSR del artículo.
 */

import * as React from "react"
import Image from "next/image"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { urlForImage } from "../../../sanity/lib/image"

// ─── Tipos custom para imagen interna ────────────────────────────────────────

interface SanityInlineImage {
  _type: "image"
  _key: string
  asset?: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  caption?: string
  layout?: "default" | "wide" | "full"
}

// ─── Componentes custom ───────────────────────────────────────────────────────

const components: PortableTextComponents = {
  // ── Estilos de bloque ──
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[#242424]/85 leading-[1.85] text-lg">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-[var(--color-text)] mt-12 mb-5 leading-snug border-l-4 border-[var(--color-wine)] pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-[var(--color-text)] mt-10 mb-4 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-montserrat text-lg font-bold text-[var(--color-text)] mt-8 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-wine)] italic text-[#242424]/70 text-xl leading-relaxed bg-[var(--color-wine)]/[0.04] py-4 pr-4 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },

  // ── Listas ──
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 space-y-2 pl-0 list-none">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 space-y-2 pl-0 list-none counter-reset-[item]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[#242424]/85 leading-relaxed text-base">
        <span
          className="mt-2 h-2 w-2 rounded-full bg-[var(--color-wine)] shrink-0"
          aria-hidden="true"
        />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-3 text-[#242424]/85 leading-relaxed text-base">
        <span className="shrink-0 font-bold text-[var(--color-wine)]">
          {/* El número lo gestiona el motor de listas */}
        </span>
        <span>{children}</span>
      </li>
    ),
  },

  // ── Decoradores ──
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[var(--color-text)]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#242424]/80">{children}</em>
    ),
    link: ({ value, children }) => {
      const href = value?.href ?? "#"
      const isExternal =
        href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")
      return (
        <a
          href={href}
          target={value?.blank || isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[var(--color-wine)] underline underline-offset-3 decoration-[var(--color-wine)]/40 hover:decoration-[var(--color-wine)] transition-colors font-medium"
        >
          {children}
        </a>
      )
    },
  },

  // ── Tipos custom: imagen interna ──
  types: {
    image: ({ value }: { value: SanityInlineImage }) => {
      if (!value?.asset) return null

      const layout = value.layout ?? "default"

      const imageUrl = urlForImage(value)
        ?.width(layout === "full" ? 1400 : layout === "wide" ? 1100 : 800)
        .fit("clip")
        .url()

      if (!imageUrl) return null

      const wrapperClass = {
        default: "my-10 mx-auto max-w-2xl",
        wide: "my-10 mx-auto max-w-4xl",
        full: "my-10 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24",
      }[layout]

      return (
        <figure className={wrapperClass} aria-label={value.alt ?? "Imagen del artículo"}>
          <div className="relative overflow-hidden rounded-2xl bg-[#EFEFEF]">
            <Image
              src={imageUrl}
              alt={value.alt ?? "Imagen del artículo"}
              width={layout === "full" ? 1400 : layout === "wide" ? 1100 : 800}
              height={layout === "full" ? 700 : 500}
              className="w-full h-auto object-cover"
              sizes={
                layout === "full"
                  ? "100vw"
                  : layout === "wide"
                  ? "(max-width: 1024px) 100vw, 1100px"
                  : "(max-width: 768px) 100vw, 800px"
              }
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-[#242424]/50 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

// ─── Componente principal ─────────────────────────────────────────────────────

interface PortableTextRendererProps {
  content: PortableTextBlock[]
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content?.length) return null

  return (
    <div className="portable-text">
      <PortableText value={content} components={components} />
    </div>
  )
}
