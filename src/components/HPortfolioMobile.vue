<template lang="pug"> 
div(:class="$style.root")
	HHeader
	ul(:class="$style.list")
		li(v-for="image in images", :key="image.name")
			HImage(:name="image.name")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HHeader from ".././components/HHeader.vue"
import HImage from ".././components/HImage.vue"
import { images } from "../shared/images"

export default defineComponent({
	components: {
		HHeader,
		HImage,
	},

	setup() {
		return {
			images,
		}
	},
})
</script>

<style lang="scss" module>
.root {
	grid-template-rows: repeat(2, auto);
}

.list {
	padding: 1rem;
	gap: 1rem;
}
</style>