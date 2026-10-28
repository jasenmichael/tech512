<script setup lang="ts">
import ServiceArea from '~/components/content/ServiceArea.vue'
</script>

<template>
  <footer class="bg-primary text-onPrimary">
    <div class="relative h-40 overflow-hidden">
      <img
        src="/bott-background.png"
        class="absolute bottom-0 right-0 h-40 object-cover"
        alt=""
      >
    </div>
    <div class="px-8 py-10 flex flex-col gap-6">
      <nav class="flex flex-wrap gap-6" aria-label="Footer">
        <NuxtLink to="/#intro">
          About
        </NuxtLink>
        <NuxtLink to="/websites">
          Websites
        </NuxtLink>
        <NuxtLink to="/custom-software">
          Custom software
        </NuxtLink>
        <NuxtLink to="/articles">
          Articles
        </NuxtLink>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </nav>
      <!-- <a href="tel:+15129067113">(512) 906-7113</a> -->
      <ServiceArea />
      <p class="text-sm opacity-80">
        Based in Elgin, Texas. Working with customers anywhere.
      </p>
    </div>
  </footer>
</template>
