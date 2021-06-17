<template lang="pug">
header(:class="$style.root")
	h1(:class="$style.title") Harding
	button(:class="$style.contactSheet", @click="$emit('contactSheet')")
		div
		div
		div
		div
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	emits: ["contactSheet"],
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-template-areas: "title contactSheet";
	align-items: center;

	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: var(--light-3);
	padding: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
}

.title {
	grid-area: title;
	font-size: 2rem;
	font-weight: 700;
}

.contactSheet {
	grid-area: contactSheet;
	justify-self: end;
	width: 2.5rem;
	height: 2.5rem;
	padding: 0.5rem;
	border-radius: 0.125rem;
	cursor: pointer;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2px;
	
	& > div {
		border-style: solid;
	}
	
	&:hover, &:focus-visible {
		background-color: var(--light-2);
	}
	
	&:active {
		background-color: var(--light-3);
	}
}
</style>