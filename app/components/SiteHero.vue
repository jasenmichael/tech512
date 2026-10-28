<script setup lang="ts">
const route = useRoute()

const { data: home } = await useAsyncData('home', () =>
  queryCollection('pages').path('/').first(),
)

const parts = computed(() => {
  const [before, after = ''] = (home.value?.title || '').split(' Built ')
  return { before, after: after.replace(/\.$/, '') }
})
</script>

<template>
  <div v-if="home" class="relative flex flex-col -mt-10 h-72 overflow-hidden md:h-screen">
    <div class="relative h-full text-onBackgroundDark hero-scale font-black">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="/sample5.jpg"
        alt=""
      >
      <div class="absolute inset-0 bg-gradient-to-br from-primary to-transparent" />
      <div class="relative z-30 flex h-full flex-row items-center">
        <div class="relative flex h-full flex-col justify-center px-6 md:ml-6 md:h-screen md:px-0 md:pt-20">
          <div class="hero-bg-text -mb-24 hidden md:block">
            TECH
          </div>
          <component
            :is="route.path === '/' ? 'h1' : 'p'"
            class="relative z-10 text-primary-100 text-[1.15em] leading-tight md:ml-[55px] md:text-[0.75em] md:leading-none"
          >
            {{ parts.before }}
            <span class="italic text-accent-600">Built</span>
            <br class="hidden md:block">
            {{ ' ' + parts.after }}.
            <span class="mt-3 block text-[0.62em] font-normal leading-snug text-accent-600 md:mt-0 md:text-[0.375em] md:font-black md:leading-normal">
              {{ home.description }}
            </span>
          </component>
          <div class="hero-bg-text -mt-20 hidden md:block">
            512
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
