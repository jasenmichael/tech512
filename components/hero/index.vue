<template>
  <!-- hero container -->
  <div class="h-screen flex flex-col -mt-10">
    <!-- hero wrapper -->
    <div class="relative text-onBackgroundDark text-9xl font-black">
      <div class="block absolute w-full">
        <!-- hero image -->
        <div class="relative">
          <img
            class="absolute w-screen h-screen object-cover"
            src="sample5.jpg"
            alt=""
          />
        </div>
        <!-- hero image overlay -->
        <div
          class="
            h-screen
            absolute
            top-0
            right-0
            bottom-0
            left-0
            bg-gradient-to-br
            from-primary
            to-transparent
          "
        />
        <!-- hero content -->
        <div class="flex flex-row items-center transition-all z-50">
          <div
            class="relative flex flex-col justify-center h-screen pt-20 ml-6"
          >
            <!-- tech -->
            <div class="hero-bg-text -mb-24">TECH</div>
            <!-- hero heading -->
            <div
              class="
                opacity-95
                shadow-inner
                drop-shadow
                text-primary-100 text-9xl
                z-10
                leading-none
                ml-[55px]
                text-8xl
              "
            >
              Lightning
              <span class="italic text-accent-600">FAST</span>
              <br />
              search optmized
              <br />
              web sites.
              <!-- hero sub-heading -->
              <div class="text-4xl text-accent-600">
                We engage and drive traffic to meet your true potential.
              </div>
            </div>
            <!-- 512 -->
            <div class="hero-bg-text -mt-20">512</div>
          </div>
        </div>
        <!-- hero bottom nav -->
        <div
          class="
            overflow-x-hidden
            absolute
            bg-transparent
            w-full
            h-22
            opacity-80
            items-center
            top-0
            mb-10
            text-4xl
            transition-all
            ease-in-out
            duration-700
            z-50
          "
          :class="scrollY ? 'opacity-0' : 'opacity-100'"
        >
          <hr
            class="
              mt-2
              border-accent-600
              transform
              transition-all
              duration-1000
            "
            :class="loaded && !scrollY ? '-translate-x-0' : '-translate-x-full'"
          />
          <div
            class="
              flex
              w-full
              items-center
              justify-around
              transition-all
              duration-1000
              ease-linear
            "
            :class="loaded && !scrollY ? 'opacity-100' : 'opacity-0'"
          >
            <!-- <div class="bg-red-600 h-2"></div> -->

            <button class="hero-nav">
              <a v-scroll-to="'#intro'" href="#"> about </a>
            </button>
            <button class="hero-nav">
              <a v-scroll-to="'#services'" href="#"> services </a>
            </button>
            <button class="hero-nav">
              <a v-scroll-to="'#contact'" href="#"> contact </a>
            </button>
          </div>
          <hr
            class="border-accent-600 transform transition-all duration-1000"
            :class="loaded && !scrollY ? 'translate-x-0' : 'translate-x-[200%]'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      scrollY: 0,
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 100)
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

<style>
.hero-bg-text {
  /* font-size: 180%; */
  @apply text-transparent text-huge font-bold shadow-inner drop-shadow shadow opacity-80 bg-clip-text bg-gradient-to-br from-secondary via-secondaryDark to-primaryDark;
}
.hero-nav {
  @apply border-accent-800 border-l border-r text-accent-400 p-6 mt-px transition-all duration-1000 ease-linear;
}
</style>
