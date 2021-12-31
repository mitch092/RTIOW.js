const create = (upperLeft, lowerRight) => ({
    getUpperLeft: () => upperLeft,
    getLowerRight: () => lowerRight,
    getWidth: () => lowerRight.getX() - upperLeft.getX(),
    getHeight: () => lowerRight.getY() - upperLeft.getY(),
})

export { create };
