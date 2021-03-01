<template>
  <div class="projects">
    <ClientOnly>
      <VueMasonryWall :items="$static.sketches.edges" :options="options" ref="wall">
        <template v-slot:default="{item}">
          <div class="sketch" :key="item.node.id">
            <g-image
              v-if="item.node.mainImage"
              class="sketch-image"
              :src="$urlForImage(item.node.mainImage, $page.metadata.sanityOptions).width(800).auto('format').url()"
              :alt="item.node.mainImage.alt"
              @load="loaded()"
            />
            <div class="sketch-content">
              <g-link class="sketch-link" :to="`/div/${item.node.slug.current}`">Link</g-link>
            </div>
          </div>
        </template>
      </VueMasonryWall>
    </ClientOnly>
  </div>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  sketches: allSanitySketch(
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}},
    sortBy: "publishedAt", order: DESC
  ) {
    edges {
      node {
        id
        mainImage {
          asset {
            _id
          }
          alt
        }
        title
        slug {
          current
        }
      }
    }
  }
}

</static-query>

<script>
import VueMasonryWall from 'vue-masonry-wall';
import SketchItem from '~/components/SketchItem';

export default {
  components: {
    VueMasonryWall,
    SketchItem
  },
  props: {
    limit: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      imageloaded: 0,
      options: {
        width: 300,
        padding: {
          default: 12,
          1: 6,
          2: 8
        }
      }
    }
  },
  methods: {
    loaded() {
      this.imageloaded++;
      if (this.imageloaded === this.$static.sketches.edges.length) {
        this.imagesLoaded()
      }
    },
    imagesLoaded() {
      this.$refs.wall.redraw();
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 1200;
  margin: 0 auto;
}
.sketch {
  position: relative;

  &-image {
    display: block;
    width: 100%;
  }

  &-title {
    margin-top: 0;
    font-size: 2rem;
  }

  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
