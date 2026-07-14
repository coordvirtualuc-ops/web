import {groq} from 'next-sanity'

// ─── Fragmentos reutilizables ────────────────────────────────────────────────

const categoryFields = groq`
  _id,
  title,
  "slug": slug.current,
  description,
  color
`

const authorFields = groq`
  _id,
  name,
  "slug": slug.current,
  role,
  image,
  bio
`

const seoFields = groq`
  metaTitle,
  metaDescription,
  ogImage,
  noIndex
`

const postListFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  updatedAt,
  readingTime,
  featured,
  status,
  coverImage,
  category->{${categoryFields}},
  author->{${authorFields}},
  seo{${seoFields}}
`

// ─── Queries públicas ────────────────────────────────────────────────────────

/**
 * allPostsQuery
 * Posts publicados, ordenados del más reciente al más antiguo.
 * Solo trae posts con slug definido y status "published".
 */
export const allPostsQuery = groq`
  *[_type == "post" && status == "published" && defined(slug.current)]
  | order(publishedAt desc) {
    ${postListFields}
  }
`

/**
 * featuredPostsQuery
 * Posts marcados como destacados y publicados.
 * Slice [0...3] para mostrar máximo 3 en el sitio.
 */
export const featuredPostsQuery = groq`
  *[_type == "post" && status == "published" && featured == true && defined(slug.current)]
  | order(publishedAt desc) [0...3] {
    ${postListFields}
  }
`

/**
 * latestPostsQuery
 * Los posts publicados más recientes.
 * Slice [0...6] configurable en la función de lectura.
 */
export const latestPostsQuery = groq`
  *[_type == "post" && status == "published" && defined(slug.current)]
  | order(publishedAt desc) [0...6] {
    ${postListFields}
  }
`

/**
 * postBySlugQuery
 * Post completo por slug para la página de detalle.
 * Incluye contenido Portable Text, SEO y programas relacionados.
 */
export const postBySlugQuery = groq`
  *[_type == "post" && status == "published" && slug.current == $slug][0] {
    ${postListFields},
    content,
    relatedProgramsMode,
    relatedProgramSlugs
  }
`

/**
 * allPostSlugsQuery
 * Solo los slugs publicados — para generateStaticParams.
 */
export const allPostSlugsQuery = groq`
  *[_type == "post" && status == "published" && defined(slug.current)]
  | order(publishedAt desc) {
    "slug": slug.current
  }
`

/**
 * categoriesQuery
 * Todas las categorías, ordenadas alfabéticamente.
 */
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    ${categoryFields}
  }
`

/**
 * authorsQuery
 * Todos los autores, ordenados alfabéticamente por nombre.
 */
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    ${authorFields}
  }
`
