<template>
  <footer class="site-footer" :style="{ color: $static.settings.footer.color.hex}">
    <BlockContent
      class="footer-contact"
      :blocks="$static.settings.footer._rawContact"
      v-if="$static.settings.footer._rawContact"
    />
    <BlockContent
      class="footer-address"
      :blocks="$static.settings.footer._rawAddress"
      v-if="$static.settings.footer._rawAddress"
    />
    <BlockContent
      class="footer-credits"
      :blocks="$static.settings.footer._rawCredits"
      v-if="$static.settings.footer._rawCredits"
      style="color: black; font-size: .8rem;"
    />
  </footer>
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
      _rawContact
      _rawAddress
      _rawCredits
      color {
        hex
      }
    }
  }
}
</static-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss">
.site-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: var(--sans-serif);
  position: relative;
  padding: 0 6rem 6rem 6rem;
  grid-gap: 2rem;
  a {
    text-decoration: underline;
  }
}
@media (max-width: 1200px) {
  .site-footer {
    padding: 0 4rem 2rem;
    grid-template-columns: 1fr 1fr;
  }
  .footer-credits {
    margin-top: 4rem;
  }
}
@media (max-width: 700px) {
  .site-footer {
    padding: 4rem 1rem 1rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  .footer-credits {
    padding-right: 60px;
    margin-top: .6rem;
  }
  .footer-contact, .footer-address {
    margin-bottom: 1.8rem;
  }
}
</style>
