export default {
  name: 'footer',
  type: 'object',
  title: 'Footer',
  description: 'Innhold som vises på bunnen av hver side.',
  fields: [
    {
      name: 'contact',
      title: 'Kontakt',
      type: 'simplePortableText'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'simplePortableText'
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'simplePortableText'
    },
    {
      name: 'color',
      type: 'color',
      title: 'Bakgrunnsfarge'
    }
  ]
}
