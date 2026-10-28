<script setup lang="ts">
const route = useRoute()
const site = useSiteConfig()

useHead(() => ({
  titleTemplate: (title?: string) => title ? `${title} - TECH 512` : 'TECH 512',
  link: [{ rel: 'canonical', href: new URL(route.path, site.url).href }],
}))
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
