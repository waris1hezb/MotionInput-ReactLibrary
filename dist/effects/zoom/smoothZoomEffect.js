"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
/**
 * @param zoom - adjust the zoom according to your requirements .
 */
var smoothZoomEffect = function (_a) {
    var children = _a.children, radius = _a.radius, _b = _a.zoom, zoom = _b === void 0 ? 2 : _b;
    var _c = (0, react_1.useState)({ x: 0, y: 0 }), position = _c[0], setPosition = _c[1];
    function handelMouseMove(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var offsetX = e.clientX - rect.left;
        var offsetY = e.clientY - rect.top;
        setPosition({
            x: offsetX,
            y: offsetY,
        });
    }
    function handelMouseLeave() {
        setPosition({ x: 0, y: 0 });
    }
    return (react_1.default.createElement(styles_1.ZoomContainer, { onMouseMove: handelMouseMove, onMouseLeave: handelMouseLeave, radius: radius },
        react_1.default.createElement(styles_1.ZoomChild, { style: {
                transformOrigin: position.x === 0 && position.y === 0
                    ? "center"
                    : "".concat(position.x, "px ").concat(position.y, "px"),
                transform: position.x === 0 && position.y === 0
                    ? "scale(1)"
                    : "scale(".concat(zoom, ")"),
            } }, children)));
};
exports.default = smoothZoomEffect;
//# sourceMappingURL=smoothZoomEffect.js.map