<template lang="pug">
button(:class="$style.root", @click="isDarkMode = !isDarkMode")
	div(:class="[$style.container, { [$style.dark]: isDarkMode }]")
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
$size: 2.5rem;

.root {
	background-color: var(--light-1);
	border-radius: 0.25rem;
	width: $size;
	height: $size;
	overflow: hidden;
	cursor: pointer;

	&:hover,
	&:focus-visible {
		background-color: var(--light-2);
	}

	&:active {
		background-color: var(--light-3);
	}
}

.container {
	grid-template-columns: repeat(2, $size);
	grid-template-rows: $size;
	justify-items: center;
	align-items: center;
	transition: transform 0.25s;
}

.sun,
.moon {
	width: 1.5rem;
	height: 1.5rem;
}

.dark {
	transform: translateX(-$size);
}
</style>