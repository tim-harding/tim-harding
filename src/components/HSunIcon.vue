<template lang="pug">
svg(
	xmlns="http://www.w3.org/2000/svg",
	viewBox="0 0 24 24"
)
	title Sun
	circle(
		:class="$style.fill",
		cx="12",
		cy="12",
		r="4.5",
	)
	line(
		:class="$style.stroke"
		v-for="rotation in rotations"
		:key="rotation"
		x1="20"
		x2="23"
		y1="12"
		y2="12"
		:transform="rotation"
	)
</template>

<script lang="ts">import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	setup() {
		const rotations = []
		for (let i = 0; i < 8; i++) {
			rotations.push(`rotate(${i * 45} 12 12)`)
		}

		return {
			rotations,
		}
	}
})
</script>

<style lang="scss" module>
.stroke {
	stroke: var(--dark-4);
	stroke-width: 2;
	stroke-linecap: round;
}

.fill {
	fill: var(--dark-4);
}
</style>