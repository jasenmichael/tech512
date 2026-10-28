<script setup lang="ts">
const route = useRoute()
const path = `/articles/${route.params.slug}`

const { data: article } = await useAsyncData(`article-${path}`, () =>
  queryCollection('articles').path(path).first(),
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
})
</script>

<template>
  <div v-if="article">
    <SiteHero />
    <article class="copy px-8 py-16">
      <p>
        <NuxtLink to="/articles">
          Articles
        </NuxtLink>
      </p>
      <ContentRenderer :value="article" />
    </article>
  </div>
</template>
