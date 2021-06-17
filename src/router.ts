import { createRouter, createWebHistory } from "vue-router"
import Portfolio from "./pages/Portfolio.vue"

const routerConfig = {
    history: createWebHistory(),
    routes: [
        {
            path: "/portfolio/:image",
            component: Portfolio,
        }
    ],
}

export const router = createRouter(routerConfig)