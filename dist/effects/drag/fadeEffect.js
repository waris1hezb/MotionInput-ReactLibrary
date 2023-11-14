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
 * A React component that adds a fade effect to an element when dragged.
 * @param {FadeEffectProps} props - The props for the FadeEffect component.
 */
var FadeEffect = function (_a) {
    var children = _a.children;
    // Set initial state for isDragging, mousePosition and childWidth
    var _b = (0, react_1.useState)(false), isDragging = _b[0], setDragging = _b[1];
    var _c = (0, react_1.useState)({ x: 0, y: 0 }), mousePosition = _c[0], setMousePosition = _c[1];
    var _d = (0, react_1.useState)({ x: 0, y: 0 }), childWidth = _d[0], setChildWidth = _d[1];
    // Function to handle drag start event
    var onDragStart = function (e) {
        setDragging(true);
        var width = e.target.clientWidth;
        var height = e.target.clientHeight;
        setChildWidth({
            x: width,
            y: height,
        });
    };
    // Function to handle drag end event
    var handleDragEnd = function () {
        setDragging(false);
        setMousePosition({ x: 0, y: 0 });
    };
    // Function to handle mouse move event
    var handleMouseMove = function (e) {
        if (isDragging) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };
    // CSS class for the fade effect
    var fadeEffectClass = isDragging ? "fade-effect-dragging" : "";
    return (react_1.default.createElement(styles_1.FadeEffectStyle, { onMouseMove: handleMouseMove, onMouseDown: onDragStart, onMouseUp: handleDragEnd, className: fadeEffectClass },
        children,
        isDragging && (react_1.default.createElement(styles_1.DraggedChild, { "$height": childWidth.y, "$width": childWidth.x, style: {
                left: " ".concat(mousePosition.x === 0 ? " " : mousePosition.x + "px", " "),
                top: " ".concat(mousePosition.y === 0 ? " " : mousePosition.y + "px", " "),
                transform: "".concat(mousePosition.x === 0 && mousePosition.y === 0
                    ? ""
                    : "translate(-50%, -50%)", " "),
            } }, children))));
};
exports.default = FadeEffect;
//# sourceMappingURL=fadeEffect.js.map