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
 * BlinkEffect component that blinks the child element on double click
 * @param {React.FC<BlinkEffectProps>} children - The child component to be wrapped by the BlinkEffect component
 * @returns {React.ReactElement} - The React element representing the BlinkEffect component
 */
/**
 * A React component that blinks the content when double-clicked.
 * @param {React.FC<BlinkEffectProps>} children - The content to be blinked.
 * @returns {JSX.Element} - The React component.
 */
var BlinkEffect = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), blinking = _b[0], setBlinking = _b[1];
    (0, react_1.useEffect)(function () {
        /**
         * Handles the double-click event on the element.
         * Sets the blinking state to true and then after a specified duration, sets it back to false.
         */
        var handleDoubleClick = function () {
            setBlinking(true);
            setTimeout(function () {
                setBlinking(false);
            }, 1000); // Adjust the duration as needed
        };
        var element = document.getElementById("blink-element");
        if (element) {
            element.addEventListener("dblclick", handleDoubleClick);
            return function () {
                element.removeEventListener("dblclick", handleDoubleClick);
            };
        }
    }, []);
    return (react_1.default.createElement(styles_1.BlinkEffectStyle, { id: "blink-element", "$blinking": blinking }, children));
};
exports.default = BlinkEffect;
//# sourceMappingURL=blinkEffect.js.map