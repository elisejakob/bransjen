<template>
  <footer class="site-footer">
    <div class="totop" @click="toTop()">
      Til toppen &uarr;
    </div>
  </footer>
</template>

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
  padding: var(--spacing-m);
  .totop {
    text-align: right;
  }
}
</style>
