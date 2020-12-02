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
  position: fixed;
  background: pink;
  bottom: 0;
  right: 0;
  left: 0;
  padding: .6rem var(--spacing-m);
  border-top: 1px solid var(--color-text);
  .totop {
    text-align: right;
  }
}
</style>
