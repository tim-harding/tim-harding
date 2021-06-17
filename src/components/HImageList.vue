<template lang="pug">
ul(:class="$style.root")
	li(v-for="image in images", :key="image.key", :class="$style.item")
		picture(:class="$style.picture")
			source(
				:srcset="image.srcset.webp",
				:sizes="sizes",
				type="image/webp"
			)
			source(
				:srcset="image.srcset.jpg",
				:sizes="sizes",
				type="image/jpeg"
			)
			img(:src="image.fallback", :alt="image.alt", :class="$style.image")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { images as rawImages, sizes4k, sizesNo4k, formats } from "../shared/images"

interface Srcsets {
	jpg: string[],
	webp: string[],
}

interface Image {
	srcset: {
		jpg: string,
		webp: string,
	},
	fallback: string,
	alt: string,
	key: number,
}

export default defineComponent({
	setup() {
		const images: Image[] = [];
		for (let i = 0; i < rawImages.length; i++) {
			const raw = rawImages[i]
			const srcsets: Srcsets = {
				jpg: [],
				webp: [],
			};
			const sizes = raw.has4k ? sizes4k : sizesNo4k;
			for (const size of sizes) {
				for (const [format, srcset] of Object.entries(srcsets)) {
					const source = `/images/${raw.name}_${size}.${format} ${size}w`
					srcset.push(source)
				}
			}
			const fallback = `/images/${raw.name}_960.jpg`
			const image: Image = {
				srcset: {
					jpg: srcsets.jpg.join(", "),
					webp: srcsets.webp.join(", "),
				},
				fallback,
				alt: raw.alt,
				key: i,
			}
			images.push(image)
		}
		
		const sizes = sizesNo4k.map(size => `(max-width: ${size}px) ${size}px`)
			.join(", ")
		
		return {
			images,
			sizes: `${sizes}, 3840px`,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	grid-template-rows: 1fr;
	grid-template-columns: repeat(auto-fill, 100vw);
	grid-auto-flow: column;
	background-color: var(--light-1);
}

.item {
	padding: 2rem;
	justify-content: center;
	align-content: center;
}

.image {
	width: 100%;
}
</style>