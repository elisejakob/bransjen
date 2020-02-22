import React, { useEffect } from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Newsfeed from '../components/newsfeed'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query NewsPageQuery {
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

const NewsPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  useEffect(() => {
    document.body.classList.add('bransjenytt');
    return () => {
      document.body.classList.remove('bransjenytt');
    };
  });

  const newsNodes =
    data && data.news && mapEdgesToNodes(data.news)

  console.log(newsNodes);

  return (
    <Layout>
      <SEO title='Bransjenytt' />
      <Container>
        <h1 className={responsiveTitle1}>Bransjenytt</h1>
        {newsNodes && newsNodes.length > 0 && <Newsfeed nodes={newsNodes} />}
      </Container>
    </Layout>
  )
}

export default NewsPage
