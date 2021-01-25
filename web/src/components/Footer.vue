<template>
  <footer class="site-footer" :style="{ color: $static.settings.footer.color.hex}">
    <div>
      <a :href="`mailto:${$static.settings.footer.email}`" target="_blank">{{$static.settings.footer.email}}</a>
      <a :href="`https://instagram.com/${$static.settings.footer.instagram}`" target="_blank">Instagram</a>
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
  padding: 2rem;
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
    display: block;
  }
}
</style>
