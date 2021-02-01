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
      type: 'text'
    },
    {
      name: 'body',
      title: 'Brødtekst',
      type: 'simplePortableText'
    },
    {
      name: 'clients',
      title: 'Kunder',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    }
  ]
}
