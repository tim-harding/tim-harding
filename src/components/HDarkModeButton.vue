<template lang="pug">
button(:class="$style.root")
	HSunIcon(:class="$style.sun")
	HMoonIcon(:class="$style.moon")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HSunIcon from "./HSunIcon.vue";
import HMoonIcon from "./HMoonIcon.vue";
import { ref } from "vue";


export default defineComponent({
	components: {
		HSunIcon,
		HMoonIcon,
	},

	setup() {
		const isDarkMode = ref(false)
		
		return {
			isDarkMode,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: repeat(2, 100%);
	grid-template-rows: 1fr;
	width: 2.5rem;
	height: 2.5rem;
	background-color: var(--light-3);
	border-radius: 0.25rem;
}

.sun, .moon {
	margin: 0.25rem;
}
</style>