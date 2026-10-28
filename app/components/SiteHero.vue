<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()

const parts = computed(() => {
  const [before, after] = props.title.split(' Built ')
  return {
    before: before || props.title,
    after: after?.replace(/\.$/, '') || '',
  }
})
</script>

<template>
  <div class="h-screen flex flex-col -mt-10">
    <div class="relative text-onBackgroundDark hero-scale font-black">
      <div class="block absolute w-full">
        <div class="relative">
          <img
            class="absolute w-screen h-screen object-cover"
            src="/sample5.jpg"
            alt=""
          >
        </div>
        <div class="h-screen absolute inset-0 bg-gradient-to-br from-primary to-transparent" />
        <div class="flex flex-row items-center transition-all z-30">
          <div class="relative flex flex-col justify-center h-screen pt-20 ml-6">
            <div class="hero-bg-text -mb-24">
              TECH
            </div>
            <h1 class="relative z-10 text-primary-100 text-[0.75em] leading-none ml-[55px]">
              {{ parts.before }}
              <span class="italic text-accent-600">Built</span>
              <br>
              {{ parts.after }}.
              <span class="block text-[0.375em] leading-normal text-accent-600">
                {{ description }}
              </span>
            </h1>
            <div class="hero-bg-text -mt-20">
              512
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
