<template lang="pug">
div(:class="$style.root")
	router-link(:class="$style.previous", :to="transport.previous")
	router-link(:class="$style.center", :to="contactSheet")
	router-link(:class="$style.next", :to="transport.next")
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { assertDefined } from "../shared/assertions";
import { imageIndex, images } from "../shared/images";
import { getRouteParam, mod } from "../shared/misc";

export default defineComponent({
	setup() {
		const route = useRoute()

		const transport = computed(() => {
			const name = getRouteParam(route)
			assertDefined(name)

			const index = imageIndex(name)
			assertDefined(index)

			const previousIndex = mod(index - 1, images.length)
			const previous = {
				name: "carousel",
				params: {
					image: images[previousIndex]!.name,
				},
			}

			const nextIndex = mod(index + 1, images.length)
			const next = {
				name: "carousel",
				params: {
					image: images[nextIndex]!.name,
				},
			}

			return {
				previous,
				next,
			}
		})

		const contactSheet = {
			name: "contact_sheet",
		}

		return {
			transport,
			contactSheet,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "previous center next";
	width: 100vw;
	z-index: 1;
}

.previous {
	grid-area: previous;
	cursor: url("/icons/arrow-left.svg") 0 16, auto;
}

.center {
	grid-area: center;
	cursor: url("/icons/grid.svg") 12 12, auto;
}

.next {
	grid-area: next;
	cursor: url("/icons/arrow-right.svg") 32 16, auto;
}
</style>