"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var colors = [
    "#301934",
    "#481b3e",
    "#5f245a",
    "#753a7a",
    "#904d96",
    "#a66bac",
    "#bf8ad3",
    "#d1a8f5",
    "#e3c6ff",
    "#f3e5ff",
    "#faf0ff",
    "#f5e1ff",
    "#edd1ff",
    "#e2bdff",
    "#d7a6ff",
    "#cd8dff",
    "#c471ff",
    "#b550ff",
    "#a42bff",
    "#7f00ff",
    "#7500e6",
];
var trailEffect = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? colors : _b, _c = _a.trailLength, trailLength = _c === void 0 ? 25 : _c, _d = _a.width, width = _d === void 0 ? 24 : _d, _e = _a.draggedChildCoords, draggedChildCoords = _e === void 0 ? { x: 0, y: 0 } : _e;
    var _f = (0, react_1.useState)(__assign({}, draggedChildCoords)), coords = _f[0], setCoords = _f[1];
    // const [coords, setCoords] = useState<{ x: 0; y: 0 }>(draggedChildCoords);
    var _g = (0, react_1.useState)([]), circles = _g[0], setCircles = _g[1];
    var _h = (0, react_1.useState)(false), isInside = _h[0], setIsInside = _h[1];
    (0, react_1.useEffect)(function () {
        var circleElements = Array.from({ length: trailLength }, function (_, index) { return ({
            x: 0,
            y: 0,
            left: "0px",
            top: "0px",
            scale: 0,
            bgColor: color[index % color.length],
        }); });
        setCircles(circleElements);
    }, []);
    var animateCircles = function () {
        var x = coords.x;
        var y = coords.y;
        setCircles(function (prevCircles) {
            return prevCircles.map(function (circle, index) {
                var newCircle = __assign({}, circle);
                newCircle.left = x - 4 + "px";
                newCircle.top = y - 4 + "px";
                newCircle.scale = (prevCircles.length - index) / prevCircles.length;
                newCircle.x = x;
                newCircle.y = y;
                var nextCircle = prevCircles[index + 1] || prevCircles[0];
                x += (nextCircle.x - x) * 0.1;
                y += (nextCircle.y - y) * 0.1;
                return newCircle;
            });
        });
        requestAnimationFrame(animateCircles);
    };
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            setCoords({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        var handleMouseOut = function () {
            setCircles(function (prevCircles) {
                return prevCircles.map(function (circle) {
                    return __assign(__assign({}, circle), { scale: 0 });
                });
            });
        };
        window.addEventListener("mouseout", handleMouseOut);
        return function () {
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);
    var handleMouseEnter = function () {
        setIsInside(true);
    };
    var handleMouseLeave = function () {
        setIsInside(false);
        setCircles(function (prevCircles) {
            return prevCircles.map(function (circle) {
                return __assign(__assign({}, circle), { scale: 0 });
            });
        });
    };
    return (react_1.default.createElement(styles_1.TrailContainer, { onMouseMove: animateCircles, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        isInside && // Render circles only when the mouse is inside the div
            circles.map(function (circle, index) { return (react_1.default.createElement(styles_1.TrailDot, { width: width, key: index, "$TrailColor": circle.bgColor, style: {
                    left: circle.left,
                    top: circle.top,
                    transform: "scale(".concat(circle.scale, ")"),
                } })); }),
        children));
};
exports.default = trailEffect;
//# sourceMappingURL=trailEffect.js.map