import { TiersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collections',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'backgroundColour',
      title: 'Background Colour',
      type: 'simplerColor',
      options: {
        disableAlpha: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      coverPhoto: 'coverPhoto',
      description: 'description'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.coverPhoto,
        subtitle: selection.description
      }
    }
  }
})
