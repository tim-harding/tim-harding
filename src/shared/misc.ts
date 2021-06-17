import { RouteLocationNormalized } from "vue-router"

export function getRouteParam(to: RouteLocationNormalized): string | undefined {
    const image = to.params.image
    switch (typeof image) {
        case "string": {
            return image
        }
        case "object": {
            return image[0]
        }
        case "undefined": {
            return undefined
        }
    }
}