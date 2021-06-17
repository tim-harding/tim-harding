import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"
import HImage from "./components/HImage.vue"
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
                        name: "carousel-image",
                        params: {
                            image: images[0]!.name,
                        }
                    }
                },
                {
                    name: "carousel-image",
                    path: ":image",
                    component: HImage,
                }
            ]
        }
    ],
}

export const router = createRouter(routerConfig)

router.beforeEach((to, from, next) => {
    switch (to.name) {
        case "carousel-image": {
            console.log("Navigation to carousel image")
            const param = getRouteParam(to)
            console.log(param)
            if (param === undefined || imageForName(param) === undefined) {
                to.params.image = images[0]!.name
            }
            next()
            break
        }
        default: {
            next()
            break
        }
    }
})