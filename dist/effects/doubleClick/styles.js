"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.BlinkEffectStyle = exports.RotateEffectStyle = exports.FlipEffectStyle = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var flipAnimation = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotateY(0deg);\n  }\n  100% {\n    transform: rotateY(180deg);\n  }\n"], ["\n  0% {\n    transform: rotateY(0deg);\n  }\n  100% {\n    transform: rotateY(180deg);\n  }\n"])));
/**
 * A styled component that applies a flip effect when the $flipped prop is true.
 * @param $flipped - A boolean indicating whether the component should be flipped or not.
 */
exports.FlipEffectStyle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  transition: transform 0.5s ease-in-out;\n  transform-style: preserve-3d;\n  transform-origin: center;\n  perspective: 1000px;\n\n  ", "\n"], ["\n  display: inline-block;\n  transition: transform 0.5s ease-in-out;\n  transform-style: preserve-3d;\n  transform-origin: center;\n  perspective: 1000px;\n\n  ", "\n"])), function (_a) {
    var $flipped = _a.$flipped;
    return $flipped && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      animation: ", " 0.5s ease-in-out;\n      transform: rotateY(180deg);\n    "], ["\n      animation: ", " 0.5s ease-in-out;\n      transform: rotateY(180deg);\n    "])), flipAnimation);
});
var rotateAnimation = (0, styled_components_1.keyframes)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"])));
/**
 * A styled component that applies a rotate effect when $rotated prop is true.
 * @param $rotated - A boolean prop that determines whether to apply the rotate effect or not.
 */
exports.RotateEffectStyle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  transition: transform 0.5s ease-in-out;\n\n  ", "\n"], ["\n  display: inline-block;\n  transition: transform 0.5s ease-in-out;\n\n  ", "\n"])), function (_a) {
    var $rotated = _a.$rotated;
    return $rotated && (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      animation: ", " 0.5s ease-in-out;\n      transform: rotate(180deg);\n    "], ["\n      animation: ", " 0.5s ease-in-out;\n      transform: rotate(180deg);\n    "])), rotateAnimation);
});
var blinkAnimation = (0, styled_components_1.keyframes)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"], ["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"])));
/**
 * Component for creating a blinking effect.
 * @param $blinking - Determines whether the component should blink or not.
 */
exports.BlinkEffectStyle = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-block;\n  transition: opacity 0.5s ease-in-out;\n\n  ", "\n"], ["\n  display: inline-block;\n  transition: opacity 0.5s ease-in-out;\n\n  ", "\n"])), function (_a) {
    var $blinking = _a.$blinking;
    return $blinking && (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      animation: ", " 1s ease infinite;\n    "], ["\n      animation: ", " 1s ease infinite;\n    "])), blinkAnimation);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styles.js.map