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
  position: relative;
  padding: 0 10rem 6rem 6rem;
  .totop {
    position: absolute;
    top: 0;
    right: 1.5rem;
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
@media (max-width: 1200px) {
  .site-footer {
    padding: 6rem 4rem 2rem;
    grid-template-columns: 1fr 1fr;

    .totop {
      display: none;
    }
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

    .totop {
      width: 30px;
      height: 30px;
      right: 1rem;
      bottom: 2rem;
      img {
        width: 30px;
        height: 30px;
      }
    }
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
