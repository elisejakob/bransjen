<template>
  <div class="projects">
    <VueMasonryWall :items="$static.sketches.edges">
      <template v-slot:default="{item}">
        <div class="item">
          {{ item.title }}
        </div>
      </template>
    </VueMasonryWall>
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
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
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
  categories: allSanityCategory(
    limit: 12
  ) {
    edges {
      node {
        id
        title
      }
    }
  }
}

</static-query>

<script>
import VueMasonryWall from 'vue-masonry-wall'

export default {
  components: {
    VueMasonryWall
  },
  props: {
    limit: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-gap: var(--spacing-m);
  grid-template-columns: repeat(12, 1fr);
}
</style>
