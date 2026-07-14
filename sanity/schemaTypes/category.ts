import {defineField, defineType} from 'sanity'

/**
 * category
 * Categorías editoriales del blog de UC Universidad Continental.
 * Ejemplos: Orientación vocacional, Vida universitaria, Admisiones, etc.
 */
export const category = defineType({
  name: 'category',
  title: 'Categorías del blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la categoría',
      type: 'string',
      description:
        'Ejemplo: Orientación vocacional, Admisiones, Vida universitaria.',
      placeholder: 'Ej: Orientación vocacional',
      validation: (Rule) => Rule.required().error('La categoría debe tener un nombre.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL de la categoría',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description:
        'Presiona "Generate" después de escribir el nombre. No lo modifiques manualmente.',
      validation: (Rule) => Rule.required().error('El slug es requerido.'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción breve',
      type: 'text',
      rows: 3,
      description:
        'Explica brevemente qué tipo de artículos pertenecen a esta categoría. Ejemplo: "Artículos con consejos y guías para estudiantes que están eligiendo carrera."',
      placeholder: 'Ej: Artículos con consejos y guías para estudiantes que están eligiendo carrera.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
