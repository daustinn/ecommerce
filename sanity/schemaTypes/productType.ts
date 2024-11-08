import { TrolleyIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

// eslint-disable-next-line import/no-anonymous-default-export
export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'blockContent'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0)
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.min(0)
    })
  ],
  preview: {
    select: {
      title: 'name',
      images: 'images',
      price: 'price'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.images[0],
        subtitle: `$${selection.price}`
      }
    }
  }
})
