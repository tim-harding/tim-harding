<template lang="pug">
router-view(:class="isDark ? $style.dark : $style.light")
</template>

<script lang="ts">import { defineComponent } from "@vue/runtime-core";
import { settings } from "./shared/settings";

export default defineComponent({
	setup() {
		return {
			isDark: settings.isDark,
		}
	}
})
</script>

<style lang="scss" module>
.light {
	--background: #f2f4f8;
	--fill: white;
	--primary: var(--nord6);
	--secondary: var(--nord5);
	--tertiary: var(--nord4);
	--primary-text: var(--nord3);
	--secondary-text: var(--nord3);
	--tertiary-text: #7b88a1;
	--link: var(--nord10);
}

.dark {
	--background: #242933;
	--fill: var(--nord0);
	--primary: var(--nord1);
	--secondary: var(--nord2);
	--tertiary: var(--nord3);
	--primary-text: var(--nord6);
	--secondary-text: var(--nord4);
	--tertiary-text: #abb9cf;
	--link: var(--nord8);
}
</style>