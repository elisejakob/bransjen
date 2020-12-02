<template>
  <header class="site-header">
    <g-link to="/">
      <h1>Bransjen</h1>
    </g-link>
    <nav>
      <a href="/">Om Bransjen</a>
      <a href="/">Prosjekter</a>
      <g-link to="/div">Div</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  padding: var(--spacing-m);

  nav {
    a {
      display: inline-block;
      margin-right: 2rem;
    }
  }
}
</style>
