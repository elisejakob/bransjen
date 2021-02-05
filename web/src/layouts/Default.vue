<template>
  <div id="app" :style="{ '--color-hover': $static.settings.footer.color.hex}">
    <Header />
    <div class="page">
      <main class="site-main">
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

export default {
  components: {
    Header,
    Footer
  },

}
</script>

<style lang="scss" scoped>
.site-main {
  padding: 3rem 6rem;
}
@media (max-width: 1200px) {
  .site-main {
    padding: 3rem 4rem;
  }
}
@media (max-width: 900px) {
  .site-main {
    padding: 3rem 2rem;
  }
}
</style>
