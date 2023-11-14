import styled, { css, keyframes } from "styled-components";

/**
 * Keyframes for a bounce animation effect.
 * @type {Keyframes}
 */
const bounceAnimation = keyframes`

 0% {}

	25% {
		transform: scale(1.2);
	}

	50% {
		transform: scale(0.9);
	}

	75% {
		transform: scale(1.05);
	}

	100% {
		transform: scale(1);
	}

`;

/**
 * A styled div component that applies a bounce animation when clicked.
 */
interface BounceProps {
  $bounce?: boolean;
}

/**
 * A styled component that applies a bounce effect to its child elements when the `bounce` prop is true.
 */
export const BounceEffectStyle = styled.div<BounceProps>`
  display: inline-block;
  width: 100%;
  > div,
  > span,
  > button,
  > * {
    ${({ $bounce }) =>
    $bounce &&
    css`
        animation: ${bounceAnimation} 320ms ease-out 0s forwards;
      `}
  }
`;
interface RippleProps {
  $top?: any;
  $left?: any;
  $ripple?: boolean;
}

/**
 * Styled component for a button with a ripple effect on click.
 * @param $top - The top position of the ripple effect.
 * @param $left - The left position of the ripple effect.
 * @param $ripple - Whether to show the ripple effect or not.
 */
export const RippleButton = styled.div<RippleProps>`
  position: relative;
  overflow: hidden;
  * {
    overflow: hidden;
    position: relative;
    #ripple {
      position: absolute;
      transform: translate(-50%, -50%);
      top: ${({ $top }) => $top && `${$top}px`};
      left: ${({ $left }) => $left && `${$left}px`};
      pointer-events: none;
      user-select: none;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      ${({ $ripple }) =>
    $ripple &&
    css`
          animation: Animationripple 0.5s forwards;
        `}
      @keyframes Animationripple {
        0% {
          transform: translate(-50%, -50%) scale(1);
          width: 0px;
          height: 0px;
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2);
          width: 1000px;
          height: 1000px;
          opacity: 0;
        }
      }
    }
  }
  span {
    overflow: visible !important;
  }
`;

interface PulseProps {
  $scale: number;
  $pulsing: boolean;
}

/**
 * Defines a keyframe animation for a pulse effect.
 * @template PulseProps The type of props that can be passed to the animation.
 */
const pulseAnimation = keyframes<PulseProps>`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

/**
 * A styled component that applies a pulse effect when $pulsing prop is true.
 */
export const PulseEffectStyle = styled.div<PulseProps>`
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;

  ${({ $pulsing }) =>
    $pulsing &&
    css`
      animation: ${pulseAnimation} 1s ease infinite;
    `}
`;