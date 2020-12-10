<template>
  <header class="site-header">
    <g-link to="/">
      <h1>Bransjen</h1>
    </g-link>
    <nav>
      <g-link to="/om">Om Bransjen</g-link>
      <a href="/prosjekter">Prosjekter</a>
      <g-link to="/div">Div</g-link>
    </nav>
    <div class="smiley">
      <img class="sad" src="/graphics/smiley-no.svg" alt="Smiley som ser litt psycho ut" />
      <img class="happy" src="/graphics/smiley.svg" alt="Smiley som ser litt psycho ut" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  padding: var(--spacing-m) var(--spacing-m) 1rem;
  border-bottom: 1px solid var(--color-text);

  h1 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
  }

  nav {
    a {
      display: inline-block;
      margin-right: 2rem;
      font-family: var(--sans-serif);
      font-size: 1.2rem;
    }
  }
}
.smiley {
  box-sizing: content-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 1.5em;
}

.sad, .happy {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 1.5em;
  right: 1.5em;
}

.sad {
  display: none;
}

.smiley:hover .sad {
  display: block;
}

.smiley:hover .happy {
  display: none;
}
</style>
