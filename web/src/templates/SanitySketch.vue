<template>
  <div>
    <div class="modal" :style="cssVars">
      <div class="sketch-image-wrapper">
        <img
          v-if="$page.sketch.mainImage"
          :src="$urlForImage($page.sketch.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
          class="sketch-image"
          :class="{ whitebg: $page.sketch.whitebg }"
        />
        <div class="sketch-text">{{ $page.sketch.title }}</div>
      </div>
      <div class="buttons">
        <g-link v-if="previousSketch" :to="`/div/${previousSketch}`" class="nav left">
          <img src="/graphics/arrow-left.svg" alt="Pil til venstre" />
        </g-link>
        <g-link v-if="nextSketch" :to="`/div/${nextSketch}`" class="nav right">
          <img src="/graphics/arrow-right.svg" alt="Pil til høyre" />
        </g-link>
      </div>
      <g-link to="/div" class="buttons close">
        <img class="icon" src="/graphics/close.svg" alt="Sirkel med kryss i" />
      </g-link>
    </div>
    <DivLayout>
    </DivLayout>
  </div>
</template>

<page-query>
query sketch ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  sketch: sanitySketch (id: $id) {
    id
    title
    whitebg
    mainImage {
      asset {
        _id
        url
      }
      alt
    }
    slug {
      current
    }
    colors {
      gradient1 {
        rgb {
          r
          g
          b
        }
      }
      gradient2 {
        rgb {
          r
          g
          b
        }
      }
    }
  }
  sketches: allSanitySketch(
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
  ) {
    edges {
      node {
        id
        slug {
          current
        }
      }
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    description
  }
}
</page-query>

<script>
import DivLayout from '~/layouts/Div'

export default {
  components: {
    DivLayout
  },
  computed: {
    sketchIds() {
      const sketches = this.$page.sketches.edges;
      const ids = [];
      for (let i = 0; i < this.$page.sketches.edges.length; i++) {
        ids.push(this.$page.sketches.edges[i].node.id)
      }
      return ids
    },
    nextSketch() {
      const sketches = this.sketchIds;
      const currentIndex = sketches.indexOf(this.$page.sketch.id);
      const nextIndex = (currentIndex + 1) % sketches.length;
      if ((nextIndex < this.$page.sketches.edges.length) && (nextIndex !== 0)) {
        return this.$page.sketches.edges[nextIndex].node.slug.current
      }
      return null
    },
    previousSketch() {
      const sketches = this.sketchIds;
      const currentIndex = sketches.indexOf(this.$page.sketch.id);
      const previousIndex = (currentIndex - 1) % sketches.length;
      if (previousIndex > -1) {
        return this.$page.sketches.edges[previousIndex].node.slug.current
      }
      return null
    },
    cssVars() {
      if (this.$page.sketch.colors && this.$page.sketch.colors.gradient1.rgb && this.$page.sketch.colors.gradient2.rgb) {
        return {
          '--color-gradient-1': 'rgba(' + this.$page.sketch.colors.gradient1.rgb.r + ',' + this.$page.sketch.colors.gradient1.rgb.g + ',' + this.$page.sketch.colors.gradient1.rgb.b + ',.92)',
          '--color-gradient-2': 'rgba(' + this.$page.sketch.colors.gradient2.rgb.r + ',' + this.$page.sketch.colors.gradient2.rgb.g + ',' + this.$page.sketch.colors.gradient2.rgb.b + ',.92)',
        }
      }
    },
  },
  metaInfo() {
    return {
      title: this.$page.sketch.title,
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.settings.description
        },
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.sketch.mainImage.asset.url
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: linear-gradient(60deg, var(--color-gradient-1), var(--color-gradient-2));
  opacity: 0;
  animation: fadeIn .2s forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.sketch-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sketch-image {
  max-width: 50%;
  max-height: 80vh;
  margin: 0 auto;
  background: transparent;
  object-fit: contain;

  &.whitebg {
    background: #fff;
  }
}

.sketch-text {
  margin: 1rem auto;
}

.buttons {
  z-index: 1001;
}

.nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    left: 15rem;
    width: 40px;
    height: 40px;
  }
  &.right {
    right: 15rem;
    width: 40px;
    height: 40px;
  }
}

.close {
  box-sizing: content-box;
  position: fixed;
  top: 20%;
  right: 15rem;
  width: 36px;
  height: 36px;

  .icon {
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 700px) {
  .sketch-image {
    max-width: none;
    width: 100%;
  }
  .nav {
    top: auto;
    bottom: 0;

    &.left, &.right {
      width: 30px;
      height: 30px;
    }
    &.left {
      left: 1rem;
    }
    &.right {
      right: 1rem;
    }
  }
  .close {
    padding: 1rem;
    top: 0;
    right: 0;
    width: 27px;
    height: 27px;
    .icon {
      width: 27px;
      height: 27px;
    }
  }
}
</style>
