import styled, { css, keyframes } from "styled-components";

/**
 * A styled component that contains the drag effect wrapper.
 */
export const Wrapper = styled.div`
  user-select: none;
  display: inline-block;
  overflow: hidden;
`;
/**
 * A styled component that represents a dragged child element.
 * @param {number} $width - The width of the dragged child element.
 * @param {number} $height - The height of the dragged child element.
 */
export const DraggedChild = styled.div<{
  $width: number;
  $height: number;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: fixed;
  opacity: 0.9;
  transition: all 0s linear;
  background: none;
`;
/**
 * A styled component that represents the animation of a dragged child element.
 * @param {string} $radius - The radius of the dragged child element.
 * @param {number} $width - The width of the dragged child element.
 * @param {number} $height - The height of the dragged child element.
 */
export const DraggedChildAnimation = styled.div<{
  $radius: string;
  $width: number;
  $height: number;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: fixed;
  border-radius: ${({ $radius }) => $radius};
  opacity: 1;
  background: none;
`;
const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

/**
 * Styled component for the fade effect.
 * @remarks
 * This component is used to create a fade effect when an element is dragged.
 * @public
 */
export const FadeEffectStyle = styled.div`
  /* transition: opacity 0.5s ease-in-out;
  background: transparent;
  display: inline-block; */

  user-select: none;
  display: inline-block;
  overflow: hidden;

  &.fade-effect-dragging {
    animation: ${fadeAnimation} 0.5s ease infinite alternate;
    display: inline-block;
  }
`;

interface ResizeProps {
  $isDragging: boolean;
}

/**
 * A styled component that represents the resize effect.
 * @param $isDragging - A boolean value indicating whether the component is being dragged or not.
 */
export const ResizeEffectStyle = styled.div<ResizeProps>`
  display: inline-block;
  transition: width 0.2s ease-in-out;
  overflow: hidden;
  resize: horizontal;

  ${({ $isDragging }) =>
    $isDragging &&
    css`
      cursor: ew-resize;
    `}
`;


