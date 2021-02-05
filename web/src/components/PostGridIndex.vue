<template>
  <div class="projects">
    <div class="project-grid" :class="layoutClass">
      <div class="intro">
        <p>{{ $static.about.excerpt }}</p>
      </div>
      <div v-for="(project, index) in selectedProjects" :key="project.node.id" :class="`wrapper wrapper-${index + 1}`">
        <div :class="`item item-${index + 1}`">
          <PostItemIndex
            :project="project.node"
            :metadata="$static.metadata"
            :class="`project project-${index + 1}`"
          />
          <SketchItem
            :key="selectedSketches[index].node.id"
            :sketch="selectedSketches[index].node"
            :metadata="$static.metadata"
            :class="`sketch sketch-${index + 1}`"
          />
        </div>
      </div>
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
        indexImage {
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
import PostItemIndex from '~/components/PostItemIndex'
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
    PostItemIndex,
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
    },
    layoutClass() {
      const classes = ['layout-1', 'layout-2', 'layout-3']
      return classes[1]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .intro {
    width: 50%;
    font-size: 1.2rem;

    p {
      max-width: 24rem;
    }
  }

  .wrapper {
    width: 50%;
    margin-bottom: 3rem;
    text-align: center;
    &-2, &-4 {
      transform: translate(0, -40%);
    }
  }

  .item {
    display: inline-block;
    position: relative;
  }

  .project {
    display: inline-block;
    position: relative;
    margin: 0 auto;
    z-index: 10;
    text-align: left;
  }

  .sketch {
    position: absolute;
    width: 16rem;
    top: 0;
    right: 0;
    z-index: 11;
  }

  &.layout-1 {
    .project-1 {
      transform: translate(50%, 50%);
    }
    .project-2 {
      transform: translate(0, 20%);
    }
    .project-3 {
      transform: translate(20%, 20%);
    }
    .project-4 {
      transform: translate(20%, 20%);
    }
    .sketch-1 {
      transform: translate(50%, 0);
    }
    .sketch-2 {
      transform: translate(50%, 50%);
    }
    .sketch-3 {
      transform: translate(50%, 50%);
    }
    .sketch-4 {
      transform: translate(50%, 70%);
    }
  }
  &.layout-2 {
    .project-1 {
      transform: translate(50%, 50%);
    }
    .project-2 {
      transform: translate(0, 20%);
    }
    .project-3 {
      transform: translate(20%, 20%);
    }
    .project-4 {
      transform: translate(20%, 20%);
    }
    .sketch-1 {
      transform: translate(50%, 0);
    }
    .sketch-2 {
      transform: translate(50%, 50%);
    }
    .sketch-3 {
      transform: translate(50%, 50%);
    }
    .sketch-4 {
      transform: translate(50%, 70%);
    }
  }
}
@media (max-width: 1600px) {
  .wrapper {
    padding: 0 2rem;
  }
}
@media (max-width: 1200px) {
  .wrapper {
    padding: 0 3rem;
  }
  .project-grid .sketch {
    width: 12rem;
  }
}
@media (max-width: 800px) {
  .project-grid {
    .intro {
      font-size: 1rem;
    }
    .intro, .wrapper {
      width: 100%;
      padding: 0;
      margin-bottom: 4rem;
      transform: none !important;
      text-align: left;
    }
    .wrapper:nth-child(odd) {
      text-align: right;
      .sketch {
        width: 50%;
        left: -30%;
        right: auto;
        top: -20%;
      }
    }
    .project {
      width: 70%;
    }
    .sketch {
      width: 50%;
      right: 20%;
      top: 10%;
      transform: none;
    }
  }
}
</style>
