
import React, { useState, useEffect } from "react";
import { BlinkEffectStyle } from "./styles";

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
const BlinkEffect: React.FC<BlinkEffectProps> = ({ children }) => {
    const [blinking, setBlinking] = useState(false);

    useEffect(() => {
        /**
         * Handles the double-click event on the element.
         * Sets the blinking state to true and then after a specified duration, sets it back to false.
         */
        const handleDoubleClick = () => {
            setBlinking(true);

            setTimeout(() => {
                setBlinking(false);
            }, 1000); // Adjust the duration as needed
        };

        const element = document.getElementById("blink-element");

        if (element) {
            element.addEventListener("dblclick", handleDoubleClick);

            return () => {
                element.removeEventListener("dblclick", handleDoubleClick);
            };
        }
    }, []);

    return (
        <BlinkEffectStyle id="blink-element" $blinking={blinking}>
            {children}
        </BlinkEffectStyle>
    );
};

export default BlinkEffect;
