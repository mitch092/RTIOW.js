import * as Window from "./window.js"
import * as Vec2d from "./vec2d.js"
import * as Rect from "./rect.js"
import * as Canvas from "./canvas.js"
import * as Color from "./color.js"

const upperLeft = Vec2d.origin
const lowerRight = Window.getDims()
const rect = Rect.create(upperLeft, lowerRight)
const canvas = Canvas.create(rect)
canvas.fill(Color.green)

canvas.setPixel(Vec2d.origin, Color.red)
