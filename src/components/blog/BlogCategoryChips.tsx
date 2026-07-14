import * as React from "react"
import { Tag } from "lucide-react"
import type { BlogCategory } from "../../../sanity/lib/types"

interface BlogCategoryChipsProps {
  categories: BlogCategory[]
}

// ─── BlogCategoryChips ────────────────────────────────────────────────────────
// Server Component: muestra categorías como chips visuales con link a query param.
// No requiere interactividad client-side; el filtro se puede hacer via URL.

export function BlogCategoryChips({ categories }: BlogCategoryChipsProps) {
  if (!categories.length) return null

  return (
    <div className="flex flex-wrap items-center gap-3" role="list" aria-label="Categorías del blog">
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#242424]/40 mr-1">
        <Tag className="h-3.5 w-3.5" aria-hidden="true" />
        Categorías
      </span>

      {/* Chip "Todos" */}
      <a
        href="/blog"
        className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border border-[#EFEFEF] bg-white text-[var(--color-text)]/70 hover:border-[var(--color-wine)] hover:text-[var(--color-wine)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-wine)] focus-visible:ring-offset-2"
        role="listitem"
      >
        Todos
      </a>

      {categories.map((cat) => (
        <a
          key={cat._id}
          href={`/blog?categoria=${encodeURIComponent(cat.slug)}`}
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border border-[#EFEFEF] bg-white text-[var(--color-text)]/70 hover:border-[var(--color-wine)] hover:text-[var(--color-wine)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-wine)] focus-visible:ring-offset-2"
          role="listitem"
          aria-label={`Filtrar por categoría: ${cat.title}`}
        >
          {cat.title}
        </a>
      ))}
    </div>
  )
}
