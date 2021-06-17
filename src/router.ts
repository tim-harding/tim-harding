import { createRouter, createWebHistory } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"
import HImage from "./components/HImage.vue"

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
                            // Todo: First image in list
                            image: "whatever",
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