import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import About from '../components/about'
import Newsfeed from '../components/newsfeed'
import {mapEdgesToNodes} from '../lib/helpers'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

export const query = graphql`
  query AboutPageQuery {
    site: sanityAbout(_id: {regex: "/(drafts.|)about/"}) {
      title
      _rawExcerpt
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
    news: allSanityNews(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          title
          quote
          source {
            text
            url
          }
        }
      }
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const newsNodes = data && data.news && mapEdgesToNodes(data.news)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} />
      <Container>
        {site && <About {...site} />}
        {newsNodes && newsNodes.length > 0 && <Newsfeed nodes={newsNodes} />}
      </Container>
    </Layout>
  )
}

export default AboutPage
