import React, { useState } from "react";
import { BoundingChild, BoundingContainer } from "./styles";
interface zoomEffectProps {
  children: React.ReactNode;
  x: any;
  y: any;
  radius: string;
  zoom: number;
}

/**
 * @param zoom - adjust the zoom according to your requirements .
 */
const boundingBoxEffect: React.FC<zoomEffectProps> = ({
  children,
  radius,
  zoom = 2, // default zoom value is 2
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // initialize position state with x and y values as 0
  function handelMouseMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect(); // get the bounding rectangle of the current target element
    const offsetX = e.clientX - rect.left; // calculate the x position of the mouse pointer relative to the target element
    const offsetY = e.clientY - rect.top; // calculate the y position of the mouse pointer relative to the target element
    setPosition({
      x: offsetX,
      y: offsetY,
    });
  }
  function handelMouseLeave() {
    setPosition({ x: 0, y: 0 }); // reset the position state to x and y values as 0 when mouse leaves the target element
  }
  return (
    <BoundingContainer
      onMouseMove={handelMouseMove}
      onMouseLeave={handelMouseLeave}
      radius={radius}
    >
      <BoundingChild
        style={{
          transformOrigin:
            position.x === 0 && position.y === 0
              ? "center" // if position state is x and y values as 0, set the transform origin to center
              : `${position.x}px ${position.y}px`, // otherwise set the transform origin to the position of the mouse pointer relative to the target element
          transform:
            position.x === 0 && position.y === 0
              ? "scale(1)" // if position state is x and y values as 0, set the transform scale to 1
              : `scale(${zoom})`, // otherwise set the transform scale to the zoom value
        }}
      >
        {children}
      </BoundingChild>
    </BoundingContainer>
  );
};

export default boundingBoxEffect;
