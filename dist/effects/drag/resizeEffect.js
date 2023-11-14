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
 * A React component that adds a resize effect to an element when dragged.
 * @param {ResizeEffectProps} props - The props for the ResizeEffect component.
 */
var ResizeEffect = function (_a) {
    var children = _a.children;
    // State to keep track of whether the element is being dragged or not
    var _b = (0, react_1.useState)(false), isDragging = _b[0], setIsDragging = _b[1];
    // State to keep track of the initial width of the element being dragged
    var _c = (0, react_1.useState)(null), initialWidth = _c[0], setInitialWidth = _c[1];
    // Reference to the element being dragged
    var elementRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var element = elementRef.current;
        // Function to handle the mouse down event on the element being dragged
        var handleMouseDown = function (e) {
            setIsDragging(true);
            setInitialWidth(element.clientWidth);
            // Function to handle the mouse up event on the window
            var handleMouseUp = function () {
                setIsDragging(false);
                setInitialWidth(null);
                // Remove event listeners for mouse up and mouse move
                window.removeEventListener("mouseup", handleMouseUp);
                window.removeEventListener("mousemove", handleMouseMove);
            };
            // Function to handle the mouse move event on the window
            var handleMouseMove = function (e) {
                if (isDragging && initialWidth !== null) {
                    // Calculate the new width of the element being dragged
                    var newWidth = initialWidth + (e.clientX - initialWidth);
                    if (element) {
                        // Set the new width of the element being dragged
                        element.style.width = "".concat(newWidth, "px");
                    }
                }
            };
            // Add event listeners for mouse up and mouse move on the window
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("mousemove", handleMouseMove);
        };
        if (element) {
            // Add event listener for mouse down on the element being dragged
            element.addEventListener("mousedown", handleMouseDown);
            // Remove event listener for mouse down on the element being dragged when the component unmounts
            return function () {
                element.removeEventListener("mousedown", handleMouseDown);
            };
        }
    }, [isDragging, initialWidth]);
    // Render the component with the ResizeEffectStyle component and the children passed in as props
    return (react_1.default.createElement(styles_1.ResizeEffectStyle, { ref: elementRef, "$isDragging": isDragging }, children));
};
exports.default = ResizeEffect;
//# sourceMappingURL=resizeEffect.js.map