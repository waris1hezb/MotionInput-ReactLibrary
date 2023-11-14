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
var shadowAjdustEffect = function (_a) {
    var children = _a.children, _b = _a.radius, radius = _b === void 0 ? "15px" : _b, _c = _a.trailLength, trailLength = _c === void 0 ? 5 : _c;
    if (trailLength > 10 || trailLength <= 0) {
        trailLength = 5;
    }
    else {
        trailLength;
    }
    var _d = (0, react_1.useState)(false), isDragging = _d[0], setDragging = _d[1];
    var _e = (0, react_1.useState)({ x: 0, y: 0 }), mousePosition = _e[0], setMousePosition = _e[1];
    var _f = (0, react_1.useState)({ x: 0, y: 0 }), childWidth = _f[0], setChildWidth = _f[1];
    var onDragStart = function (e) {
        setDragging(true);
        var width = e.target.clientWidth;
        var height = e.target.clientHeight;
        setChildWidth({
            x: width,
            y: height,
        });
        console.log(e.target.clientHeight);
    };
    var handleDragEnd = function () {
        setDragging(false);
        setMousePosition({ x: 0, y: 0 });
    };
    var handleMouseMove = function (e) {
        if (isDragging) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.Wrapper, { onMouseMove: handleMouseMove, onMouseDown: onDragStart, onMouseUp: handleDragEnd },
            children,
            isDragging &&
                Array.from({ length: trailLength }, function (_, index) { return ({
                    id: index + 1,
                    name: "Object ".concat(index + 1),
                }); }).map(function (ele) {
                    return (react_1.default.createElement(styles_1.DraggedChildAnimation, { "$height": childWidth.y, "$width": childWidth.x, "$radius": radius, key: ele.id, style: {
                            left: mousePosition.x + "px",
                            top: mousePosition.y + "px",
                            transform: "".concat(mousePosition.x === 0 && mousePosition.y === 0
                                ? ""
                                : "translate(-50%, -50%)", " "),
                            transition: "".concat(ele.id === 1 ? " " : "all ".concat((ele.id / 100) * 10, "s ease")),
                            opacity: "".concat(ele.id !== 1 ? (ele.id / 100) * 10 : "1"),
                            zIndex: "".concat(ele.id === 1 ? "99999999999" : "1"),
                            filter: "".concat(ele.id === 1 ? "" : "blur(15px"),
                        } }, children));
                }),
            isDragging && (react_1.default.createElement(styles_1.DraggedChild, { "$height": childWidth.y, "$width": childWidth.x, style: {
                    left: " ".concat(mousePosition.x === 0 ? " " : mousePosition.x + "px", " "),
                    top: " ".concat(mousePosition.y === 0 ? " " : mousePosition.y + "px", " "),
                    transform: "".concat(mousePosition.x === 0 && mousePosition.y === 0
                        ? ""
                        : "translate(-50%, -50%)", " "),
                } }, children)))));
};
exports.default = shadowAjdustEffect;
//# sourceMappingURL=shadowAjdustEffect.js.map