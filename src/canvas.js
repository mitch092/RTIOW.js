const canvasStyle = (upperLeft) => `border: 0px solid red; position: fixed; left: ${upperLeft.getX()}px; top: ${upperLeft.getY()}px;`

const addCanvas = (rect, name) => {
    const canvas = document.createElement("canvas")
    canvas.setAttribute("id", name);
    canvas.setAttribute("width", rect.getLowerRight().getX())
    canvas.setAttribute("height", rect.getLowerRight().getY())
    canvas.setAttribute("style", canvasStyle(rect.getUpperLeft()))
    document.body.appendChild(canvas)
    return canvas;
}

const contextFillStyle = color => `rgba(${color.getRed()},${color.getGreen()},${color.getBlue()},${color.getAlpha()})`

const fillContext = context => color => lowerRight => {
    context.fillStyle = contextFillStyle(color)
    context.fillRect(0, 0, lowerRight.getX(), lowerRight.getY())
}

const setOnePixel = context => color => pixelCoord => {
    context.fillStyle = contextFillStyle(color)
    context.fillRect(pixelCoord.getX(), pixelCoord.getY(), 1, 1)
}

const create = (rect, name = "canvas") => {
    const canvas = addCanvas(rect, name)
    const context = canvas.getContext("2d");
    return {
        fill: (color) => fillContext(context)(color)(rect.getLowerRight()),
        setPixel: (vec2d, color) => setOnePixel(context)(color)(vec2d),
        getWidth: () => rect.getLowerRight().getX(),
        getHeight: () => rect.getLowerRight().getY()
    }
}

export { create }
