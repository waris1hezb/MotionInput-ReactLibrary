import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { TrailEffect } from "effects-library"; // Import the trail effect component

const Wrapper = styled.div`
  user-select: none;
  display: inline-block;
  overflow: hidden;
`;

export const Drag = styled.div`
  width: 400px;
  height: 200px;
  background: #ff5722;
  border-radius: 15px;
  cursor: move;
  z-index: 30;
  transition: opacity 0.3s ease, transform 0.6s ease;
`;

const begindrag = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(6deg);
  }
  55% {
    transform: rotate(-3deg);
  }
  80% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(-1deg);
  }
`;

export const DragText = styled.div`
  font-family: "Helvetica";
  font-weight: 900;
  color: #500a0a;
  font-size: 50px;
  text-align: center;
  line-height: 190px;
`;

const DraggedChild = styled.div`
  position: fixed;
  border-radius: 15px;
  opacity: 0.5;
  transition: all 0s linear;
  background: none;
`;
const DraggedChildAnimation = styled.div`
  position: fixed;
  border-radius: 15px;
  opacity: 1;
  /* transition: all 0.5s linear; */
  background: none;
`;
const colors = ["#301934"];
/**
 * A component that allows its children to be dragged around the screen.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the draggable component.
 * @returns {JSX.Element} - A JSX element representing the draggable component.
 * @example
 * <DraggableComponent>
 *   <div>Drag me around!</div>
 * </DraggableComponent>
 */
/**
 * A component that allows its children to be dragged around the screen.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the draggable component.
 * @returns {JSX.Element} - A JSX element representing the draggable component.
 */
const DraggableComponent = ({ children }) => {
  const [isDragging, setDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  /**
   * Function that sets the dragging state to true on drag start event.
   * @param {Object} e - The drag start event object.
   * @returns {void}
   */
  const onDragStart = (e) => {
    setDragging(true);
  };
  /**
   * Function that is called when the drag operation is ended.
   * It sets the dragging state to false and resets the mouse position.
   */
  const handleDragEnd = () => {
    setDragging(false);
    setMousePosition({ x: 0, y: 0 });
  };
  /**
   * Handles mouse move event when dragging.
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseMove = (e) => {
    if (isDragging) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      <Wrapper
        onMouseMove={handleMouseMove}
        onMouseDown={onDragStart}
        onMouseUp={handleDragEnd}
      >
        {children}
        {isDragging &&
          Array.from({ length: 10 }, (_, index) => ({
            id: index + 1,
            name: `Object ${index + 1}`,
          })).map((ele, ind) => {
            return (
              <DraggedChildAnimation
                key={ele.id}
                style={{
                  left: mousePosition.x + "px",
                  top: mousePosition.y + "px",
                  transform: `${
                    mousePosition.x === 0 && mousePosition.y === 0
                      ? ""
                      : "translate(-50%, -50%)"
                  } `,

                  transition: `${
                    ele.id === 1 ? " " : `all ${(ele.id / 1000) * 100}s ease`
                  }`,
                  opacity: `${ele.id !== 1 ? (ele.id / 100) * 10 : "1"}`,
                  zIndex: `${ele.id === 1 ? "99999999999" : "1"}`,
                  filter: `${ele.id === 1 ? "" : "blur(20px"}`,
                }}
              >
                {children}
              </DraggedChildAnimation>
            );
          })}
        <DraggedChild
          style={{
            left: mousePosition.x + "px",
            top: mousePosition.y + "px",
            transform: `${
              mousePosition.x === 0 && mousePosition.y === 0
                ? ""
                : "translate(-50%, -50%)"
            } `,
          }}
        >
          {children}
        </DraggedChild>
      </Wrapper>
      <TrailEffect draggedChildCoords={mousePosition} color={colors} />
    </>
  );
};

export default DraggableComponent;
