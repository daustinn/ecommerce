import { TiersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

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
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'product' }]
        })
      ]
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
