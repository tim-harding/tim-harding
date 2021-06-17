<template lang="pug">
div(:class="$style.root")
  HContactSheet(:class="$style.contactSheet", v-if="isContactSheet")
  router-view(:class="$style.carousel", v-slot="{ Component, route }", v-else)
    transition(
      name="fade",
      :enter-active-class="$style.fadeEnterActive",
      :leave-active-class="$style.fadeLeaveActive",
      :enter-from-class="$style.fadeEnterFrom",
      :leave-from-class="$style.fadeLeaveFrom",
    )
      component(:is="Component", :key="route.path")
  HHeader(:class="$style.header")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HHeader from ".././components/HHeader.vue"
import HContactSheet from "../components/HContactSheet.vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    HHeader,
    HContactSheet,
  },
  
  setup() {
    const isContactSheet = ref(false)
    
    return {
      isContactSheet,
    }
  }
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

.contactSheet {
  grid-area: carousel;
}

.header {
  grid-area: header;
}

.fadeEnterActive,
.fadeLeaveActive {
  transition: opacity 0.25s ease;
}

.fadeEnterFrom,
.fadeLeaveTo {
  opacity: 0;
}
</style>