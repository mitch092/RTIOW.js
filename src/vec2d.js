const create = (x, y) => ({
    getX: () => x,
    getY: () => y,
})

const origin = create(0, 0);

export { create, origin };
