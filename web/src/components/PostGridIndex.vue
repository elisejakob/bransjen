<template>
  <div class="projects">
    <div class="project-grid" :class="layoutClass">
      <div class="intro">
        <g-link to="/om"><p>{{ $static.about.excerpt }}</p></g-link>
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
  data() {
    return {
      shuffledProjects: [],
      shuffledSketches: []
    }
  },
  computed: {
    selectedProjects() {
      return this.shuffledProjects.slice(0, 4);
    },
    selectedSketches() {
      return this.shuffledSketches.slice(0, 4);
    },
    layoutClass() {
      const classes = ['layout-1', 'layout-2', 'layout-3']
      let random = Math.floor(Math.random()*(3-0))
      return classes[random]
    }
  },
  methods: {
    shuffle() {
      this.shuffledProjects = this.$static.projects.edges.sort(() => 0.5 - Math.random());
      this.shuffledSketches = this.$static.sketches.edges.sort(() => 0.5 - Math.random());
    }
  },
  mounted() {
    this.shuffle()
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 0;
  .intro {
    width: 50%;
    font-size: 1.2rem;
    z-index: 1000;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
      display: block;
      max-width: 700px;
      margin: 0 0 0 auto;
    }
    p {
      max-width: 20rem;
    }
  }

  .wrapper {
    width: 50%;
    margin-bottom: 3rem;
    text-align: center;
    &-2, &-4 {
      transform: translate(0, -40%);
      margin-top: 2rem;
    }
    &-1 {
      min-height: 22rem;
    }
    &-4 {
      margin-bottom: -6%;
    }
  }

  .item {
    display: inline-block;
    position: relative;
    animation: enter .24s ease-in forwards;
  }

  .project {
    display: inline-block;
    position: relative;
    margin: 0 auto;
    z-index: 10;
    text-align: left;
    animation: none;
  }

  .sketch {
    position: absolute;
    max-width: 12rem;
    top: 0;
    right: 0;
    z-index: 11;

    max-height: 16rem;
  }

  &.layout-1 {
    .project-1 {
      transform: translate(0, 0);
    }
    .project-2 {
      transform: translate(-20%, -10%);
    }
    .project-3 {
      transform: translate(0, 0);
    }
    .project-4 {
      transform: translate(0, 0);
    }
    .sketch-1 {
      transform: translate(-50%, -20%);
      right: auto;
      left: 0;
    }
    .sketch-2 {
      transform: translate(30%, 80%);
    }
    .sketch-3 {
      transform: translate(50%, 50%);
    }
    .sketch-4 {
      transform: translate(-50%, -20%);
      right: auto;
      left: 0;
    }
  }
  &.layout-2 {
    .project-1 {
      transform: translate(10%, 0);
    }
    .project-2 {
      transform: translate(-20%, 0);
    }
    .project-3 {
      transform: translate(0, 20%);
    }
    .project-4 {
      transform: translate(0, 0);
    }
    .sketch-1 {
      transform: translate(-120%, -16%);
    }
    .sketch-2 {
      transform: translate(20%, -30%);
    }
    .sketch-3 {
      transform: translate(50%, -40%);
    }
    .sketch-4 {
      transform: translate(80%, 70%);
    }
  }
  &.layout-3 {
    .project-1 {
      transform: translate(0, 0);
    }
    .project-2 {
      transform: translate(0, 0);
    }
    .project-3 {
      transform: translate(0, 0);
    }
    .project-4 {
      transform: translate(0, 0);
    }
    .sketch-1 {
      transform: translate(60%, 20%);
    }
    .sketch-2 {
      transform: translate(-130%, -30%);
    }
    .sketch-3 {
      transform: translate(50%, 50%);
    }
    .sketch-4 {
      transform: translate(50%, 70%);
    }
  }
}
@keyframes enter {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
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
    padding: 0 1rem;
    .intro, .wrapper {
      width: 100%;
      padding: 0;
      margin-bottom: 1.6rem;
      transform: none !important;
      text-align: left;
    }
    .intro {
      font-size: 1.2rem;
      margin: 0 -1rem 3rem;
    }
    .wrapper-1 {
      min-height: 0;
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
    .wrapper:nth-child(3) {
      text-align: center;
      .sketch {
        width: 50%;
        left: -30%;
        right: auto;
        top: -20%;
      }
    }
    &.layout-1, &.layout-2, &.layout-3 {
      .project {
        width: 70%;
      }
      .sketch {
        width: 50%;
        right: 20%;
        top: 10%;
        left: auto;
      }
      .project-1 {
        transform: translate(0, 0);
      }
      .project-2 {
        transform: translate(0, 0);
      }
      .project-3 {
        transform: translate(0, 0);
      }
      .project-4 {
        transform: translate(0, 0);
      }
      .sketch-1 {
        transform: translate(50%, 0);
      }
      .sketch-2 {
        transform: translate(50%, 0);
      }
      .sketch-3 {
        transform: translate(50%, 50%);
      }
      .sketch-4 {
        transform: translate(50%, 0);
      }
    }
  }
}
@media (max-width: 600px) {
  .project-grid {
    .intro {
      font-size: 16px;
      p {
        max-width: 17em;
      }
    }
  }
}
</style>
