import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from '../env'

/**
 * Cliente público de Sanity para lectura de posts publicados.
 * - useCdn: true → respuestas cacheadas en CDN (más rápidas para producción).
 * - perspective: "published" → solo lee documentos publicados, nunca drafts.
 * - No usa token → seguro para exponer en cliente público.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: false,
})
