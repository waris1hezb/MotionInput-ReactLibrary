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
exports.ResizeEffectStyle = exports.FadeEffectStyle = exports.DraggedChildAnimation = exports.DraggedChild = exports.Wrapper = void 0;
var styled_components_1 = __importStar(require("styled-components"));
/**
 * A styled component that contains the drag effect wrapper.
 */
exports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  display: inline-block;\n  overflow: hidden;\n"], ["\n  user-select: none;\n  display: inline-block;\n  overflow: hidden;\n"])));
/**
 * A styled component that represents a dragged child element.
 * @param {number} $width - The width of the dragged child element.
 * @param {number} $height - The height of the dragged child element.
 */
exports.DraggedChild = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  position: fixed;\n  opacity: 0.9;\n  transition: all 0s linear;\n  background: none;\n"], ["\n  width: ", ";\n  height: ", ";\n  position: fixed;\n  opacity: 0.9;\n  transition: all 0s linear;\n  background: none;\n"])), function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $height = _a.$height;
    return $height;
});
/**
 * A styled component that represents the animation of a dragged child element.
 * @param {string} $radius - The radius of the dragged child element.
 * @param {number} $width - The width of the dragged child element.
 * @param {number} $height - The height of the dragged child element.
 */
exports.DraggedChildAnimation = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  position: fixed;\n  border-radius: ", ";\n  opacity: 1;\n  background: none;\n"], ["\n  width: ", ";\n  height: ", ";\n  position: fixed;\n  border-radius: ", ";\n  opacity: 1;\n  background: none;\n"])), function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $radius = _a.$radius;
    return $radius;
});
var fadeAnimation = (0, styled_components_1.keyframes)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.5;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.5;\n  }\n"])));
/**
 * Styled component for the fade effect.
 * @remarks
 * This component is used to create a fade effect when an element is dragged.
 * @public
 */
exports.FadeEffectStyle = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* transition: opacity 0.5s ease-in-out;\n  background: transparent;\n  display: inline-block; */\n\n  user-select: none;\n  display: inline-block;\n  overflow: hidden;\n\n  &.fade-effect-dragging {\n    animation: ", " 0.5s ease infinite alternate;\n    display: inline-block;\n  }\n"], ["\n  /* transition: opacity 0.5s ease-in-out;\n  background: transparent;\n  display: inline-block; */\n\n  user-select: none;\n  display: inline-block;\n  overflow: hidden;\n\n  &.fade-effect-dragging {\n    animation: ", " 0.5s ease infinite alternate;\n    display: inline-block;\n  }\n"])), fadeAnimation);
/**
 * A styled component that represents the resize effect.
 * @param $isDragging - A boolean value indicating whether the component is being dragged or not.
 */
exports.ResizeEffectStyle = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: inline-block;\n  transition: width 0.2s ease-in-out;\n  overflow: hidden;\n  resize: horizontal;\n\n  ", "\n"], ["\n  display: inline-block;\n  transition: width 0.2s ease-in-out;\n  overflow: hidden;\n  resize: horizontal;\n\n  ", "\n"])), function (_a) {
    var $isDragging = _a.$isDragging;
    return $isDragging && (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      cursor: ew-resize;\n    "], ["\n      cursor: ew-resize;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styles.js.map