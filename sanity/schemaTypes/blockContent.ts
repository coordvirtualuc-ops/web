import {defineArrayMember, defineType} from 'sanity'

/**
 * blockContent
 * Contenido enriquecido para artículos de UC Universidad Continental.
 *
 * Soporta:
 * - Párrafos, H2, H3, H4, citas (blockquote)
 * - Listas con viñetas y numeradas
 * - Negrita, cursiva
 * - Enlaces (con opción de abrir en nueva pestaña)
 * - Imágenes internas con alt, pie de imagen y tamaño
 *
 * IMPORTANTE: Los valores de 'layout' (default, wide, full) deben mantenerse
 * exactamente igual para no romper el PortableTextRenderer del sitio público.
 */
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Contenido del artículo',
  type: 'array',
  of: [
    // ── Bloques de texto ───────────────────────────────────────────────────
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Párrafo', value: 'normal'},
        {title: 'Subtítulo principal (H2)', value: 'h2'},
        {title: 'Subtítulo secundario (H3)', value: 'h3'},
        {title: 'Subtítulo menor (H4)', value: 'h4'},
        {title: 'Cita destacada', value: 'blockquote'},
      ],
      lists: [
        {title: 'Lista con viñetas', value: 'bullet'},
        {title: 'Lista numerada', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Negrita', value: 'strong'},
          {title: 'Cursiva', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL del enlace',
                description: 'Escribe la dirección completa. Ejemplo: https://ucontinental.edu.mx',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Abrir en nueva pestaña',
                description: 'Actívalo para que el enlace no cierre el artículo.',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),

    // ── Imágenes dentro del artículo ───────────────────────────────────────
    defineArrayMember({
      type: 'image',
      title: 'Imagen dentro del artículo',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description:
            'Describe la imagen brevemente. Importante para accesibilidad y SEO. Ejemplo: "Alumnos de UC en clase magistral."',
          placeholder: 'Ej: Alumnos de UC en clase magistral',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Pie de imagen',
          description: 'Texto opcional que aparece debajo de la imagen.',
          placeholder: 'Ej: Estudiantes durante la clase de Derecho, campus UC.',
        },
        {
          name: 'layout',
          type: 'string',
          title: 'Tamaño de la imagen',
          description: 'Elige qué tan grande quieres que aparezca la imagen en el artículo.',
          options: {
            list: [
              {title: 'Normal — centrada con ancho moderado', value: 'default'},
              {title: 'Ancha — ocupa más espacio horizontal', value: 'wide'},
              {title: 'Completa — de borde a borde', value: 'full'},
            ],
            layout: 'radio',
          },
          initialValue: 'default',
        },
      ],
    }),
  ],
})
