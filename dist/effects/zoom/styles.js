"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundingChild = exports.BoundingContainer = exports.ZoomChild = exports.ZoomContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ZoomContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  border-radius: ", ";\n"], ["\n  display: inline-block;\n  border-radius: ", ";\n"])), function (_a) {
    var radius = _a.radius;
    return (radius ? radius : "");
});
exports.ZoomChild = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  transition: 0.1s all linear;\n"], ["\n  transition: 0.1s all linear;\n"])));
/**
 * A styled component that applies a trail effect on cursor movment .
 * @param radius - adjust the border-radius according to children.
 * @param TrailColor - The background color of trail.
 */
exports.BoundingContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";\n"], ["\n  display: inline-block;\n  overflow: hidden;\n  border-radius: ", ";\n"])), function (_a) {
    var radius = _a.radius;
    return (radius ? radius : "");
});
exports.BoundingChild = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  transition: 0.1s all linear;\n"], ["\n  transition: 0.1s all linear;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
/**
 * A styled component that applies a trail effect on cursor movment .
 * @param radius - adjust the border-radius according to children.
 * @param TrailColor - The background color of trail.
 */
//# sourceMappingURL=styles.js.map