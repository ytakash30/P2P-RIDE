import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'users',
  type: 'document',
  title: 'Users',
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
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    }),
  ],
})
