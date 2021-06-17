<template lang="pug">
li(:class="$style.item")
	picture(:class="$style.picture")
		source(
			:srcset="image.srcset.webp",
			:sizes="sizesQuery",
			type="image/webp"
		)
		source(
			:srcset="image.srcset.jpg",
			:sizes="sizesQuery",
			type="image/jpeg"
		)
		img(:src="image.fallback", :alt="image.alt", :class="$style.image")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { imageForName, images, sizes4k, sizesNo4k } from "../shared/images"
import { assertDefined } from "../shared/assertions"

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
	key: string,
}

function getRouteParam(): string | undefined {
	const route = useRoute()
	const image = route.params.image
	switch (typeof image) {
		case "string": {
			return image
		}
		case "object": {
			return image[0]
		}
		case "undefined": {
			return undefined
		}
	}
}

export default defineComponent({
	setup() {
		console.log("Entered route")
		const fixRoute = () => {
			const param = getRouteParam()
			console.log(param)
			if (param === undefined || imageForName(param) === undefined) {
				// const route = useRoute()
				// console.log("Fixing route")
				// route.params.image = images[0]!.name
				const router = useRouter()
				router.push({
					name: "portfolio",
					params: {
						image: images[0]!.name,
					},
				})
			}
		}

		onBeforeRouteUpdate(async (to, from) => {
			fixRoute()
		})

		fixRoute()

		const name = getRouteParam()
		if (name === undefined) {
			return {
				image: {
					srcset: {
						jpg: "",
						webp: "",
					},
					fallback: "",
					alt: "",
					key: "",
				},
				sizesQuery: "",
			}
		}
		// After fixing the route, we should get back a valid image name
		// assertDefined(name)

		const info = imageForName(name)
		if (info === undefined) {
			return {
				image: {
					srcset: {
						jpg: "",
						webp: "",
					},
					fallback: "",
					alt: "",
					key: "",
				},
				sizesQuery: "",
			}
		}
		// assertDefined(info)

		const srcsets: Srcsets = {
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
		const image: Image = {
			srcset: {
				jpg: srcsets.jpg.join(", "),
				webp: srcsets.webp.join(", "),
			},
			fallback,
			alt: info.alt,
			key: name,
		}

		const sizesQuery = sizesNo4k.map(size => `(max-width: ${size}px) ${size}px`)
			.join(", ")

		return {
			image,
			sizesQuery,
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