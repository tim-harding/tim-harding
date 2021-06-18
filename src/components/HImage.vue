<template lang="pug">
picture(:class="[$style.root, { [$style.show]: isLoaded }]")
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
	img(:src="image.fallback", :alt="image.alt", :class="$style.image", @load="isLoaded = true")
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { assertDefined } from "../shared/assertions";
import { imageForName, sizes4k, sizesNo4k } from "../shared/images"

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
	props: {
		name: {
			type: String,
			required: true,
		}
	},

	setup(props) {
		const image = computed((): Image => {
			const name = props.name
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

		const isLoaded = ref(false)

		return {
			image,
			isLoaded,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	justify-content: center;
	align-content: center;
	opacity: 0;
}

.show {
	opacity: 1;
}

.image {
	width: 100%;
	aspect-ratio: 2 / 1;
	border-color: var(--primary-4);
	border-style: solid;
	border-width: 1px;
}
</style>