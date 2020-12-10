export default {
  name: 'footer',
  type: 'object',
  title: 'Footer',
  description: 'Innhold som vises på bunnen av hver side.',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'E-postadresse'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram-brukernavn'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adresse'
    },
    {
      name: 'googlemaps',
      type: 'string',
      title: 'Google Maps-lenke'
    },
    {
      name: 'color',
      type: 'color',
      title: 'Bakgrunnsfarge'
    }
  ]
}
