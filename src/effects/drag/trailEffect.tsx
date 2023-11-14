import React, { useState } from "react";
import { DraggedChild, DraggedChildAnimation, Wrapper } from "./styles";
interface DragEffectProps {
    children: React.ReactNode;
    radius: string;
    width: number;
    height: number;
    trailLength: number;
}

/**
 * Renders a component that creates a trail of dragged items.
 * @param {React.ReactNode} children - The children to apply the drag effect to.
 * @param {string} radius - The radius of the dragged child elements. Default is "15px".
 * @param {number} trailLength - The length of the trail. Default is 5.
 * @return {React.FC<DragEffectProps>} - The DragEffect component.
 */
const DragEffect: React.FC<DragEffectProps> = ({
    children,
    radius = "15px",
    trailLength = 5,
}) => {

    // Check if trailLength is within the acceptable range of 1 to 10, otherwise set it to default value of 5
    if (trailLength > 10 || trailLength <= 0) {
        trailLength = 5;
    } else {
        trailLength;
    }

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

    // Return the DragEffect component with the drag effect applied to the children
    return (
        <>
            <Wrapper
                onMouseMove={handleMouseMove}
                onMouseDown={onDragStart}
                onMouseUp={handleDragEnd}
            >
                {children}
                {isDragging &&
                    Array.from({ length: trailLength }, (_, index) => ({
                        id: index + 1,
                        name: `Object ${index + 1}`,
                    })).map((ele) => {
                        return (
                            <DraggedChildAnimation
                                $height={childWidth.y}
                                $width={childWidth.x}
                                $radius={radius}
                                key={ele.id}
                                style={{
                                    left: mousePosition.x + "px",
                                    top: mousePosition.y + "px",
                                    transform: `${mousePosition.x === 0 && mousePosition.y === 0
                                        ? ""
                                        : "translate(-50%, -50%)"
                                        } `,

                                    transition: `${ele.id === 1 ? " " : `all ${(ele.id / 100) * 10}s ease`
                                        }`,
                                    opacity: `${ele.id !== 1 ? (ele.id / 100) * 10 : "1"}`,
                                    zIndex: `${ele.id === 1 ? "99999999999" : "1"}`,
                                    filter: `${ele.id === 1 ? "" : "blur(15px"}`,
                                }}
                            >
                                {children}
                            </DraggedChildAnimation>
                        );
                    })}
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
                )}
            </Wrapper>
        </>
    );
};

export default DragEffect;
