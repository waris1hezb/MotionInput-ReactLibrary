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
 * Bounce effect component that wraps its children with a styled component.
 * @param children The children to be wrapped with the bounce effect.
 * @returns A React functional component that applies a bounce effect to its children.
 */
var BounceEffect = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), bounce = _b[0], setBounce = _b[1];
    /**
     * Handles the bouncing effect on click.
     * Sets the bounce state to true and then sets it back to false after 1 second.
     */
    function handelBounce() {
        setBounce(true);
        setTimeout(function () {
            setBounce(false);
        }, 1000);
    }
    return (react_1.default.createElement(styles_1.BounceEffectStyle, { "$bounce": bounce, onClick: handelBounce }, children));
};
exports.default = BounceEffect;
//# sourceMappingURL=bounceEffect.js.map