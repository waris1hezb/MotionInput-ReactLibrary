"use strict";
/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */
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
// Import necessary modules from React
var react_1 = __importStar(require("react"));
// Import the styled component for the RippleButton
var styles_1 = require("./styles");
/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */
var rippleEffect = function (_a) {
    var children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    // State to keep track of the position of the click
    var _c = (0, react_1.useState)({ x: -1, y: -1 }), position = _c[0], setPosition = _c[1];
    // State to keep track of whether the ripple effect should be shown
    var _d = (0, react_1.useState)(false), ripple = _d[0], setRipple = _d[1];
    // Reference to the RippleButton component
    var rippleButtonRef = (0, react_1.useRef)(null);
    // Effect to show the ripple effect when the position changes
    (0, react_1.useEffect)(function () {
        if (position.x !== -1 && position.y !== -1) {
            setRipple(true);
            setTimeout(function () {
                setRipple(false);
                document.getElementById("ripple").remove();
            }, 500);
        }
        else {
            setRipple(false);
        }
    }, [position]);
    // Effect to reset the position when the ripple effect is finished
    (0, react_1.useEffect)(function () {
        if (!ripple) {
            setPosition({
                x: -1,
                y: -1,
            });
        }
    }, [ripple]);
    // Function to handle the click event
    function handelClick(e) {
        // Call the onClick function passed in as a prop
        onClick();
        // Get the position of the click relative to the button
        var rect = e.currentTarget.getBoundingClientRect();
        var offsetX = e.clientX - rect.left;
        var offsetY = e.clientY - rect.top;
        // Set the position state to the click position
        setPosition({
            x: offsetX,
            y: offsetY,
        });
        // Add the ripple effect to the button
        if (rippleButtonRef.current.hasChildNodes()) {
            var children_2 = rippleButtonRef.current.childNodes;
            for (var _i = 0, children_1 = children_2; _i < children_1.length; _i++) {
                var node = children_1[_i];
                if (node.id == "ripple")
                    return;
                var newChild = document.createElement("span");
                newChild.id = "ripple";
                node.appendChild(newChild);
            }
        }
    }
    // Render the RippleButton component with the appropriate props
    return (react_1.default.createElement(styles_1.RippleButton, { ref: rippleButtonRef, onClick: handelClick, "$left": position.x, "$top": position.y, "$ripple": ripple }, children));
};
// Export the rippleEffect component as the default export
exports.default = rippleEffect;
//# sourceMappingURL=rippleEffect.js.map