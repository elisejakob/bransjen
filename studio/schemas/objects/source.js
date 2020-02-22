export default {
  name: 'source',
  type: 'object',
  title: 'Source',
  fields: [
    {
      name: 'text', 
      type: 'string', 
      title: 'Tekst'
    },
    {
      name: 'url', 
      type: 'string', 
      title: 'URL',
      description: 'Husk å ha med https:// foran :)'
    }
  ]
}
