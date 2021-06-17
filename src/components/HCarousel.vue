<template lang="pug">
div(:class="$style.root")
	HNavCursors(:class="$style.cursors")
	HImageList(:class="$style.list")
</template>

<script lang="ts">
import HImageList from "./HImageList.vue"
import HNavCursors from "./HNavCursors.vue"
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	components: {
		HImageList,
		HNavCursors,
	},
})
</script>

<style lang="scss" module>
.root {
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	grid-template-areas: "center";
}

.cursors {
	grid-area: center;
}

.list {
	grid-area: center;
}
</style>