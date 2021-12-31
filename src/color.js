const create = (r, g, b, a) => ({
    getRed: () => r,
    getGreen: () => g,
    getBlue: () => b,
    getAlpha: () => a
})

const create2 = (r, g, b) => create(r, g, b, 255)

const white = create2(255, 255, 255)

const black = create2(0, 0, 0)

const red = create2(255, 0, 0)

const green = create2(0, 255, 0)

const blue = create2(0, 0, 255)

export { create, create2, white, black, red, green, blue }
