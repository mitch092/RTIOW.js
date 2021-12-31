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

const fillContext = context => rect => color => {
    context.fillStyle = contextFillStyle(color)
    context.fillRect(0, 0, rect.getLowerRight().getX(), rect.getLowerRight().getY())
}

const setOnePixel = context => color => vec2d => {
    context.fillStyle = contextFillStyle(color)
    context.fillRect(vec2d.getX(), vec2d.getY(), 1, 1)
}

const create = (rect, name = "canvas") => {
    const canvas = addCanvas(rect, name)
    const context = canvas.getContext("2d");
    return {
        fill: (color) => fillContext(context)(rect)(color),
        setPixel: (vec2d, color) => setOnePixel(context)(color)(vec2d),
        getWidth: () => rect.getLowerRight().getX(),
        getHeight: () => rect.getLowerRight().getY()
    }
}

export { create }
