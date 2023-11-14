"use strict";
// pulseEffect.tsx
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
 * A React component that adds a pulse effect to an element when clicked.
 * @param {PulseEffectProps} props - The props for the PulseEffect component.
 */
var PulseEffect = function (_a) {
    var children = _a.children, _b = _a.scale, scale = _b === void 0 ? 1.2 : _b;
    var _c = (0, react_1.useState)(false), pulsing = _c[0], setPulsing = _c[1];
    /**
     * Handles the click event for the pulse effect.
     * Sets the `pulsing` state to `true` and then sets it back to `false` after a specified duration.
     */
    var handlePulseClick = function () {
        setPulsing(true);
        setTimeout(function () {
            setPulsing(false);
        }, 1000); // Adjust the duration as needed
    };
    return (react_1.default.createElement(styles_1.PulseEffectStyle, { id: "pulse-element", "$scale": scale, "$pulsing": pulsing, onClick: handlePulseClick }, children));
};
exports.default = PulseEffect;
//# sourceMappingURL=pulseEffect.js.map