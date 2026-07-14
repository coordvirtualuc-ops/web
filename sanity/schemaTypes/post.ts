import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * post
 * Artículos del blog de UC Universidad Continental.
 *
 * Flujo editorial guiado por grupos:
 *  1. Información principal  → título, URL, resumen, categoría, autor, fecha, detalles
 *  2. Imagen de portada      → imagen, alt, pie
 *  3. Contenido del artículo → editor de texto enriquecido
 *  4. Publicación            → estado, fecha de actualización
 *  5. SEO                    → metaTitle, metaDescription, ogImage, noIndex
 *  6. Programas relacionados → modo y slugs opcionales
 */
export const post = defineType({
  name: 'post',
  title: 'Artículos del blog',
  type: 'document',

  // ─── Grupos editoriales ──────────────────────────────────────────────────────
  groups: [
    {
      name: 'principal',
      title: '1. Información principal',
      default: true,
    },
    {
      name: 'portada',
      title: '2. Imagen de portada',
    },
    {
      name: 'contenido',
      title: '3. Contenido del artículo',
    },
    {
      name: 'publicacion',
      title: '4. Publicación',
    },
    {
      name: 'seo',
      title: '5. SEO',
    },
    {
      name: 'programas',
      title: '6. Programas relacionados',
    },
  ],

  fields: [
    // ─── 1. Información principal ────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título del artículo',
      type: 'string',
      group: 'principal',
      description: 'El título que verá el lector en el blog. Máximo 90 caracteres.',
      placeholder: 'Ej: 5 razones para estudiar en UC Universidad Continental',
      validation: (Rule) =>
        Rule.required()
          .max(90)
          .error('El título es requerido.')
          .warning('Se recomiendan máximo 90 caracteres para el título.'),
    }),

    defineField({
      name: 'slug',
      title: 'URL del artículo',
      type: 'slug',
      group: 'principal',
      description:
        'Presiona "Generate" después de escribir el título. Esto crea la dirección del artículo en el blog.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('El slug es requerido para la URL.'),
    }),

    defineField({
      name: 'excerpt',
      title: 'Resumen corto',
      type: 'text',
      rows: 3,
      group: 'principal',
      description:
        'Este texto aparece en las tarjetas del blog y en algunos resultados de búsqueda. Máximo 180 caracteres.',
      placeholder:
        'Ej: Conoce los beneficios de estudiar en UC y cómo iniciar tu proceso de inscripción este ciclo.',
      validation: (Rule) =>
        Rule.required()
          .max(180)
          .error('El resumen es requerido.')
          .warning('Se recomiendan máximo 180 caracteres.'),
    }),

    defineField({
      name: 'category',
      title: 'Categoría del blog',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'principal',
      description:
        'Selecciona la categoría donde se organizará este artículo. Si no existe, créala primero en "Categorías del blog".',
      validation: (Rule) => Rule.required().error('Asigna una categoría al artículo.'),
    }),

    defineField({
      name: 'author',
      title: 'Autor o área responsable',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'principal',
      description:
        'Selecciona quién firma el artículo. Puede ser "Equipo UC" u otro autor registrado.',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'principal',
      description:
        'Fecha visible para el lector. Usualmente se usa la fecha del día en que se publica.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error('La fecha de publicación es requerida.'),
    }),

    defineField({
      name: 'readingTime',
      title: 'Tiempo estimado de lectura',
      type: 'string',
      group: 'principal',
      description: 'Opcional. Ejemplo: "4 min de lectura".',
      placeholder: 'Ej: 4 min de lectura',
    }),

    defineField({
      name: 'featured',
      title: 'Mostrar como artículo destacado',
      type: 'boolean',
      group: 'principal',
      description:
        'Activa esta opción si quieres que el artículo aparezca en zonas destacadas del blog.',
      initialValue: false,
    }),

    // ─── 2. Imagen de portada ────────────────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Imagen principal del artículo',
      type: 'image',
      group: 'portada',
      description:
        'Imagen horizontal recomendada: 1200 × 700 px. Evita imágenes con texto encima.',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description:
            'Describe brevemente la imagen para accesibilidad y SEO. Ejemplo: "Estudiantes de UC en el campus."',
          placeholder: 'Ej: Estudiantes de UC en el campus de Tepic',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Pie de imagen',
          description: 'Texto opcional para acompañar la imagen debajo.',
          placeholder: 'Ej: Campus UC, Tepic, Nayarit.',
        }),
      ],
    }),

    // ─── 3. Contenido del artículo ───────────────────────────────────────────
    defineField({
      name: 'content',
      title: 'Contenido del artículo',
      type: 'blockContent',
      group: 'contenido',
      description:
        'Escribe aquí el artículo completo. Puedes usar subtítulos, listas, citas, enlaces e imágenes.',
      validation: (Rule) => Rule.required().error('El contenido del artículo es requerido.'),
    }),

    // ─── 4. Publicación ──────────────────────────────────────────────────────
    defineField({
      name: 'status',
      title: 'Estado de publicación',
      type: 'string',
      group: 'publicacion',
      options: {
        list: [
          {title: 'Borrador — aún no aparece en el sitio', value: 'draft'},
          {title: 'Publicado — visible para todos los visitantes', value: 'published'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required().error('Selecciona un estado para el artículo.'),
      description:
        'Solo los artículos con estado "Publicado" aparecen en el sitio público.',
    }),

    defineField({
      name: 'updatedAt',
      title: 'Fecha de actualización',
      type: 'datetime',
      group: 'publicacion',
      description:
        'Opcional. Úsala solo si el artículo fue editado de forma importante después de publicarse.',
    }),

    // ─── 5. SEO ──────────────────────────────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'Configuración SEO',
      type: 'seo',
      group: 'seo',
      description:
        'Campos opcionales para mejorar cómo aparece el artículo en Google y al compartir en redes sociales.',
    }),

    // ─── 6. Programas relacionados ───────────────────────────────────────────
    defineField({
      name: 'relatedProgramsMode',
      title: 'Programas académicos relacionados',
      type: 'string',
      group: 'programas',
      options: {
        list: [
          {title: 'Mostrar programas automáticamente', value: 'random'},
          {title: 'Elegir programas específicos', value: 'manual'},
          {title: 'No mostrar programas', value: 'none'},
        ],
        layout: 'radio',
      },
      initialValue: 'random',
      description:
        'Estos programas aparecerán al final del artículo como recomendaciones académicas.',
    }),

    defineField({
      name: 'relatedProgramSlugs',
      title: 'IDs de programas específicos',
      type: 'array',
      group: 'programas',
      of: [defineArrayMember({type: 'string'})],
      description:
        'Escribe los IDs de programas separados en la lista. Ejemplos: educacion, derecho, administracion-empresas, lenguas-extranjeras.',
      hidden: ({document}) => document?.relatedProgramsMode !== 'manual',
    }),
  ],

  // ─── Preview en Studio ───────────────────────────────────────────────────────
  preview: {
    select: {
      title: 'title',
      categoryTitle: 'category.title',
      media: 'coverImage',
      status: 'status',
      publishedAt: 'publishedAt',
    },
    prepare({title, categoryTitle, media, status, publishedAt}) {
      const statusLabel = status === 'published' ? '✅ Publicado' : '✏️ Borrador'
      const dateLabel = publishedAt
        ? new Date(publishedAt).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'Sin fecha'
      const categoryLabel = categoryTitle ?? 'Sin categoría'

      return {
        title: title ?? 'Sin título',
        subtitle: `${categoryLabel} · ${statusLabel} · ${dateLabel}`,
        media,
      }
    },
  },
})
