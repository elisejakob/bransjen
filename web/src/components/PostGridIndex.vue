<template>
  <div class="projects">
    <div class="project-grid">
      <p class="intro">
        {{ $static.about.excerpt }}
      </p>
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
    excerpt
  }
  projects: allSanityProject(
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}, featured: {eq: true}}
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
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}, featured: {eq: true}}
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

  .intro {
    grid-column: span 4;
    font-size: 1.4rem;
  }

  .project {
    transform: translate(30%, 60%);
    position: relative;
    z-index: 10;

    &:nth-of-type(even) {
      transform: translate(0, 20%);
    }
    &:nth-of-type(2) {
      transform: translate(20%, 20%);
    }
  }

  .sketch {
    transform: translate(20%, 30%);
    width: 300px;
    position: relative;
    z-index: 10;

    &:nth-of-type(even) {
      transform: translate(-30%, 20%);
    }
    &:nth-of-type(8) {
      transform: translate(20%, 0);
    }
  }
}
@media (max-width: 900px) {
  .project-grid {
    grid-template-columns: repeat(8, 1fr);
    .intro {
      grid-column: span 8;
    }
    .project {
      padding: 0 0 0 10%;
      transform: none;
      &:nth-of-type(even) {
        padding: 0 10% 0 0;
        transform: none;
      }
    }
    .sketch {
      grid-column: span 4;
      transform: none;
      width: 100%;
      padding: 0 10% 0 20%;
      margin-bottom: -5rem;
      &:nth-of-type(even) {
        transform: none;
        padding: 0 20% 0 10%;
      }
    }
  }
}
@media (max-width: 700px) {
  .project-grid {
    grid-template-columns: repeat(4, 1fr);
    .project {
      padding: 0 0 0 10%;
      transform: none;
      &:nth-of-type(even) {
        padding: 0 10% 0 0;
        transform: none;
      }
    }
    .sketch {
      grid-column: span 4;
      transform: none;
      width: 100%;
      padding: 0 10% 0 20%;
      margin-bottom: -5rem;
      &:nth-of-type(even) {
        transform: none;
        padding: 0 20% 0 10%;
      }
    }
  }
}
</style>
