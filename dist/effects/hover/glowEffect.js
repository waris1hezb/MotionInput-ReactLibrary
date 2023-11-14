"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
/**
 * Renders a component that applies a glow effect to its children.
 * @param {React.ReactNode} children - The children to apply the glow effect to.
 * @param {string} glowColor - The color of the glow effect. Defaults to white.
 * @param {string} className - to add custom styles using className.
 * @return {*}  {React.FC<GlowEffectProps>} - The GlowEffect component.
 */
var GlowEffect = function (_a) {
    var children = _a.children, glowColor = _a.glowColor, className = _a.className;
    return (react_1.default.createElement(styles_1.GlowEffectStyle, { "$glowColor": glowColor, className: className }, children));
};
exports.default = GlowEffect;
//# sourceMappingURL=glowEffect.js.map