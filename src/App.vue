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
	--primary-1: white;
	--primary-2: var(--light-1);
	--primary-3: var(--light-2);
	--primary-4: var(--light-3);
	--secondary-1: var(--dark-1);
	--secondary-2: var(--dark-2);
	--secondary-3: var(--dark-3);
	--secondary-4: var(--dark-4);
}

.dark {
	--primary-1: var(--dark-1);
	--primary-2: var(--dark-2);
	--primary-3: var(--dark-3);
	--primary-4: var(--dark-4);
	--secondary-1: white;
	--secondary-2: var(--light-1);
	--secondary-3: var(--light-2);
	--secondary-4: var(--light-3);
}
</style>