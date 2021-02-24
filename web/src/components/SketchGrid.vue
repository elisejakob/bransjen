<template>
  <div class="projects">
    <ClientOnly>
      <VueMasonryWall :items="$static.sketches.edges" :options="options">
        <template v-slot:default="{item}">
          <SketchItem
            :key="item.node.id"
            :sketch="item.node"
            :metadata="$static.metadata"
          />
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
      options: {
        width: 300,
        padding: {
          default: 12,
          1: 6,
          2: 8
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 1200;
  margin: 0 auto;
}
</style>
