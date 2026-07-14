import type {StructureResolver} from 'sanity/structure'

/**
 * Estructura del menú de Sanity Studio para UC Universidad Continental.
 *
 * Orden editorial recomendado para el cliente:
 *  1. Categorías del blog → se crean primero
 *  2. Autores            → se crean antes que los artículos
 *  3. Artículos del blog → se crean al final con categoría y autor asignados
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido UC')
    .items([
      S.documentTypeListItem('category')
        .title('📁 Categorías del blog')
        .schemaType('category'),

      S.documentTypeListItem('author')
        .title('✍️ Autores')
        .schemaType('author'),

      S.divider(),

      S.documentTypeListItem('post')
        .title('📝 Artículos del blog')
        .schemaType('post'),
    ])
