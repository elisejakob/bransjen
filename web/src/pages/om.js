import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery {
    site: sanityAbout(_id: {regex: "/(drafts.|)about/"}) {
      title
      _rawExcerpt
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

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} />
      <Container>
        <h1 className={responsiveTitle1}>{ site.title }</h1>
        {site._rawExcerpt && <BlockText blocks={site._rawExcerpt || []} />}
      </Container>
    </Layout>
  )
}

export default AboutPage
