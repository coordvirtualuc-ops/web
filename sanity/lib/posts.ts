import {client} from './client'
import {
  allPostSlugsQuery,
  allPostsQuery,
  authorsQuery,
  categoriesQuery,
  featuredPostsQuery,
  latestPostsQuery,
  postBySlugQuery,
} from './queries'
import type {BlogAuthor, BlogCategory, BlogPost, BlogPostListItem} from './types'

/**
 * Opciones de revalidación compartidas.
 * Los posts se revalidan cada 60 segundos sin necesidad de redeploy.
 */
const fetchOptions = {next: {revalidate: 60}} as const

// ─── Posts ───────────────────────────────────────────────────────────────────

/**
 * getAllPosts
 * Devuelve todos los posts publicados, del más reciente al más antiguo.
 */
export async function getAllPosts(): Promise<BlogPostListItem[]> {
  try {
    return await client.fetch<BlogPostListItem[]>(allPostsQuery, {}, fetchOptions)
  } catch {
    return []
  }
}

/**
 * getFeaturedPosts
 * Devuelve posts marcados como destacados.
 * El limit por defecto es 3 (controlado en GROQ).
 * Si se necesita diferente, se aplica slice en JS.
 */
export async function getFeaturedPosts(limit = 3): Promise<BlogPostListItem[]> {
  try {
    const posts = await client.fetch<BlogPostListItem[]>(featuredPostsQuery, {}, fetchOptions)
    return limit === 3 ? posts : posts.slice(0, limit)
  } catch {
    return []
  }
}

/**
 * getLatestPosts
 * Devuelve los posts publicados más recientes.
 * El limit por defecto es 6 (controlado en GROQ).
 */
export async function getLatestPosts(limit = 6): Promise<BlogPostListItem[]> {
  try {
    const posts = await client.fetch<BlogPostListItem[]>(latestPostsQuery, {}, fetchOptions)
    return limit === 6 ? posts : posts.slice(0, limit)
  } catch {
    return []
  }
}

/**
 * getPostBySlug
 * Devuelve un post completo por su slug.
 * Devuelve null si no existe o no está publicado.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch<BlogPost | null>(
      postBySlugQuery,
      {slug},
      fetchOptions,
    )
    return post ?? null
  } catch {
    return null
  }
}

/**
 * getAllPostSlugs
 * Devuelve todos los slugs publicados para generateStaticParams.
 */
export async function getAllPostSlugs(): Promise<{slug: string}[]> {
  try {
    return await client.fetch<{slug: string}[]>(allPostSlugsQuery, {}, fetchOptions)
  } catch {
    return []
  }
}

// ─── Categorías ──────────────────────────────────────────────────────────────

/**
 * getCategories
 * Devuelve todas las categorías ordenadas por nombre.
 */
export async function getCategories(): Promise<BlogCategory[]> {
  try {
    return await client.fetch<BlogCategory[]>(categoriesQuery, {}, fetchOptions)
  } catch {
    return []
  }
}

// ─── Autores ─────────────────────────────────────────────────────────────────

/**
 * getAuthors
 * Devuelve todos los autores ordenados por nombre.
 */
export async function getAuthors(): Promise<BlogAuthor[]> {
  try {
    return await client.fetch<BlogAuthor[]>(authorsQuery, {}, fetchOptions)
  } catch {
    return []
  }
}
