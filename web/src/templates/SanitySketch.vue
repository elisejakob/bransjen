<template>
  <DivLayout>
    <div class="modal">
      <div class="sketch-image-wrapper">
        <img
          v-if="$page.sketch.mainImage"
          :src="$urlForImage($page.sketch.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
          class="sketch-image"
        />
      </div>
      <div class="sketch-text">{{ $page.sketch.title }}</div>
    </div>
    <div>
      <div class="nav left">
        <img src="/graphics/arrow-left.svg" alt="Pil til venstre" />
      </div>

      <div class="nav right">
        <img src="/graphics/arrow-right.svg" alt="Pil til høyre" />
      </div>
    </div>
    <g-link to="/div" class="close">
      <img class="icon" src="/graphics/close.svg" alt="Sirkel med kryss i" />
    </g-link>
  </DivLayout>
</template>

<script>
import DivLayout from '~/layouts/Div'

export default {
  components: {
    DivLayout
  }
}
</script>

<page-query>
query sketch ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  sketch: sanitySketch (id: $id) {
    id
    title
    mainImage {
      asset {
        _id
      }
      alt
    }
    slug {
      current
    }
  }
}
</page-query>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(60deg, rgba(255, 187, 0, 0.8), rgba(255, 0, 157, 0.8));
  opacity: 0;
  animation: fadeIn .2s forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.sketch-image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sketch-image {
  width: 50%;
  height: auto;
  margin: 0 auto;
  background: #fff;
}

.nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    left: 1.5rem;
    width: 40px;
    height: 40px;
  }
  &.right {
    right: 1.5rem;
    width: 40px;
    height: 40px;
  }
}

.close {
  box-sizing: content-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 1.5rem;

  .icon {
    width: 40px;
    height: 40px;
  }
}

</style>
