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
exports.PulseEffectStyle = exports.RippleButton = exports.BounceEffectStyle = void 0;
var styled_components_1 = __importStar(require("styled-components"));
/**
 * Keyframes for a bounce animation effect.
 * @type {Keyframes}
 */
var bounceAnimation = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n 0% {}\n\n\t25% {\n\t\ttransform: scale(1.2);\n\t}\n\n\t50% {\n\t\ttransform: scale(0.9);\n\t}\n\n\t75% {\n\t\ttransform: scale(1.05);\n\t}\n\n\t100% {\n\t\ttransform: scale(1);\n\t}\n\n"], ["\n\n 0% {}\n\n\t25% {\n\t\ttransform: scale(1.2);\n\t}\n\n\t50% {\n\t\ttransform: scale(0.9);\n\t}\n\n\t75% {\n\t\ttransform: scale(1.05);\n\t}\n\n\t100% {\n\t\ttransform: scale(1);\n\t}\n\n"])));
/**
 * A styled component that applies a bounce effect to its child elements when the `bounce` prop is true.
 */
exports.BounceEffectStyle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  > div,\n  > span,\n  > button,\n  > * {\n    ", "\n  }\n"], ["\n  display: inline-block;\n  width: 100%;\n  > div,\n  > span,\n  > button,\n  > * {\n    ", "\n  }\n"])), function (_a) {
    var $bounce = _a.$bounce;
    return $bounce && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        animation: ", " 320ms ease-out 0s forwards;\n      "], ["\n        animation: ", " 320ms ease-out 0s forwards;\n      "])), bounceAnimation);
});
/**
 * Styled component for a button with a ripple effect on click.
 * @param $top - The top position of the ripple effect.
 * @param $left - The left position of the ripple effect.
 * @param $ripple - Whether to show the ripple effect or not.
 */
exports.RippleButton = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  * {\n    overflow: hidden;\n    position: relative;\n    #ripple {\n      position: absolute;\n      transform: translate(-50%, -50%);\n      top: ", ";\n      left: ", ";\n      pointer-events: none;\n      user-select: none;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 50%;\n      ", "\n      @keyframes Animationripple {\n        0% {\n          transform: translate(-50%, -50%) scale(1);\n          width: 0px;\n          height: 0px;\n          opacity: 1;\n        }\n        100% {\n          transform: translate(-50%, -50%) scale(2);\n          width: 1000px;\n          height: 1000px;\n          opacity: 0;\n        }\n      }\n    }\n  }\n  span {\n    overflow: visible !important;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  * {\n    overflow: hidden;\n    position: relative;\n    #ripple {\n      position: absolute;\n      transform: translate(-50%, -50%);\n      top: ", ";\n      left: ", ";\n      pointer-events: none;\n      user-select: none;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 50%;\n      ", "\n      @keyframes Animationripple {\n        0% {\n          transform: translate(-50%, -50%) scale(1);\n          width: 0px;\n          height: 0px;\n          opacity: 1;\n        }\n        100% {\n          transform: translate(-50%, -50%) scale(2);\n          width: 1000px;\n          height: 1000px;\n          opacity: 0;\n        }\n      }\n    }\n  }\n  span {\n    overflow: visible !important;\n  }\n"])), function (_a) {
    var $top = _a.$top;
    return $top && "".concat($top, "px");
}, function (_a) {
    var $left = _a.$left;
    return $left && "".concat($left, "px");
}, function (_a) {
    var $ripple = _a.$ripple;
    return $ripple && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          animation: Animationripple 0.5s forwards;\n        "], ["\n          animation: Animationripple 0.5s forwards;\n        "])));
});
/**
 * Defines a keyframe animation for a pulse effect.
 * @template PulseProps The type of props that can be passed to the animation.
 */
var pulseAnimation = (0, styled_components_1.keyframes)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n"], ["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n"])));
/**
 * A styled component that applies a pulse effect when $pulsing prop is true.
 */
exports.PulseEffectStyle = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-block;\n  transition: transform 0.3s ease-in-out;\n  transform-origin: center;\n\n  ", "\n"], ["\n  display: inline-block;\n  transition: transform 0.3s ease-in-out;\n  transform-origin: center;\n\n  ", "\n"])), function (_a) {
    var $pulsing = _a.$pulsing;
    return $pulsing && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      animation: ", " 1s ease infinite;\n    "], ["\n      animation: ", " 1s ease infinite;\n    "])), pulseAnimation);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styles.js.map