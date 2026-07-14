import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ucuniversidadcontinental.edu.mx'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/studio/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
