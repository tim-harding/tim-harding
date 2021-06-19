<template lang="pug">
router-view
</template>

<script lang="ts">import { defineComponent, watchEffect } from "@vue/runtime-core";
import { settings } from "./shared/settings";

export default defineComponent({
	setup() {
		watchEffect(() => {
			const root = document.querySelector(":root")?.classList
			if (settings.isDark.value) {
				root?.remove("light")
				root?.add("dark")
			} else {
				root?.remove("dark")
				root?.add("light")
			}
		})
	}
})
</script>