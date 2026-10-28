<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles').order('date', 'DESC').all(),
)

useSeoMeta({
  title: 'Articles',
  description: 'Notes from TECH 512 on websites, marketing, and custom software.',
})
</script>

<template>
  <article class="copy px-8 py-16">
    <h1>Articles</h1>
    <ul v-if="articles?.length">
      <li v-for="article in articles" :key="article.path">
        <NuxtLink :to="article.path">
          {{ article.title }}
        </NuxtLink>
        <p>{{ article.description }}</p>
      </li>
    </ul>
  </article>
</template>
