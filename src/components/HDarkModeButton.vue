<template lang="pug">
button(:class="$style.root", @click="toggleIsDark()")
	div(:class="[$style.container, { [$style.dark]: isDark }]")
		HSunIcon(:class="$style.sun")
		HMoonIcon(:class="$style.moon")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HSunIcon from "./HSunIcon.vue";
import HMoonIcon from "./HMoonIcon.vue";
import { settings } from "../shared/settings";


export default defineComponent({
	components: {
		HSunIcon,
		HMoonIcon,
	},

	setup() {
		const toggleIsDark = () => {
			settings.toggleIsDark()
		}

		return {
			isDark: settings.isDark,
			toggleIsDark,
		}
	}
})
</script>

<style lang="scss" module>
$size: 2.5rem;

.root {
	background-color: var(--primary-2);
	border-radius: 0.25rem;
	width: $size;
	height: $size;
	overflow: hidden;
	cursor: pointer;

	&:hover,
	&:focus-visible {
		background-color: var(--primary-3);
	}

	&:active {
		background-color: var(--primary-4);
	}
}

.container {
	grid-template-columns: repeat(2, $size);
	grid-template-rows: $size;
	justify-items: center;
	align-items: center;
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