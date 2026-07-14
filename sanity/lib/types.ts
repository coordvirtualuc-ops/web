// ─── Imagen ──────────────────────────────────────────────────────────────────

export interface SanityImageAsset {
  _type: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
  caption?: string
}



// ─── SEO ─────────────────────────────────────────────────────────────────────

export interface BlogSEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImageAsset
  noIndex?: boolean
}

// ─── Categoría ───────────────────────────────────────────────────────────────

export interface BlogCategory {
  _id: string
  title: string
  slug: string
  description?: string
  color?: string
}

// ─── Autor ───────────────────────────────────────────────────────────────────

export interface BlogAuthor {
  _id: string
  name: string
  slug?: string
  role?: string
  image?: SanityImageAsset
  bio?: string
}

// ─── Post (listado) ───────────────────────────────────────────────────────────

export interface BlogPostListItem {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  readingTime?: string
  featured?: boolean
  status: 'draft' | 'published'
  coverImage?: SanityImageAsset
  category?: BlogCategory
  author?: BlogAuthor
  seo?: BlogSEO
}

// ─── Post (detalle completo) ──────────────────────────────────────────────────

import type { PortableTextBlock } from '@portabletext/types'

export interface BlogPost extends BlogPostListItem {
  /** Portable Text — array de bloques y tipos custom (imagen, etc.) */
  content: PortableTextBlock[]
  relatedProgramsMode?: 'random' | 'manual' | 'none'
  relatedProgramSlugs?: string[]
}
