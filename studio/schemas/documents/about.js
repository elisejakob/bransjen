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
      name: 'lead',
      title: 'Ingress',
      type: 'text'
    },
    {
      name: 'excerpt',
      title: 'Brødtekst',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    }
  ]
}
