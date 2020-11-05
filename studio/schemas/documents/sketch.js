import {format} from 'date-fns'

export default {
  name: 'sketch',
  title: 'Skisse',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slutten på URLen, eks. bransjen.no/div/slug-kommer-her',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Publisert',
      type: 'datetime'
    },
    {
      title: 'Vis på forsiden',
      name: 'featured',
      type: 'boolean'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage',
      publishedAt: 'publishedAt'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
