<template>
  <DivLayout>
  </DivLayout>
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
  }
}
</page-query>

<script>
import DivLayout from '~/layouts/Div'

export default {
  components: {
    DivLayout
  },
  metaInfo() {
    return {
      title: 'Diverse',
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.settings.description
        }
      ]
    }
  }
}
</script>
