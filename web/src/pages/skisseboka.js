import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Sketchbook from '../components/sketchbook'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query SketchPageQuery {
    sketch: allSanitySketch(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const SketchbookPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const sketchNodes =
    data && data.sketch && mapEdgesToNodes(data.sketch).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Skisseboka' />
      <Container>
        <h1 className={responsiveTitle1}>Skisseboka</h1>
        {sketchNodes && sketchNodes.length > 0 && <Sketchbook nodes={sketchNodes} />}
      </Container>
    </Layout>
  )
}

export default SketchbookPage
