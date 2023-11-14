import React, { useState } from "react";
import { DraggedChild, FadeEffectStyle } from "./styles";

/**
 * Props for the FadeEffect component.
 */
interface FadeEffectProps {
    /** The children to render. */
    children: React.ReactNode;
}

/**
 * A React component that adds a fade effect to an element when dragged.
 * @param {FadeEffectProps} props - The props for the FadeEffect component.
 */
const FadeEffect: React.FC<FadeEffectProps> = ({ children }) => {

    // Set initial state for isDragging, mousePosition and childWidth
    const [isDragging, setDragging] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [childWidth, setChildWidth] = useState({ x: 0, y: 0 });

    // Function to handle drag start event
    const onDragStart = (e) => {
        setDragging(true);
        const width = e.target.clientWidth;
        const height = e.target.clientHeight;
        setChildWidth({
            x: width,
            y: height,
        });
    };

    // Function to handle drag end event
    const handleDragEnd = () => {
        setDragging(false);
        setMousePosition({ x: 0, y: 0 });
    };

    // Function to handle mouse move event
    const handleMouseMove = (e) => {
        if (isDragging) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };

    // CSS class for the fade effect
    const fadeEffectClass = isDragging ? "fade-effect-dragging" : "";

    return (
        <FadeEffectStyle
            onMouseMove={handleMouseMove}
            onMouseDown={onDragStart}
            onMouseUp={handleDragEnd}
            className={fadeEffectClass}

        >
            {children}
            {isDragging && (
                <DraggedChild
                    $height={childWidth.y}
                    $width={childWidth.x}
                    style={{
                        left: ` ${mousePosition.x === 0 ? " " : mousePosition.x + "px"} `,
                        top: ` ${mousePosition.y === 0 ? " " : mousePosition.y + "px"} `,
                        transform: `${mousePosition.x === 0 && mousePosition.y === 0
                            ? ""
                            : "translate(-50%, -50%)"
                            } `,
                    }}
                >
                    {children}
                </DraggedChild>
            )
            }

        </FadeEffectStyle>
    );
};

export default FadeEffect;
