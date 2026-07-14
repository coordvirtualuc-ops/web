import {defineField, defineType} from 'sanity'

/**
 * author
 * Autores del blog de UC Universidad Continental.
 * Ej: Admisiones UC, Equipo académico UC, Comunicación UC.
 */
export const author = defineType({
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del autor',
      type: 'string',
      description: 'Ejemplo: Equipo UC, Admisiones UC, María González.',
      placeholder: 'Ej: Equipo UC',
      validation: (Rule) => Rule.required().error('El nombre del autor es requerido.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL del autor',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'Presiona "Generate" después de escribir el nombre.',
    }),
    defineField({
      name: 'role',
      title: 'Cargo o área',
      type: 'string',
      description:
        'Ejemplo: Comunicación UC, Admisiones UC o Coordinación Académica.',
      placeholder: 'Ej: Coordinación Académica',
    }),
    defineField({
      name: 'image',
      title: 'Fotografía o imagen del autor',
      type: 'image',
      options: {hotspot: true},
      description: 'Opcional. Se mostrará junto al artículo en el blog.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Describe la imagen. Ejemplo: "Foto de María González, docente UC."',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Semblanza breve',
      type: 'text',
      rows: 4,
      description:
        'Breve descripción del autor para el blog. Máximo 2-3 oraciones (opcional).',
      placeholder: 'Ej: Equipo de Admisiones de UC Universidad Continental, dedicado a orientar a futuros estudiantes.',
    }),
    defineField({
      name: 'email',
      title: 'Correo electrónico interno',
      type: 'string',
      description:
        'Este correo es interno y no se mostrará públicamente por ahora. Solo para referencia del equipo editorial.',
      placeholder: 'admisiones@ucontinental.edu.mx',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
