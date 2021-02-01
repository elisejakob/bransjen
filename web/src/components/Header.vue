<template>
  <header class="site-header">
    <g-link to="/">
      <img v-if="$static.settings.logo" :src="$static.settings.logo.asset.url" class="logo" />
      <h1 v-else>{{$static.settings.title}}</h1>
    </g-link>
    <nav>
      <g-link to="/om">Om Bransjen</g-link>
      <g-link to="/prosjekter">Prosjekter</g-link>
      <g-link to="/div">Diverse</g-link>
      <a class="smiley" href="/">
        <img class="sad" src="/graphics/smiley-no.svg" alt="Smiley som ser litt psycho ut" />
        <img class="happy" src="/graphics/smiley.svg" alt="Smiley som ser litt psycho ut" />
      </a>
    </nav>
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
  padding: 1.5rem 1.5rem 0;
  display: flex;

  .logo {
    width: 12rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
    transition: all .1s ease-in-out;
  }

  nav {
    margin: 0 0 0 auto;
    font-family: var(--sans-serif);
    font-size: 1.3rem;
    a {
      display: inline-block;
      margin-right: 2rem;
      &:hover, &.active {
        color: inherit;
        text-decoration: underline;
      }
    }
    .smiley {
      display: inline-block;
      vertical-align: middle;
      width: 1.5em;
      height: 1.5em;
      position: relative;
      margin-right: 0;
    }
  }
}

.sad, .happy {
  position: absolute;
  width: 1.5em;
  height: 1.5em;
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
    display: block;
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
