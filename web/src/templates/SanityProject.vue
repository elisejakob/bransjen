<template>
  <Layout>
    <div class="project">
      <div class="project-text">
        <h1 class="project-title">{{ $page.project.title }}</h1>
        <BlockContent
          class="project-content"
          :blocks="$page.project._rawExcerpt"
          v-if="$page.project._rawExcerpt"
        />
      </div>
      <img
        v-if="$page.project.mainImage"
        :src="$urlForImage($page.project.mainImage, $page.metadata.sanityOptions).width(600).auto('format').url()"
        class="project-image"
      />
    </div>
    <div v-for="(item, index) in $page.project.gallery" :key="`content-${index}`">
      {{item}}
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
  margin: 0;
  grid-column: 1 / span 10;
  display: grid;
  grid-gap: var(--space);
  grid-template-columns: repeat(10, 1fr);

  &-image {
    grid-column: 6 / span 5;
  }

  &-text {
    grid-column: 1 / span 5;
  }

  &:empty {
    display: none;
  }
  &-title {
    font-size: 4rem;
    font-weight: 900;
  }

  &-content {
    p {
      font-size: 1.2rem;
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

  blockquote {
    margin: 3rem 0 6rem;
    font-size: 1.8rem;
    line-height: 1.4;
    padding-left: 2rem;
    border-left: 6px solid crimson;
  }
}

.definition {
  max-width: 40rem;
  font-size: 1.2rem;
}
</style>
