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
 * A React component that adds a double ripple effect to a button on double click.
 *
 * @param children The content to be displayed inside the button.
 */
var doublerippleEffect = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({ x: -100, y: -100 }), position = _b[0], setPosition = _b[1];
    var _c = (0, react_1.useState)(false), ripple = _c[0], setRipple = _c[1];
    var rippleButtonRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (position.x !== -100 && position.y !== -100) {
            setRipple(true);
            setTimeout(function () {
                setRipple(false);
                document.getElementById("ripple").remove();
                document.getElementById("ripple2").remove();
            }, 1000);
        }
        else {
            setRipple(false);
        }
    }, [position]);
    (0, react_1.useEffect)(function () {
        if (!ripple) {
            setPosition({
                x: -100,
                y: -100,
            });
        }
    }, [ripple]);
    function handelClick(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var offsetX = e.clientX - rect.left;
        var offsetY = e.clientY - rect.top;
        setPosition({
            x: offsetX,
            y: offsetY,
        });
        if (rippleButtonRef.current.hasChildNodes()) {
            var children_2 = rippleButtonRef.current.childNodes;
            for (var _i = 0, children_1 = children_2; _i < children_1.length; _i++) {
                var node = children_1[_i];
                var newChild = document.createElement("span");
                newChild.id = "ripple";
                node.appendChild(newChild);
                var newChild2 = document.createElement("span");
                newChild2.id = "ripple2";
                node.appendChild(newChild2);
            }
        }
    }
    return (react_1.default.createElement(styles_1.DoubleRippleButton, { ref: rippleButtonRef, onDoubleClick: handelClick, "$left": position.x, "$top": position.y, "$ripple": ripple }, children));
};
exports.default = doublerippleEffect;
//# sourceMappingURL=doublerippleEffect.js.map