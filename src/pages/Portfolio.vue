<template lang="pug">
HPortfolioMobile(v-if="isMobile")
HPortfolioDesktop(v-else)
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
    const query = window.matchMedia("(max-width: 600px)")
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