import {defineField, defineType} from 'sanity'

/**
 * seo
 * Objeto reutilizable para configuración SEO por artículo.
 * Todos los campos son opcionales — se usan los valores del artículo como fallback.
 */
export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'SEO title',
      type: 'string',
      description:
        'Título recomendado para Google. Si lo dejas vacío, se usará el título del artículo. Máximo 60 caracteres.',
      placeholder: 'Ej: Estudia en UC | Universidad Continental Tepic',
      validation: (Rule) =>
        Rule.max(60).warning('Se recomienda un máximo de 60 caracteres para SEO.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      description:
        'Descripción recomendada para Google. Si la dejas vacía, se usará el resumen corto del artículo. Máximo 160 caracteres.',
      placeholder:
        'Ej: Conoce las licenciaturas de UC en Tepic, Nayarit. Clases presenciales, en línea y ejecutivas.',
      validation: (Rule) =>
        Rule.max(160).warning('Se recomienda un máximo de 160 caracteres para SEO.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen Open Graph',
      type: 'image',
      description:
        'Imagen que aparece cuando el artículo se comparte en Facebook, WhatsApp o Twitter. Recomendado: 1200 × 630 px.',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Describe brevemente la imagen.',
        },
      ],
    }),
    defineField({
      name: 'noIndex',
      title: 'No indexar',
      type: 'boolean',
      description:
        'Actívalo solo si NO quieres que Google muestre este artículo en sus resultados. En la mayoría de casos debe estar desactivado.',
      initialValue: false,
    }),
  ],
})
