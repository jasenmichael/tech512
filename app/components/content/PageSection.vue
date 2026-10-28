<script setup lang="ts">
defineProps<{
  id?: string
  tone?: string
}>()
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-24 px-8 py-16"
    :class="tone === 'light' ? 'bg-accentLight text-onAccent' : ''"
  >
    <div class="copy">
      <slot />
    </div>
  </section>
</template>
