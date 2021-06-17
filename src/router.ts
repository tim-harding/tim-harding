import { createRouter, createWebHistory } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"
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
                name: "portfolio",
                params: {
                    image: images[0]!.name,
                },
            },
        },
        {
            name: "portfolio",
            path: "/portfolio/:image",
            component: Portfolio,
        }
    ],
}

export const router = createRouter(routerConfig)

router.beforeEach((to, from, next) => {
    switch (to.name) {
        case "portfolio": {
            const param = getRouteParam(to)
            if (param === undefined || imageForName(param) === undefined) {
                next({
                    name: "portfolio",
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