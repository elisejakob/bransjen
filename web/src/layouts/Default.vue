<template>
  <div id="app">
    <Header />
    <div class="page">
      <main class="site-main">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.site-main {
  padding: var(--spacing-m);
}
</style>
