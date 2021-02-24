<template>
  <Layout>
    <div class="about-main">
      <div class="about-text">
        <p class="about-lead">
          {{ $page.about.excerpt }}
        </p>
        <BlockContent
          class="about-content text-content"
          :blocks="$page.about._rawBody"
          v-if="$page.about._rawBody"
        />
        <!--<h2 class="about-clients-heading">Bransjens slavehandlere</h2>
        <BlockContent
          class="about-clients text-content"
          :blocks="$page.about._rawClients"
          v-if="$page.about._rawClients"
        />-->
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
    _rawClients
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
  },
  metaInfo() {
    return {
      title: 'Om',
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.about.excerpt
        },
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.about.mainImage.asset.url
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin-bottom: 1rem;
  }
  &-lead {
    margin: 0 0 3rem;
    font-size: 1.2rem;
    max-width: 20rem;
  }
  &-content {
    margin-bottom: 1rem;
    font-size: .9rem;
  }
  &-clients {
    font-family: var(--sans-serif);
    font-size: .8rem;
    &-heading {
      font-size: 1rem;
      text-decoration: underline;
    }
  }
}
@media (max-width: 900px) {
  .about {
    p {
      max-width: 600px;
    }
    &-lead {
      max-width: 600px;
    }
    &-main {
      grid-template-columns: 1fr;
    }
  }
}
@media (max-width: 700px) {
  .about {
    p {
      max-width: 600px;
    }
    &-lead {
      margin: 0 0 1rem;
      font-size: 1.2rem;
      max-width: 600px;
    }
    &-main {
      grid-template-columns: 1fr;
    }
  }
}
</style>
