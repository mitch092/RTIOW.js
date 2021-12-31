import * as Color from "./color.js"
import * as Vec2d from "./vec2d.js"

const getColor = dim => pixelCoord => Color.create2(pixelCoord.getX() / (dim.getX() - 1), pixelCoord.getY() / (dim.getY() - 1), 64)

const draw = canvas => {
    console.log("right before getColor")
    const drawer = getColor(canvas.getDim())
    console.log("right after getColor")
    for (let i = 0; i != canvas.getDim().getY(); ++i) {
        for (let j = 0; i != canvas.getDim().getX(); ++j) {
            console.log(`X is: ${j}, Y is: ${i}`)
            const pixelCoord = Vec2d.create(j, i)
            const color = drawer(pixelCoord)
            canvas.setPixel(pixelCoord, color)
        }
    }
}

export { draw }
