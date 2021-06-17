<template lang="pug">
ul(:class="$style.root")
	li(v-for="image in images", :key="image.name")
		HImage(:name="image.name")
</template>

<script lang="ts">import { defineComponent } from "@vue/runtime-core";
import { images } from "../shared/images";
import HImage from "./HImage.vue";

export default defineComponent({
	components: { 
		HImage,
	},

	setup() {
		return {
			images,
		};
	},
})
</script>

<style lang="scss" module>
.root {
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-template-rows: repeat(auto-fit, auto);
}
</style>