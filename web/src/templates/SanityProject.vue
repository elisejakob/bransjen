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
            <div class="project-categories">
              <span v-for="(category, index) in $page.project.categories" :key="`category-${index}`">{{ category.title }}</span>
            </div>
            <!--{{ $page.project.client }}-->
          </div>
        </div>
        <BlockContent
          class="project-content"
          :blocks="$page.project._rawBody"
          v-if="$page.project._rawBody"
        />
      </div>
    </div>
    <div class="project-gallery">
      <div v-for="(item, index) in $page.project.gallery" :key="`content-${index}`">
        <div v-if="item._type === 'figure'" class="onecolumn">
          <img
            :src="$urlForImage(item.asset.url, $page.metadata.sanityOptions).width(1200).auto('format').url()"
          />
          <p class="caption">{{ item.caption }}</p>
        </div>
        <div v-if="item._type === 'figureTwoColumn'" class="twocolumn">
          <figure>
            <img
              :src="$urlForImage(item.image1.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
            />
            <figcaption v-if="item.image1.caption">
              <p class="caption">{{ item.image1.caption }}</p>
            </figcaption>
          </figure>
          <figure>
            <img
              :src="$urlForImage(item.image2.asset.url, $page.metadata.sanityOptions).width(600).auto('format').url()"
            />
            <figcaption v-if="item.image2.caption">
              <p class="caption">{{ item.image2.caption }}</p>
            </figcaption>
          </figure>
        </div>
        <div v-if="item._type === 'video'" class="video">
          <video controls>
            <source :src="item.asset.url" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="related">
      <div class="related-heading">
        <h2>Relaterte prosjekter</h2>
        <div>&rarr; <g-link to="/prosjekter">Se alle Bransjens prosjekter</g-link></div>
      </div>
      <div class="related-grid">
        <PostItem
          v-for="(project, index) in $page.project.relatedProjects"
          :key="`related-${index}`"
          :project="project"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import PostItem from '~/components/PostItem'

export default {
  components: {
    BlockContent,
    PostItem
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          key: 'description',
          content: this.$page.settings.description
        },
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.project.mainImage.asset.url
        }
      ]
    }
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
        url
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
      categories {
        _id
        title
      }
    }
    gallery {
      ... on SanityFigure {
        _type
        asset {
          url
        }
        caption
      }
      ... on SanityFigureTwoColumn {
        _type
        image1 {
          asset {
            url
          }
          caption
        }
        image2 {
          asset {
            url
          }
          caption
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
  settings: sanitySiteSettings(id: "siteSettings") {
    description
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
    display: block;
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
  &-content {
    margin-top: 2rem;
    max-width: 38em;
  }
  &-categories {
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
    .caption {
      width: 50%;
      font-size: .9rem;
    }
    figcaption .caption {
      width: 100%;
      font-size: .9rem;
    }
  }

}
.related {
  margin: 6rem auto;
  max-width: 1000px;
}
.related-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  h2 {
    margin: 0;
  }
}
.related-grid {
  display: grid;
  grid-gap: var(--spacing-m);
  grid-template-columns: repeat(8, 1fr);
  .project {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .related-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (max-width: 700px) {
  .project {
    &-gallery {
      .twocolumn {
        grid-template-columns: 1fr;
      }
    }
  }
  .related-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .related-heading {
    display: block;
    h2 {
      margin-bottom: 1rem;
    }
  }
}
</style>
