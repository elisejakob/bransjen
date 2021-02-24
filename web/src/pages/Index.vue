<template>
  <Layout>
    <PostGridIndex />
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
import PostGridIndex from '~/components/PostGridIndex'

export default {
  components: {
    PostGridIndex
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
