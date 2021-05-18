<template>
  <!-- page wrapper -->
  <div>
    <div class="flex flex-col min-h-screen bg-background-900 text-onBackground">
      <!-- navbar -->
      <Navbar class="sticky top-0 z-50" />

      <!-- page content -->
      <Nuxt class="flex-grow z-40" />

      <!-- footer -->
      <div class="h-40 bg-primary text-onPrimary -mb-12 transition-all">
        footer
      </div>
    </div>

    <!-- scroll to top -->
    <a
      v-scroll-to="'body'"
      href="#"
      class="
        bg-primary
        transform
        transition-all
        duration-500
        ease-linear
        text-white
        rounded-full
        ring-2 ring-secondaryLight ring-inset
        justify-center
        font-mono
        sticky
        h-12
        w-12
        text-5xl
        overflow-hidden
        flex
        items-center
        pt-4
        leading-none
        bottom-8
        md:bottom-16
        ml-auto
        mr-8
        md:mr-16
        z-50
      "
      :class="
        scrollY ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      "
    >
      ^
    </a>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      scrollY: 0,
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      // console.log(event)
      if (process.client) {
        this.scrollY = window.pageYOffset
      }
    },
  },
}
</script>
