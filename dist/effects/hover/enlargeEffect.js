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
 * @param {string} scale - To add Enlarge Effect on child Default value is "1" .
 * @param {string} className - to add custom styles using className.
 * @return {*}  {React.FC<GlowEffectProps>} - The GlowEffect component.
 */
var enlargeEffect = function (_a) {
    var children = _a.children, className = _a.className, scale = _a.scale;
    return (react_1.default.createElement(styles_1.EnlargeEffectStyle, { scale: scale, className: className }, children));
};
exports.default = enlargeEffect;
//# sourceMappingURL=enlargeEffect.js.map