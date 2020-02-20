import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Finner ikke siden!' />
    <h1>Finner ikke siden!</h1>
    <p>Ånei! Denne siden er visst borte. Si ifra til oss på <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>!</p>
  </Layout>
)

export default NotFoundPage
