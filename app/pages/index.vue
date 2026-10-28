<script setup lang="ts">
const { data: home } = await useAsyncData('home', () =>
  queryCollection('pages').path('/').first(),
)

if (!home.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: home.value.title,
  description: home.value.description,
})
</script>

<template>
  <div v-if="home">
    <SiteHero
      :title="home.title || ''"
      :description="home.description || ''"
    />
    <ContentRenderer :value="home" />
  </div>
</template>
