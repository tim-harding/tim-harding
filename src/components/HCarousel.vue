<template lang="pug">
HImage(:name="name")
</template>

<script lang="ts">

import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { assertDefined } from "../shared/assertions";
import { getRouteParam } from "../shared/misc";
import HImage from "./HImage.vue"

export default defineComponent({
	components: {
		HImage,
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
</style>