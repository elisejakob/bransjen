<template>
  <footer class="site-footer" :style="{ background: $static.settings.footer.color.hex}">
    <div>
      <a :href="`mailto:${$static.settings.footer.email}`" target="_blank">{{$static.settings.footer.email}}</a>
    </div>
    <div>
      <a :href="`https://instagram.com/${$static.settings.footer.instagram}`" target="_blank">@{{$static.settings.footer.instagram}}</a>
    </div>
    <div>
      <a :href="$static.settings.footer.googlemaps" target="_blank">{{$static.settings.footer.address}}</a>
    </div>
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
      email
      instagram
      address
      googlemaps
      color {
        hex
      }
    }
  }
}
</static-query>

<script>
export default {
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
  position: fixed;
  background: pink;
  bottom: 0;
  right: 0;
  left: 0;
  padding: .6rem var(--spacing-m);
  border-top: 1px solid var(--color-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .totop {
    text-align: right;
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
      transform: rotate(90deg);
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
