<template>
  <div class="project">
    <g-image
      v-if="project.mainImage"
      class="project-image"
      :src="$urlForImage(project.mainImage, $page.metadata.sanityOptions).height(560).width(400).auto('format').url()"
    />
    <div class="project-content">
      <h2 class="project-title" v-html="project.title" />
      <div class="project-categories">
        <span v-for="(category, index) in project.categories" :key="`${project.id}-category-${index}`">
          {{ category.title }}
        </span>
      </div>
      <g-link class="project-link" :to="project.slug.current">Link</g-link>
    </div>
  </div>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  grid-column: span 4;

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

  transition: transform .2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
