import {format} from 'date-fns'

export default {
  name: 'news',
  title: 'Bransjenytt',
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
      description: 'Slutten på URLen til nyheten, eks. bransjen.no/prosjekter/slug-kommer-her',
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
      name: 'quote',
      title: 'Sitat',
      type: 'text',
      rows: 3
    },
    {
      title: 'Kilde',
      name: 'source',
      type: 'source'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
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
