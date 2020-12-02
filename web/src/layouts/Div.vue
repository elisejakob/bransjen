<template>
  <div id="app">
    <Header />
    <div class="page">
      <main class="site-main">
        <SketchGrid />
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SketchGrid from '~/components/SketchGrid'

export default {
  components: {
    Header,
    Footer,
    SketchGrid
  }
}
</script>

<style lang="scss" scoped>
.site-main {
  padding: var(--spacing-m);
}
</style>
