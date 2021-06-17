<template lang="pug">
div(:class="$style.root")
	router-link(:class="$style.left", :to="links.previous")
	button(:class="$style.center", @click="$emit('contactSheet')")
	router-link(:class="$style.right", :to="links.next")
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { assertDefined } from "../shared/assertions";
import { imageIndex, images } from "../shared/images";
import { getRouteParam, mod } from "../shared/misc";

export default defineComponent({
	emits: [
		"contactSheet",
	],

	setup() {
		const route = useRoute()

		const links = computed(() => {
			const name = getRouteParam(route)
			assertDefined(name)

			const index = imageIndex(name)
			assertDefined(index)

			const previousIndex = mod(index - 1, images.length)
			const previous = {
				name: "portfolio",
				params: {
					image: images[previousIndex]!.name,
				},
			}

			const nextIndex = mod(index + 1, images.length)
			const next = {
				name: "portfolio",
				params: {
					image: images[nextIndex]!.name,
				},
			}

			return {
				previous,
				next,
			}
		})
		
		return {
			links,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "left center right";
	width: 100vw;
	z-index: 1;
}

.left {
	grid-area: left;
	cursor: url("/icons/arrow-left.svg") 0 16, auto;
}

.center {
	grid-area: center;
	cursor: url("/icons/grid.svg") 12 12, auto;
}

.right {
	grid-area: right;
	cursor: url("/icons/arrow-right.svg") 32 16, auto;
}
</style>