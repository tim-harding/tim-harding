<template lang="pug">
li(:class="$style.item")
	picture(:class="$style.picture")
		source(
			:srcset="image.srcset.webp",
			:sizes="image.sizesQuery",
			type="image/webp"
		)
		source(
			:srcset="image.srcset.jpg",
			:sizes="image.sizesQuery",
			type="image/jpeg"
		)
		img(:src="image.fallback", :alt="image.alt", :class="$style.image")
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { assertDefined } from "../shared/assertions";
import { imageForName, sizes4k, sizesNo4k } from "../shared/images"
import { getRouteParam } from "../shared/misc";

interface Image {
	srcset: {
		jpg: string,
		webp: string,
	},
	fallback: string,
	alt: string,
	sizesQuery: string,
}

export default defineComponent({
	setup() {
		const route = useRoute()
		
		const image = computed((): Image => {
			const name = getRouteParam(route)
			assertDefined(name)

			const info = imageForName(name)
			assertDefined(info)

			const srcsets: Record<string, string[]> = {
				jpg: [],
				webp: [],
			};
			const sizes = info.has4k ? sizes4k : sizesNo4k;
			for (const size of sizes) {
				for (const [format, srcset] of Object.entries(srcsets)) {
					const source = `/images/${name}_${size}.${format} ${size}w`
					srcset.push(source)
				}
			}
			const fallback = `/images/${name}_960.jpg`
			const sizesQuery = sizes.map(size => {
				return `(max-width: ${size}px) ${size}px`
			}).join(", ")

			return {
				srcset: {
					jpg: srcsets.jpg!.join(", "),
					webp: srcsets.webp!.join(", "),
				},
				fallback,
				alt: info.alt,
				sizesQuery,
			}
		})

		return {
			image,
		}
	}
})
</script>

<style lang="scss" module>
.item {
	grid-template-rows: 1fr;
	grid-template-columns: repeat(auto-fill, 100vw);
	grid-auto-flow: column;
	background-color: var(--light-1);
}

.picture {
	padding: 2rem;
	justify-content: center;
	align-content: center;
}

.image {
	width: 100%;
}
</style>