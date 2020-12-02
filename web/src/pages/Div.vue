<template>
  <Layout>
    <SketchGrid />
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
import SketchGrid from '~/components/SketchGrid'

export default {
  components: {
    SketchGrid
  }
}
</script>
