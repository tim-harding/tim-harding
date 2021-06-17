export interface ImageInfo {
    name: string,
    alt: string,
    has4k: boolean,
}

export const images: ReadonlyArray<ImageInfo> = [
    {
        name: "absolut_vodka",
        alt: "Absolut Vodka bottle",
        has4k: true,
    },
    {
        name: "aventador",
        alt: "Lamborghini Aventador sportscar",
        has4k: true,
    },
    {
        name: "beats",
        alt: "Beats by Dr. Dre headphones",
        has4k: true,
    },
    {
        name: "bombay_sapphire",
        alt: "Bombay Sapphire gin bottle",
        has4k: false,
    },
    {
        name: "dior",
        alt: "Dior perfume bottle",
        has4k: true,
    },
    {
        name: "ferrari_italia",
        alt: "Ferrari Italia sportscar",
        has4k: true,
    },
    {
        name: "hugo_boss",
        alt: "Hugo Boss watch",
        has4k: true,
    },
    {
        name: "mackie",
        alt: "Mackie speakers",
        has4k: false,
    },
    {
        name: "michael_kors",
        alt: "Michael Kors watch",
        has4k: true,
    },
    {
        name: "nixon",
        alt: "Nixon watch",
        has4k: true,
    },
    {
        name: "ring",
        alt: "A ring",
        has4k: false,
    },
    {
        name: "tiffany",
        alt: "Tiffany perfume",
        has4k: false,
    },
    {
        name: "tincup",
        alt: "Tincup whiskey",
        has4k: true,
    },
    {
        name: "versace",
        alt: "Versace perfume",
        has4k: true,
    },
    {
        name: "wii",
        alt: "A wiimote controller",
        has4k: true,
    },
]

const imageLookup: Record<string, number> = {}
for (let i = 0; i < images.length; i++) {
    const image = images[i]!
    imageLookup[image.name] = i
}

export function imageForName(name: string): ImageInfo | undefined {
    const index = imageLookup[name]
    if (index === undefined) {
        return undefined
    }
    return images[index]
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