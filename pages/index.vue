<template>
  <div class="bg-backgroundLight">
    <Hero />
    <Intro id="intro" />
    <Services id="services" />
    <CtaHomeOne />
    <!-- portfolio -->
    <!-- team -->
    <CtaHomeTwo id="contact" />

    <div class="relative h-96">
      <img
        src="bott-background.png"
        class="
          absolute
          bottom-0
          right-0
          h-56
          md:h-64
          lg:h-80
          xl:h-96
          object-cover
        "
        alt=""
      />
    </div>
    <!-- dev sections -->
    <DevColors />
  </div>
</template>

<script>
export default {}
</script>
