import {defineField, defineArrayMember} from 'sanity'

export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'workTitle',
      title: 'Work Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
