<template>
  <div class="sketch">
    <g-image
      v-if="sketch.mainImage"
      class="sketch-image"
      :src="$urlForImage(sketch.mainImage, $page.metadata.sanityOptions).width(800).auto('format').url()"
      :alt="sketch.mainImage.alt"
    />
    <div class="sketch-content">
      <g-link class="sketch-link" :to="`/div/${sketch.slug.current}`">Link</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sketch: Object
  }
}
</script>

<style lang="scss" scoped>
.sketch {
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
