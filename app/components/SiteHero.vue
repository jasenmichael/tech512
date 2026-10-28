<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()

const parts = computed(() => {
  const [before, after] = props.title.split(' Built ')
  if (!after)
    return { before: props.title, after: '' }
  return { before, after: after.replace(/\.$/, '') }
})
</script>

<template>
  <div class="relative flex flex-col -mt-10 h-[28rem] overflow-hidden md:h-screen">
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
          <h1
            class="relative z-10 text-primary-100 text-[1.15em] leading-tight md:ml-[55px] md:leading-none"
            :class="parts.after ? 'md:text-[0.75em]' : 'md:text-[0.45em]'"
          >
            {{ parts.before }}
            <template v-if="parts.after">
              <span class="italic text-accent-600">Built</span>
              <br class="hidden md:block">
              {{ ' ' + parts.after }}.
            </template>
            <span class="mt-3 block text-[0.62em] font-normal leading-snug text-accent-600 md:mt-0 md:text-[0.375em] md:font-black md:leading-normal">
              {{ description }}
            </span>
          </h1>
          <div class="hero-bg-text -mt-20 hidden md:block">
            512
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
