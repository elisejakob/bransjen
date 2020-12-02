<template>
  <div class="projects">
    <div class="category-nav">
      <span v-for="category in $static.categories.edges" :key="category.node.title">
        {{ category.node.title }}
      </span>
    </div>
    <div class="project-grid">
      <PostItem
        v-for="project in visibleProjects"
        :key="project.node.id"
        :project="project.node"
        :metadata="$static.metadata"
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

export default {
  props: {
    limit: {
      type: Number,
      default: 100
    },
    showMenu: Boolean
  },
  components: {
    PostItem
  },
  computed: {
    visibleProjects() {
      return this.$static.projects.edges
    }
  }
}
</script>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-gap: var(--spacing-m);
  grid-template-columns: repeat(12, 1fr);
}

.category-nav {
  margin: -1rem 0 var(--spacing-m);

  span {
    display: inline-block;
    margin-right: 2rem;
    font-family: var(--sans-serif);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
