<template>
  <div id="app" :style="{ '--color-hover': $static.settings.footer.color.hex}">
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

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    footer {
      color {
        hex
      }
    }
  }
}
</static-query>

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
  padding: var(--spacing-m) var(--spacing-m) 12rem;
  animation: none;
  opacity: 1;
  transform: none;
}
</style>
