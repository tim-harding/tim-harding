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
	background-color: var(--light-1);
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
	border-style: solid;
	border-color: var(--light-3);
	border-width: 1px;
	overflow: hidden;

	&:hover,
	&:focus-visible {
		box-shadow: 0 0 0 4px var(--light-1), 0 0 0 8px var(--frost-1);
	}

	&:active {
		box-shadow: 0 0 0 2px var(--light-1), 0 0 0 8px var(--frost-3);
	}
}
</style>