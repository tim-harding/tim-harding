import { createRouter, createWebHistory } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"
import HCarousel from "./components/HCarousel.vue"
import HContactSheet from "./components/HContactSheet.vue"
import { imageForName, images } from "./shared/images"
import { getRouteParam } from "./shared/misc"

const routerConfig = {
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: {
				name: "portfolio",
			}
		},
		{
			name: "portfolio",
			path: "/portfolio",
			component: Portfolio,
			children: [
				{
					path: "",
					redirect: {
						name: "carousel",
						params: {
							image: images[0]!.name,
						},
					},
				},
				{
					name: "carousel",
					path: ":image",
					component: HCarousel,
				},
				{
					name: "contact_sheet",
					path: "contact_sheet",
					component: HContactSheet,
				},
			],
		},
	],
}

export const router = createRouter(routerConfig)

router.beforeEach((to, from, next) => {
	switch (to.name) {
		case "carousel": {
			const param = getRouteParam(to)
			if (param === undefined || imageForName(param) === undefined) {
				next({
					name: "carousel",
					params: {
						image: images[0]!.name,
					}
				})
			} else {
				next()
			}
			break
		}
		default: {
			next()
			break
		}
	}
})