import React, { useState } from "react";
import { ZoomChild, ZoomContainer } from "./styles";
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
const smoothZoomEffect: React.FC<zoomEffectProps> = ({
  children,
  radius,
  zoom = 2,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // This function is called when the mouse moves over the ZoomContainer.
  // It calculates the position of the mouse relative to the ZoomContainer and updates the position state.
  function handelMouseMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setPosition({
      x: offsetX,
      y: offsetY,
    });
  }

  // This function is called when the mouse leaves the ZoomContainer.
  // It resets the position state to (0, 0).
  function handelMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  // This component renders the ZoomContainer and ZoomChild components.
  // It passes the radius and children props to the ZoomContainer component.
  // It calculates the transform origin and transform properties of the ZoomChild component based on the position state.
  // If the position state is (0, 0), the transform origin is set to "center" and the transform is set to "scale(1)".
  // Otherwise, the transform origin is set to the position of the mouse relative to the ZoomContainer and the transform is set to "scale(zoom)".
  // The children are rendered inside the ZoomChild component.
  return (
    <ZoomContainer
      onMouseMove={handelMouseMove}
      onMouseLeave={handelMouseLeave}
      radius={radius}
    >
      <ZoomChild
        style={{
          transformOrigin:
            position.x === 0 && position.y === 0
              ? "center"
              : `${position.x}px ${position.y}px`,
          transform:
            position.x === 0 && position.y === 0
              ? "scale(1)"
              : `scale(${zoom})`,
        }}
      >
        {children}
      </ZoomChild>
    </ZoomContainer>
  );
};

export default smoothZoomEffect;
