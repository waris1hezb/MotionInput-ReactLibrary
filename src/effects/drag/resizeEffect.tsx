import React, { useState, useEffect, useRef } from "react";
import { ResizeEffectStyle } from "./styles";

/**
 * Props for the ResizeEffect component.
 */
interface ResizeEffectProps {
    /** The children to render. */
    children: React.ReactNode;
}

/**
 * A React component that adds a resize effect to an element when dragged.
 * @param {ResizeEffectProps} props - The props for the ResizeEffect component.
 */
const ResizeEffect: React.FC<ResizeEffectProps> = ({ children }) => {
    // State to keep track of whether the element is being dragged or not
    const [isDragging, setIsDragging] = useState(false);
    // State to keep track of the initial width of the element being dragged
    const [initialWidth, setInitialWidth] = useState<number | null>(null);
    // Reference to the element being dragged
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        // Function to handle the mouse down event on the element being dragged
        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setInitialWidth(element.clientWidth);

            // Function to handle the mouse up event on the window
            const handleMouseUp = () => {
                setIsDragging(false);
                setInitialWidth(null);

                // Remove event listeners for mouse up and mouse move
                window.removeEventListener("mouseup", handleMouseUp);
                window.removeEventListener("mousemove", handleMouseMove);
            };

            // Function to handle the mouse move event on the window
            const handleMouseMove = (e: MouseEvent) => {
                if (isDragging && initialWidth !== null) {
                    // Calculate the new width of the element being dragged
                    const newWidth = initialWidth + (e.clientX - initialWidth);

                    if (element) {
                        // Set the new width of the element being dragged
                        element.style.width = `${newWidth}px`;
                    }
                }
            };

            // Add event listeners for mouse up and mouse move on the window
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("mousemove", handleMouseMove);
        };

        if (element) {
            // Add event listener for mouse down on the element being dragged

            element.addEventListener("mousedown", handleMouseDown);

            // Remove event listener for mouse down on the element being dragged when the component unmounts
            return () => {
                element.removeEventListener("mousedown", handleMouseDown);
            };
        }
    }, [isDragging, initialWidth]);

    // Render the component with the ResizeEffectStyle component and the children passed in as props
    return (
        <ResizeEffectStyle
            ref={elementRef}
            $isDragging={isDragging}
        >
            {children}
        </ResizeEffectStyle>
    );
};


export default ResizeEffect;
