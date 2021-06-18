<template lang="pug">
header(:class="$style.root")
	h1(:class="$style.title") Harding
	HDarkModeButton(:class="$style.darkMode")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HDarkModeButton from "./HDarkModeButton.vue";

export default defineComponent({
	components: {
		HDarkModeButton,
	}
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
	padding: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
	background-color: var(--primary-1);
}

.title {
	font-size: 2rem;
	font-weight: 700;
	color: var(--secondary-4);
	cursor: default;
	user-select: none;
}

.darkMode {
	justify-self: end;
}
</style>