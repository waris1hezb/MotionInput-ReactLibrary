/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */
import React from "react";
/**
 * Props for the RippleEffect component.
 */
interface RippleEffectProps {
    /** The children to render. */
    children: React.ReactNode;
    /** The function to append a child element to the DOM. */
    appendChild: any;
    /** The function to call when the button is clicked. */
    onClick: any;
}
/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */
declare const rippleEffect: React.FC<RippleEffectProps>;
export default rippleEffect;
