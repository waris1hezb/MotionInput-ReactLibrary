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
 * A React component that adds a flip effect to an element on double-click.
 * @param {FlipEffectProps} props - The props for the FlipEffect component.
 */
var FlipEffect = function (_a) {
    var children = _a.children;
    // State to keep track of whether the element is flipped or not
    var _b = (0, react_1.useState)(false), flipped = _b[0], setFlipped = _b[1];
    (0, react_1.useEffect)(function () {
        // Function to handle double-click event
        var handleDoubleClick = function () {
            // Toggle the flipped state
            setFlipped(!flipped);
        };
        // Get the element by ID
        var element = document.getElementById("flip-element");
        // If the element exists, add event listener for double-click
        if (element) {
            element.addEventListener("dblclick", handleDoubleClick);
            // Remove event listener when component unmounts
            return function () {
                element.removeEventListener("dblclick", handleDoubleClick);
            };
        }
    }, [flipped]);
    // Render the component with the FlipEffectStyle component and the children
    return (react_1.default.createElement(styles_1.FlipEffectStyle, { id: "flip-element", "$flipped": flipped }, children));
};
exports.default = FlipEffect;
//# sourceMappingURL=flipEffect.js.map