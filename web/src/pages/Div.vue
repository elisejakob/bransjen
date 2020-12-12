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
}
</page-query>

<script>
import DivLayout from '~/layouts/Div'

export default {
  components: {
    DivLayout
  }
}
</script>
