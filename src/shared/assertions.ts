export function assertDefined<T>(value: T | undefined): asserts value is T {
    if (value === undefined) {
        throw new TypeError("Value is undefined")
    }
}

export function assertNotNull<T>(value: T | null): asserts value is T {
    if (value === null) {
        throw new TypeError("Value is null")
    }
}