import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Driver',
  type: 'document',
  title: 'Drivers Details',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    }),
    defineField({
      name: 'carNumber',
      type: 'string',
      title: 'carNumber',
    }),
    defineField({
        name: 'DrivingLicense',
        type: 'string',
        title: 'LicenseNumber',
      }),
  ],
})
