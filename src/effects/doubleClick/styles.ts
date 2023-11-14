import styled, { keyframes, css } from "styled-components";

interface FlipProps {
  $flipped: boolean;
}

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

/**
 * A styled component that applies a flip effect when the $flipped prop is true.
 * @param $flipped - A boolean indicating whether the component should be flipped or not.
 */
export const FlipEffectStyle = styled.div<FlipProps>`
  display: inline-block;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform-origin: center;
  perspective: 1000px;

  ${({ $flipped }) =>
    $flipped &&
    css`
      animation: ${flipAnimation} 0.5s ease-in-out;
      transform: rotateY(180deg);
    `}
`;

interface RotateProps {
  $rotated: boolean;
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

/**
 * A styled component that applies a rotate effect when $rotated prop is true.
 * @param $rotated - A boolean prop that determines whether to apply the rotate effect or not.
 */
export const RotateEffectStyle = styled.div<RotateProps>`
  display: inline-block;
  transition: transform 0.5s ease-in-out;

  ${({ $rotated }) =>
    $rotated &&
    css`
      animation: ${rotateAnimation} 0.5s ease-in-out;
      transform: rotate(180deg);
    `}
`;

interface BlinkProps {
  $blinking: boolean;
}

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

/**
 * Component for creating a blinking effect.
 * @param $blinking - Determines whether the component should blink or not.
 */
export const BlinkEffectStyle = styled.div<BlinkProps>`
  display: inline-block;
  transition: opacity 0.5s ease-in-out;

  ${({ $blinking }) =>
    $blinking &&
    css`
      animation: ${blinkAnimation} 1s ease infinite;
    `}
`;