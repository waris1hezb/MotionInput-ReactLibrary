
import React, { useState, useEffect } from "react";
import { RotateEffectStyle } from "./styles";

/**
 * Props for the RotateEffect component.
 */
interface RotateEffectProps {
    /** The children to render. */
    children: React.ReactNode;
}

/**
 * A React component that adds a rotate effect to an element on double-click.
 * @param {RotateEffectProps} props - The props for the RotateEffect component.
 */
const RotateEffect: React.FC<RotateEffectProps> = ({ children }) => {
    // State to keep track of whether the element is rotated or not
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        // Function to handle double-click event
        const handleDoubleClick = () => {
            // Toggle the rotated state
            setRotated(!rotated);
        };

        // Get the element by ID
        const element = document.getElementById("rotate-element");

        // If the element exists, add event listener for double-click
        if (element) {
            element.addEventListener("dblclick", handleDoubleClick);

            // Remove event listener when component unmounts
            return () => {
                element.removeEventListener("dblclick", handleDoubleClick);
            };
        }
    }, [rotated]);

    // Render the component with the RotateEffectStyle component and the children
    return (
        <RotateEffectStyle id="rotate-element" $rotated={rotated}>
            {children}
        </RotateEffectStyle>
    );
};


export default RotateEffect;
