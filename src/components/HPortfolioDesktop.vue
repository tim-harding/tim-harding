<template lang="pug">
div(:class="$style.root")
	HHeader(:class="$style.header")
	main(:class="$style.carousel")
		router-view(v-slot="{ Component, route }")
			transition(
				:enter-from-class="$style.fadeEnterFrom",
				:leave-to-class="$style.fadeLeaveTo",
			)
				component(:is="Component", :key="route.path")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HHeader from ".././components/HHeader.vue"

export default defineComponent({
  components: {
    HHeader,
  },
})
</script>

<style lang="scss" module>
.root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "carousel"
    "header";
}

.carousel {
  grid-area: carousel;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "center";
  
  & > * {
    grid-area: center;
  }
}

.header {
  grid-area: header;
  --header-bg: var(--primary-1);
}

:global(.dark) {
  .carousel {
    --carousel-bg: var(--primary-1);
  }
  
  .header {
    --header-bg: var(--primary-2);
  }
}

.fadeEnterFrom,
.fadeLeaveTo {
  opacity: 0;
}
</style>