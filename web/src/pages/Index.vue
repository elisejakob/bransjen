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
}
</page-query>

<script>
import PostGridIndex from '~/components/PostGridIndex'

export default {
  components: {
    PostGridIndex
  }
}
</script>
