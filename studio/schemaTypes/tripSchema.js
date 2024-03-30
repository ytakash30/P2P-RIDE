import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trips',
  type: 'document',
  title: 'Trips',
  fields: [
    defineField({
      name: 'dropoff',
      type: 'string',
      title: 'Drop off',
    }),
    defineField({
      name: 'pickup',
      type: 'string',
      title: 'Pick up',
    }),
    defineField({
      name: 'rideCategory',
      type: 'string',
      title: 'Trip type',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Trip price',
    }),
    defineField({
      name: 'rideTimestamp',
      type: 'datetime',
      title: 'Trip timestamp',
    }),
    defineField({
      name: 'passenger',
      type: 'reference',
      title: 'Passenger',
      to: [{ type: 'users' }],
    }),
  ],
})
