import React from "react";
/**
 * Props for the BlinkEffect component.
 */
interface BlinkEffectProps {
    /** The children to render. */
    children: React.ReactNode;
}
/**
 * BlinkEffect component that blinks the child element on double click
 * @param {React.FC<BlinkEffectProps>} children - The child component to be wrapped by the BlinkEffect component
 * @returns {React.ReactElement} - The React element representing the BlinkEffect component
 */
/**
 * A React component that blinks the content when double-clicked.
 * @param {React.FC<BlinkEffectProps>} children - The content to be blinked.
 * @returns {JSX.Element} - The React component.
 */
declare const BlinkEffect: React.FC<BlinkEffectProps>;
export default BlinkEffect;
