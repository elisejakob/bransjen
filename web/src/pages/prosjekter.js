import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject(
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
          categories {
            _id
            title
          }
        }
      }
    }
    categories: allSanityCategory(
      limit: 12
    ) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

const ProjectPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  const categoryNodes =
    data && data.categories && mapEdgesToNodes(data.categories)
  return (
    <Layout>
      <SEO title='Prosjekter' />
      <Container>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} categories={categoryNodes} />}
      </Container>
    </Layout>
  )
}

export default ProjectPage
