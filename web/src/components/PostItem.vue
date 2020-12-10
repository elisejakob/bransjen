<template>
  <div class="project">
    <g-image
      v-if="project.mainImage"
      class="project-image"
      :src="$urlForImage(project.mainImage, $page.metadata.sanityOptions).height(300).width(400).auto('format').url()"
    />
    <div class="project-text">
      <h2 class="project-title" v-html="project.title" />
      <div class="project-categories">
        <span v-for="(category, index) in project.categories" :key="`${project.id}-category-${index}`">
          {{ category.title }}
        </span>
      </div>
      <g-link class="project-link" :to="`/prosjekter/${project.slug.current}`">Link</g-link>
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

  &-text {
    margin: 1rem 0;
  }

  &-title {
    margin: 0;
    font-size: 1rem;
  }

  &-categories {
    span {
      font-size: .8rem;
    }
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

  img {
    transition: transform .2s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.02) translateY(-3px);
      box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
    }
  }
}
@media (max-width: 1000px) {
  .project {
    grid-column: span 6;
  }
}
@media (max-width: 600px) {
  .project {
    grid-column: span 12;
  }
}
</style>
