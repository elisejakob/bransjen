<template>
  <Layout>
    <div class="project">
      <img
        v-if="$page.project.mainImage"
        :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(1200).auto('format').url()"
        class="project-image"
      />
      <div class="project-text">
        <div>
          <h1 class="project-title">{{ $page.project.title }}</h1>
          <div class="project-meta">
            {{ $page.project.client }}
          </div>
        </div>
        <div class="project-lead">
          <BlockContent
            :blocks="$page.project._rawExcerpt"
            v-if="$page.project._rawExcerpt"
          />
        </div>
      </div>
      <BlockContent
        class="project-content"
        :blocks="$page.project._rawBody"
        v-if="$page.project._rawBody"
      />
    </div>
    <div class="project-gallery">
      <div v-for="(item, index) in $page.project.gallery" :key="`content-${index}`">
        <div v-if="item._type === 'figure'" class="onecolumn">
          <img
            :src="$urlForImage(item.asset.url, $page.metadata.sanityOptions).width(1200).auto('format').url()"
          />
        </div>
        <div v-if="item._type === 'figureTwoColumn'" class="twocolumn">
          <img
            :src="$urlForImage(item.image1.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
          />
          <img
            :src="$urlForImage(item.image2.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
          />
        </div>
        <div v-if="item._type === 'video'" class="video">
          <video controls>
            <source :src="item.asset.url" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  }
}
</script>

<page-query>
query project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    id
    title
    publishedAt(format: "D. MMMM YYYY")
    categories {
      title
    }
    mainImage {
      asset {
        _id
      }
      alt
    }
    slug {
      current
    }
    client
    _rawExcerpt
    _rawBody
    relatedProjects {
      title
      _id
      slug {
        current
      }
      mainImage {
        asset {
          _id
        }
        alt
      }
    }
    gallery {
      ... on SanityFigure {
        _type
        asset {
          url
        }
      }
      ... on SanityFigureTwoColumn {
        _type
        image1 {
          asset {
            url
          }
        }
        image2 {
          asset {
            url
          }
        }
      }
      ... on SanityVideo {
        _type
        asset {
          url
        }
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.project {
  margin: 0 auto;
  max-width: 1000px;

  &-image {
    width: 100%;
    margin-bottom: 2rem;
  }

  &-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  &:empty {
    display: none;
  }
  &-title {
    font-size: 2rem;
    font-weight: 900;
  }
  &-meta {
    opacity: .6;
  }
  &-lead {
    font-size: 1.2rem;
    font-family: var(--sans-serif);
  }
  &-content {
    margin-top: 2rem;
  }

  p {
    max-width: none;
  }

  &-gallery {
    max-width: 1000px;
    margin: 2rem auto;
    .onecolumn, .twocolumn, .video {
      margin-bottom: 2rem;
    }
    .video {
      video {
        width: 100%;
      }
    }
    .twocolumn {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }

}
</style>
