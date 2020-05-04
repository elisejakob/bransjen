export default {
  name: 'figureTwoColumn',
  title: 'Bilder i to kolonner',
  type: 'object',
  fields: [
    {
      name: 'image1',
      title: 'Bilde 1',
      type: 'figure'
    },
    {
      name: 'image2',
      title: 'Bilde 2',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image1.asset.url',
      title: 'image1.caption'
    }
  }
}
