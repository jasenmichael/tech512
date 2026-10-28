<script setup lang="ts">
const { data: home } = await useAsyncData('home', () =>
  queryCollection('pages').path('/').first(),
)

if (!home.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: home.value.seoTitle || home.value.title,
  description: home.value.description,
})
</script>

<template>
  <div v-if="home">
    <SiteHero />
    <ContentRenderer :value="home" />
  </div>
</template>
