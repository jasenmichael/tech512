<script setup lang="ts">
import { towns } from '~/utils/towns'
</script>

<template>
  <section aria-label="Towns">
    <h2 class="text-lg font-bold mb-2">
      Towns
    </h2>
    <p>{{ towns.join(', ') }}</p>
  </section>
</template>
