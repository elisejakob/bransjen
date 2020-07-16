import {format} from 'date-fns'

export default {
  name: 'project',
  title: 'Prosjekt',
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
      description: 'Slutten på URLen til prosjektet, eks. bransjen.no/prosjekter/slug-kommer-her',
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
      name: 'client',
      title: 'Kunde',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Ingress',
      type: 'simplePortableText'
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'indexImage',
      title: 'Forsidebilde',
      type: 'figure'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    },
    {
      name: 'gallery',
      title: 'Galleri',
      type: 'array',
      of: [
        {
          type: 'figure'
        },
        {
          type: 'figureTwoColumn'
        },
        {
          type: 'video'
        }
      ]
    },
    {
      name: 'relatedProjects',
      title: 'Lignende prosjekter',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}]
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
