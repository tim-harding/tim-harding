<template lang="pug">
div(:class="$style.root")
  HCarousel(:class="$style.carousel")
  HHeader(:class="$style.header")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HCarousel from "./components/HCarousel.vue"
import HHeader from "./components/HHeader.vue"

export default defineComponent({
  components: {
    HCarousel,
    HHeader,
  },
})
</script>

<style lang="scss" module>
.root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  grid-template-columns: 100vw;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    "carousel"
    "header";
}

.carousel {
  grid-area: carousel;
}

.header {
  grid-area: header;
}
</style>
