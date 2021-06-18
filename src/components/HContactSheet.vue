<template lang="pug">
div(:class="$style.root")
	ul(:class="$style.list")
		li(v-for="image in images", :key="image.name")
			router-link(:class="$style.link", :to="image.to")
				HImage(:name="image.name")
</template>

<script lang="ts">import { defineComponent } from "@vue/runtime-core";
import { images as imagesRaw } from "../shared/images";
import HImage from "./HImage.vue";

export default defineComponent({
	components: {
		HImage,
	},

	setup() {
		const images = imagesRaw.map(raw => ({
			name: raw.name,
			to: {
				name: "carousel",
				params: {
					image: raw.name,
				},
			},
		}))

		return {
			images,
		};
	},
})
</script>

<style lang="scss" module>
.root {
	background-color: var(--primary-2);
}

:global(.dark) .root {
	background-color: var(--primary-1);
}

.list {
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-template-rows: repeat(auto-fit, auto);
	gap: 1rem;
	height: min-content;
	margin: 1rem;
}

.link {
	cursor: pointer;
	border-radius: 0.125rem;
	overflow: hidden;
	transition: all 0.125s;

	&:hover,
	&:focus-visible {
		box-shadow: 0 0 0 4px var(--primary-2), 0 0 0 8px var(--secondary-4);
	}

	&:active {
		box-shadow: 0 0 0 2px var(--primary-2), 0 0 0 8px var(--secondary-1);
	}
}
</style>