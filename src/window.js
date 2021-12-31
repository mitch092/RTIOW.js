import * as Vec2d from "./vec2d.js";

const width = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const getDims = () => Vec2d.create(width(), height());

export { getDims };
