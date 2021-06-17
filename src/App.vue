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
	--primary: var(--light-1);
	--secondary: var(--light-2);
	--tertiary: var(--light-3);
}

.dark {
	--primary: var(--dark-1);
	--secondary: var(--dark-2);
	--tertiary: var(--dark-3);
}
</style>