<template lang="pug">
header(:class="$style.root")
	router-link(:class="$style.title", to="/") Harding
	HDarkModeButton(:class="$style.darkMode")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HDarkModeButton from "./HDarkModeButton.vue";

export default defineComponent({
	components: {
		HDarkModeButton,
	},
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-template-areas: "title darkMode";
	align-items: center;

	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: var(--primary-4);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: var(--primary-4);
	padding: 1rem;
	padding-left: 1.5rem;
	padding-right: 2rem;
	background-color: var(--primary-1);
}

:global(.dark) .root {
	background-color: var(--primary-2);
}

.title {
	font-size: 2rem;
	font-weight: 700;
	color: var(--secondary-4);
	cursor: pointer;
	user-select: none;
	width: min-content;
	padding: 0.25rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: 0.25rem;
	
	&:hover, &:focus-visible {
		color: var(--secondary-3);
		background-color: var(--primary-3);
	}
	
	&:active {
		color: var(--secondary-1);
		background-color: var(--primary-4);
	}
}

.darkMode {
	justify-self: end;
}
</style>