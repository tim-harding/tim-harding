<template lang="pug">
div(:class="$style.root")
	HImage(:class="$style.image", :name="name")
	HNavCursors(:class="$style.cursors")
</template>

<script lang="ts">

import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { assertDefined } from "../shared/assertions";
import { getRouteParam } from "../shared/misc";
import HImage from "./HImage.vue"
import HNavCursors from "../components/HNavCursors.vue";

export default defineComponent({
	components: {
		HImage,
		HNavCursors,
	},

	setup() {
		const route = useRoute()

		const name = computed(() => {
			const name = getRouteParam(route)
			assertDefined(name)
			return name
		})

		return {
			name,
		}
	}
})
</script>

<style lang="scss" module>
.root {
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	grid-template-areas: "center";
	background-color: var(--carousel-bg);
}

.image {
	grid-area: center;
	padding: 2rem;
	width: 100%;
}

.cursors {
	grid-area: center;
}
</style>