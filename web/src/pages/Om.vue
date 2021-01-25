<template>
  <Layout>
    <div class="about-main">
      <div class="about-text">
        <p class="about-lead">
          {{ $page.about.excerpt }}
        </p>
        <BlockContent
          class="about-content"
          :blocks="$page.about._rawBody"
          v-if="$page.about._rawBody"
        />
      </div>
      <figure class="about-image">
        <img
          v-if="$page.about.mainImage"
          :src="$urlForImage($page.about.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </figure>
    </div>
    <News />
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  about: sanityAbout(id: "about") {
    title
    excerpt
    _rawBody
    mainImage {
      asset {
        _id
        url
      }
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</page-query>

<script>
import BlockContent from '~/components/BlockContent'
import News from '~/components/News'

export default {
  components: {
    BlockContent,
    News
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-bottom: 1rem;
  }
  &-lead {
    margin: 0 0 2rem;
    font-size: 1.4rem;
    margin-right: 36%;
  }
}
@media (max-width: 900px) {
  .about {
    &-lead {
      margin-right: 0;
    }
    &-main {
      grid-template-columns: 1fr;
    }
  }
}
</style>
