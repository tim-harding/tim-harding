export interface ImageInfo {
    alt: string,
    has4k: boolean,
}

export const images: Record<string, ImageInfo> = {
    absolut_vodka: {
        alt: "Absolut Vodka bottle",
        has4k: true,
    },
    aventador: {
        alt: "Lamborghini Aventador sportscar",
        has4k: true,
    },
    beats: {
        alt: "Beats by Dr. Dre headphones",
        has4k: true,
    },
    bombay_sapphire: {
        alt: "Bombay Sapphire gin bottle",
        has4k: false,
    },
    dior: {
        alt: "Dior perfume bottle",
        has4k: true,
    },
    ferrari_italia: {
        alt: "Ferrari Italia sportscar",
        has4k: true,
    },
    hugo_boss: {
        alt: "Hugo Boss watch",
        has4k: true,
    },
    mackie: {
        alt: "Mackie speakers",
        has4k: false,
    },
    michael_kors: {
        alt: "Michael Kors watch",
        has4k: true,
    },
    nixon: {
        alt: "Nixon watch",
        has4k: true,
    },
    ring: {
        alt: "A ring",
        has4k: false,
    },
    tiffany: {
        alt: "Tiffany perfume",
        has4k: false,
    },
    tincup: {
        alt: "Tincup whiskey",
        has4k: true,
    },
    versace: {
        alt: "Versace perfume",
        has4k: true,
    },
    wii: {
        alt: "A wiimote controller",
        has4k: true,
    },
}

export const sizes4k = [
    540,
    960,
    1280,
    1920,
    3840,
]

export const sizesNo4k = sizes4k.slice(0, -1)

export const formats = [
    "jpg",
    "webp",
]