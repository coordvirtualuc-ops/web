import type { MetadataRoute } from 'next'
import { getAllPosts } from '../sanity/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ucuniversidadcontinental.edu.mx'

  // Rutas estáticas principales
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/oferta-academica`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/inscribete`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/identidad-uc`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/vida-uc`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]

  try {
    const posts = await getAllPosts()
    
    // Filtrar posts con noIndex activo
    const indexablePosts = posts.filter(post => post.seo?.noIndex !== true)

    const postRoutes: MetadataRoute.Sitemap = indexablePosts.map((post) => {
      const lastModifiedDate = post.updatedAt || post.publishedAt || new Date().toISOString()
      return {
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(lastModifiedDate),
        changeFrequency: 'weekly',
        priority: 0.6,
      }
    })

    return [...staticRoutes, ...postRoutes]
  } catch (error) {
    console.error('Error generando sitemap para posts:', error)
    return staticRoutes
  }
}
