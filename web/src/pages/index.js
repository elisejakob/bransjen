import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'





import BlockText from '../components/block-text'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'





export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanityProject(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
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
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    sketch: allSanitySketch(
      limit: 3
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
          slug {
            current
          }
        }
      }
    }
    about: sanityAbout(_id: {regex: "/(drafts.|)about/"}) {
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
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  const sketchNodes = data && data.sketch && mapEdgesToNodes(data.sketch).filter(filterOutDocsWithoutSlugs)
  const about = (data || {}).about

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Prosjekter</h1>
        {projectNodes && (
          <ProjectPreviewGrid
            nodes={projectNodes}
          />
        )}
        <h1>Div</h1>
        {sketchNodes && (
          <ProjectPreviewGrid
            nodes={sketchNodes}
          />
        )}
        <h1>Om Bransjen</h1>
        {about.mainImage && about.mainImage.asset && (
          <div>
            <img
              src={imageUrlFor(buildImageObj(about.mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={about.mainImage.alt}
            />
          </div>
        )}
        {about._rawExcerpt && <BlockText blocks={about._rawExcerpt || []} />}
      </Container>
    </Layout>
  )
}

export default IndexPage
