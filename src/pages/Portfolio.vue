<template lang="pug">
div(:class="$style.root")
  HNavCursors(:class="$style.cursors")
  HImage(:class="$style.carousel")
  HHeader(:class="$style.header")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HHeader from ".././components/HHeader.vue"
import HImage from "../components/HImage.vue";
import HNavCursors from "../components/HNavCursors.vue";

export default defineComponent({
  components: {
    HHeader,
    HImage,
    HNavCursors,
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

.cursors {
  grid-area: carousel;
}

.carousel {
  grid-area: carousel;
}

.header {
  grid-area: header;
}
</style>
