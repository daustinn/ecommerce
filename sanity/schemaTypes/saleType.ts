import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const saleType = defineType({
  name: 'sale',
  title: 'Sales',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Sale Description',
      type: 'text'
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discount Amount',
      type: 'number',
      description: 'The amount of discount to apply to the sale'
    }),
    defineField({
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string'
    }),
    defineField({
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime'
    }),
    defineField({
      name: 'validUtil',
      title: 'Valid Until',
      type: 'datetime'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to activate/deactivate the sale',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive'
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection
      const status = isActive ? 'Active' : 'Inactive'
      return {
        title: title,
        media: TagIcon,
        subtitle: `${discountAmount}% off with code: ${couponCode} - ${status}`
      }
    }
  }
})
