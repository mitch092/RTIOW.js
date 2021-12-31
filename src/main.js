import * as Window from "./window.js"
import * as Vec2d from "./vec2d.js"
import * as Rect from "./rect.js"
import * as Canvas from "./canvas.js"
import * as Color from "./color.js"
import * as TestImage from "./testimage.js"

const upperLeft = Vec2d.origin
//const lowerRight = Window.getDims()
const lowerRight = Vec2d.create(100, 100)
const rect = Rect.create(upperLeft, lowerRight)
const canvas = Canvas.create(rect)
canvas.fill(Color.black)

console.log("Right before testimage draw.")
TestImage.draw(canvas)
