<template lang="pug">
svg(
	xmlns="http://www.w3.org/2000/svg" 
	viewBox="0 0 24 24" 
)
	title Moon
	mask(id="moonMask")
		rect(
			width="24"
			height="24"
			fill="white"
		)
		circle(
			fill="black"
			cx="8"
			cy="8"
			r="7"
		)
	circle(
		:class="$style.fill"
		cx="12"
		cy="12"
		r="9"
		mask="url(#moonMask)"
	)
</template>

<style lang="scss" module>
.fill {
	fill: var(--dark-4);
}
</style>