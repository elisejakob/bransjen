<template>
  <Layout>
    <PostGrid />
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    description
    ogimg {
      asset {
        url
      }
    }
  }
}
</page-query>

<script>
import PostGrid from '~/components/PostGrid'

export default {
  components: {
    PostGrid
  },
  metaInfo() {
    return {
      title: 'Om',
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.settings.description
        },
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.settings.ogimg.asset.url
        }
      ]
    }
  }
}
</script>
