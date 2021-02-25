<template>
  <div class="project">
    <g-image
      v-if="project.mainImage"
      class="project-image"
      :src="$urlForImage(project.mainImage, $page.metadata.sanityOptions).height(600).width(800).auto('format').url()"
      :alt="project.mainImage.alt"
    />
    <div class="project-text">
      <h2 class="project-title" v-html="project.title" />
      <div class="project-categories">
        <span v-for="(category, index) in project.categories" :key="`${project.id}-category-${index}`">{{ category.title }}</span>
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
    opacity: .6;
    span {
      font-size: .8rem;
      text-transform: lowercase;
      &:after {
        content: ", ";
      }
      &:last-of-type {
        &:after {
          content: "";
        }
      }
      &:first-of-type {
        text-transform: none;
      }
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

  transform: translateY(10px);
  animation: fade .3s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fade {
  to {
    transform: translateY(0);
  }
}
</style>
