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
    <div class="totop" @click="toTop()">
      <img src="/graphics/arrow-left.svg" alt="Pil til venstre" />
    </div>
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
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.site-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: var(--sans-serif);
  .totop {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    text-align: right;
    width: 40px;
    height: 40px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      transform: rotate(90deg);
    }
  }
  a {
    text-decoration: underline;
  }
}
.site-footer {
  padding: 6rem 6rem;
}
@media (max-width: 1200px) {
  .site-footer {
    padding: 6rem 4rem 2rem;
    grid-template-columns: 1fr 1fr;
  }
  .footer-credits {
    margin-top: 4rem;
  }
}
@media (max-width: 900px) {
  .site-footer {
    padding: 6rem 2rem;
  }
}
</style>
