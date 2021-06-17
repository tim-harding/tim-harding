<template lang="pug">
header(:class="$style.root")
	h1(:class="$style.title") Harding
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
})
</script>

<style lang="scss" module>
.root {
	align-items: center;

	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: var(--light-3);
	padding: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
}

.title {
	font-size: 2rem;
	font-weight: 700;
	color: var(--dark-4);
	cursor: default;
	user-select: none;
}
</style>