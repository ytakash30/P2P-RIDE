import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'rides',
  title: 'Rides',
  type: 'document',
  fields: [
    defineField({
      name: 'orderById',
      title: 'Order by Id',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'priceMultiplier',
      title: 'Price Multiplier',
      type: 'number',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     // Add media selection here if needed
  //   },
  // },
})
