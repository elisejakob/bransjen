export default {
  name: 'figure',
  title: 'Bilde',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Bildetekst',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      description: 'Viktig for universell utforming og SEO! Beskriv kort hva bildet viser.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
