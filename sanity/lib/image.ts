import imageUrlBuilder from '@sanity/image-url'
import {client} from './client'

const builder = imageUrlBuilder(client)

/**
 * urlForImage
 * Devuelve un builder de URL para una imagen de Sanity.
 * Devuelve null si el source no es válido, evitando errores en el frontend.
 *
 * Uso:
 *   urlForImage(post.coverImage)?.width(800).url()
 *   urlForImage(post.seo?.ogImage)?.width(1200).height(630).url()
 */
export function urlForImage(source: Parameters<typeof builder.image>[0] | null | undefined) {
  if (!source) return null
  return builder.image(source)
}
