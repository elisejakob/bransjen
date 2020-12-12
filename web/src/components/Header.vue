<template>
  <header class="site-header">
    <g-link to="/">
      <img v-if="$static.settings.logo" :src="$static.settings.logo.asset.url" class="logo" />
      <h1 v-else>{{$static.settings.title}}</h1>
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

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    logo {
      asset {
        url
      }
    }
    title
  }
}
</static-query>

<style lang="scss" scoped>
.site-header {
  padding: var(--spacing-m) var(--spacing-m) 1rem;
  border-bottom: 1px solid var(--color-text);

  .logo {
    width: 13rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
    transition: all .1s ease-in-out;
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

@media (max-width: 700px) {
  .site-header {
    nav {
      display: flex;
      justify-content: space-between;
      a {
        margin: 0;
      }
    }
  }
}
</style>
