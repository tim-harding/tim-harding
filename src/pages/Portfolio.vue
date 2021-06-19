<template lang="pug">
transition(
  :enter-from-class="$style.fadeEnterFrom",
  :leave-to-class="$style.fadeLeaveTo",
)
  HPortfolioMobile(v-if="isMobile", :class="$style.root")
  HPortfolioDesktop(v-else, :class="$style.root")
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import HPortfolioMobile from "../components/HPortfolioMobile.vue";
import HPortfolioDesktop from "../components/HPortfolioDesktop.vue";

export default defineComponent({
  components: {
    HPortfolioMobile,
    HPortfolioDesktop,
  },
  
  setup() {
    const query = window.matchMedia("(max-aspect-ratio: 3/4)")
    const isMobile = ref(query.matches)
    query.onchange = function(event) {
      isMobile.value = this.matches
    }
    
    return {
      isMobile,
    }
  }
})
</script>

<style lang="scss" module>
.root {
  --carousel-bg: var(--primary-2);
  background-color: var(--carousel-bg);
}

.fadeEnterFrom,
.fadeLeaveTo {
  opacity: 0;
}
</style>