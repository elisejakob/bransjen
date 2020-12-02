<template>
  <div class="news">
    <h2>Sagt om Bransjen</h2>
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
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
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
}
</static-query>

<style lang="scss" scoped>
.news {
  h2 {
    margin-bottom: 4rem;
  }
  article {
    max-width: 32rem;
    margin: 0 auto 4rem;
    blockquote {
      font-size: 2rem;
      margin: 0 0 1rem;
    }
  }
}
</style>
