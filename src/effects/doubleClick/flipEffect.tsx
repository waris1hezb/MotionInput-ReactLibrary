
import React, { useState, useEffect } from "react";
import { FlipEffectStyle } from "./styles";

/**
 * Props for the FlipEffect component.
 */
interface FlipEffectProps {
    /** The children to render. */
    children: React.ReactNode;
}

/**
 * A React component that adds a flip effect to an element on double-click.
 * @param {FlipEffectProps} props - The props for the FlipEffect component.
 */
const FlipEffect: React.FC<FlipEffectProps> = ({ children }) => {
    // State to keep track of whether the element is flipped or not
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        // Function to handle double-click event
        const handleDoubleClick = () => {
            // Toggle the flipped state
            setFlipped(!flipped);
        };

        // Get the element by ID
        const element = document.getElementById("flip-element");

        // If the element exists, add event listener for double-click
        if (element) {
            element.addEventListener("dblclick", handleDoubleClick);

            // Remove event listener when component unmounts
            return () => {
                element.removeEventListener("dblclick", handleDoubleClick);
            };
        }
    }, [flipped]);

    // Render the component with the FlipEffectStyle component and the children
    return (
        <FlipEffectStyle id="flip-element" $flipped={flipped}>
            {children}
        </FlipEffectStyle>
    );
};


export default FlipEffect;
