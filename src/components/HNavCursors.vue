<template lang="pug">
div(:class="$style.root")
	button(:class="$style.left", @click="$emit('left')")
	button(:class="$style.center", @click="$emit('contactSheet')")
	button(:class="$style.right", @click="$emit('right')")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	emits: [
		"left",
		"contactSheet",
		"right",
	],
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