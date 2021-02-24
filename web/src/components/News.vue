<template>
  <div class="news" :style="{ color: $static.settings.footer.color.hex}">
    <!--<h2>Sagt om Bransjen</h2>-->
    <article v-for="(news, index) in $static.news.edges" :key="index">
      <blockquote>{{ news.node.quote }}</blockquote>
      <a :href="news.node.source.url">{{ news.node.source.text }}</a>
    </article>
  </div>
</template>

<static-query>
{
  news: allSanityNews(
    limit: 12
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}},
    sortBy: "publishedAt", order: DESC
  ) {
    edges {
      node {
        id
        title
        quote
        source {
          text
          url
        }
      }
    }
  }
  settings: sanitySiteSettings(id: "siteSettings") {
    footer {
      color {
        hex
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.news {
  width: 100%;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 7rem;
  font-family: var(--sans-serif);
  font-weight: 700;
  line-height: 1.2;
  h2 {
    grid-column: span 2;
    text-decoration: underline;
    margin-bottom: 2rem;
  }
  article {
    margin: 0 auto 3rem;
    blockquote {
      font-size: 1.8rem;
      margin: 0 0 1rem;
    }
    a {
      font-weight: 400;
    }
  }
}
@media (max-width: 900px) {
  .news {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0;
    h2 {
      grid-column: span 1;
    }
  }
}
@media (max-width: 700px) {
  .news {
    grid-template-columns: 1fr;
    h2 {
      grid-column: span 1;
      font-size: 1.2rem;
    }
    article {
      blockquote {
        font-size: 1.4rem;
        margin: 0 0 .5rem;
      }
    }
  }
}
</style>
