"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailDot = exports.TrailContainer = exports.BoundingChild = exports.BoundingContainer = exports.ZoomChild = exports.ZoomContainer = exports.ColorChangeEffectStyle = exports.EnlargeEffectStyle = exports.GlowEffectStyle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
/**
 * A styled component that applies a glow effect on hover.
 * @param {GlowProps} props - The props for the component.
 * @returns {JSX.Element} - A JSX element representing the styled component.
 */
exports.GlowEffectStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: box-shadow 0.5s ease-in-out;\n\n    &:hover {\n      -webkit-box-shadow: 0 0 5px 5px\n        ", ";\n      -moz-box-shadow: 0 0 5px 5px\n        ", ";\n      box-shadow: 0 0 5px 5px\n        ", ";\n    }\n  }\n"], ["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: box-shadow 0.5s ease-in-out;\n\n    &:hover {\n      -webkit-box-shadow: 0 0 5px 5px\n        ", ";\n      -moz-box-shadow: 0 0 5px 5px\n        ", ";\n      box-shadow: 0 0 5px 5px\n        ", ";\n    }\n  }\n"])), function (_a) {
    var $glowColor = _a.$glowColor;
    return ($glowColor ? $glowColor : "");
}, function (_a) {
    var $glowColor = _a.$glowColor;
    return ($glowColor ? $glowColor : "");
}, function (_a) {
    var $glowColor = _a.$glowColor;
    return ($glowColor ? $glowColor : "");
});
/**
 * A styled component that applies an enlarge effect on hover to its child elements.
 * @param scale - The scale factor to apply on hover. Defaults to 1 if not provided.
 */
exports.EnlargeEffectStyle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: transform 0.5s ease-in-out;\n    &:hover {\n      transform: scale(", ");\n    }\n  }\n"], ["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: transform 0.5s ease-in-out;\n    &:hover {\n      transform: scale(", ");\n    }\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return (scale ? scale : "1");
});
/**
 * A styled component that applies a color shift effect on hover to its child elements.
 * @param color - The color to apply on hover.
 * @param background - The background color to apply on hover.
 */
exports.ColorChangeEffectStyle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: 0.5s ease-in-out;\n    &:hover {\n      color: ", ";\n      background: ", ";\n    }\n  }\n"], ["\n  > div,\n  > span,\n  > button,\n  > * {\n    transition: 0.5s ease-in-out;\n    &:hover {\n      color: ", ";\n      background: ", ";\n    }\n  }\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : "");
}, function (_a) {
    var background = _a.background;
    return (background ? background : "");
});
/**
 * A styled container component that applies a zoom effect on hover.
 * @param radius - The border radius of the container.
 */
exports.ZoomContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  border-radius: ", ";\n"], ["\n  display: inline-block;\n  border-radius: ", ";\n"])), function (_a) {
    var radius = _a.radius;
    return (radius ? radius : "");
});
exports.ZoomChild = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transition: 0.1s all linear;\n"], ["\n  transition: 0.1s all linear;\n"])));
/**
 * A styled component that applies a trail effect on cursor movment .
 * @param radius - adjust the border-radius according to children.
 * @param TrailColor - The background color of trail.
 */
exports.BoundingContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";\n"], ["\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";\n"])), function (_a) {
    var radius = _a.radius;
    return (radius ? radius : "");
});
exports.BoundingChild = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  transition: 0.1s all linear;\n"], ["\n  transition: 0.1s all linear;\n"])));
exports.TrailContainer = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
/**
 * A styled component that applies a trail effect on cursor movment .
 * @param width - adjust the width according to your requirement default is 24.
 * @param TrailColor - The background color of trail.
 */
exports.TrailDot = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: ", ";\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  background-color: ", ";\n  position: fixed;\n  pointer-events: none;\n  z-index: 999999;\n"], ["\n  width: ", ";\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  background-color: ", ";\n  position: fixed;\n  pointer-events: none;\n  z-index: 999999;\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var $TrailColor = _a.$TrailColor;
    return $TrailColor;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styles.js.map