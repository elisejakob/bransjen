export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'excerpt',
      title: 'Ingress',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Stikkord',
      description: 'Stikkord som brukes av søkemotorer.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
