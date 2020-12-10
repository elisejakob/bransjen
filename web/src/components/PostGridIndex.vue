<template>
  <div class="projects">
    <div class="project-grid">
      <div class="intro">
        {{ $static.about.lead }}
      </div>
      <PostItem
        v-for="(project, index) in selectedProjects"
        :key="project.node.id"
        :project="project.node"
        :metadata="$static.metadata"
        :style="{order: index + (index + 1)}"
        class="project"
      />
      <SketchItem
        v-for="(sketch, index) in selectedSketches"
        :key="sketch.node.id"
        :sketch="sketch.node"
        :metadata="$static.metadata"
        :style="{order: index + (index + 2)}"
        class="sketch"
      />
    </div>
    featured: {eq: true}
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
  about: sanityAbout(id: "about") {
    lead
  }
  projects: allSanityProject(
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
        _rawExcerpt
        slug {
          current
        }
        categories {
          _id
          title
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
import PostItem from '~/components/PostItem'
import SketchItem from '~/components/SketchItem'

export default {
  props: {
    limit: {
      type: Number,
      default: 100
    },
    showMenu: Boolean
  },
  components: {
    PostItem,
    SketchItem
  },
  computed: {
    selectedProjects() {
      let shuffledProjects = this.$static.projects.edges.sort(() => 0.5 - Math.random());
      return shuffledProjects.slice(0, 4);
    },
    selectedSketches() {
      let shuffledSketches = this.$static.sketches.edges.sort(() => 0.5 - Math.random());
      return shuffledSketches.slice(0, 4);
    }
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-gap: var(--spacing-m);
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 12rem;

  .intro {
    grid-column: 1 / span 4;
  }

  .project {
    transform: translate(30%, 60%);
    position: relative;
    z-index: 10;

    &:nth-of-type(even) {
      transform: translate(0, 20%);
    }
  }

  .sketch {
    transform: translate(20%, 30%);
    width: 300px;
    position: relative;
    z-index: 10;

    &:nth-of-type(even) {
      transform: translate(-50%, 50%);
    }
  }

}
</style>
