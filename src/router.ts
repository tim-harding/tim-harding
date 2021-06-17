import { createRouter, createWebHistory } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"
import HCarousel from "./components/HCarousel.vue"
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
			path: "/portfolio",
			redirect: {
				name: "carousel",
				params: {
					image: images[0]!.name,
				},
			},
		},
		{
			name: "portfolio",
			path: "/portfolio",
			component: Portfolio,
			children: [
				{
					name: "carousel",
					path: ":image",
					component: HCarousel,
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