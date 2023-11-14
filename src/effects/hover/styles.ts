import styled, { keyframes } from "styled-components";
interface GlowProps {
  $glowColor?: string;
}

/**
 * A styled component that applies a glow effect on hover.
 * @param {GlowProps} props - The props for the component.
 * @returns {JSX.Element} - A JSX element representing the styled component.
 */
export const GlowEffectStyle = styled.div<GlowProps>`
  > div,
  > span,
  > button,
  > * {
    transition: box-shadow 0.5s ease-in-out;

    &:hover {
      -webkit-box-shadow: 0 0 5px 5px
        ${({ $glowColor }) => ($glowColor ? $glowColor : "")};
      -moz-box-shadow: 0 0 5px 5px
        ${({ $glowColor }) => ($glowColor ? $glowColor : "")};
      box-shadow: 0 0 5px 5px
        ${({ $glowColor }) => ($glowColor ? $glowColor : "")};
    }
  }
`;
interface EnlargeProps {
  scale?: string;
}
/**
 * A styled component that applies an enlarge effect on hover to its child elements.
 * @param scale - The scale factor to apply on hover. Defaults to 1 if not provided.
 */
export const EnlargeEffectStyle = styled.div<EnlargeProps>`
  > div,
  > span,
  > button,
  > * {
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: scale(${({ scale }) => (scale ? scale : "1")});
    }
  }
`;
interface ColorShiftProps {
  background?: string;
  color?: string;
}
/**
 * A styled component that applies a color shift effect on hover to its child elements.
 * @param color - The color to apply on hover.
 * @param background - The background color to apply on hover.
 */
export const ColorChangeEffectStyle = styled.div<ColorShiftProps>`
  > div,
  > span,
  > button,
  > * {
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${({ color }) => (color ? color : "")};
      background: ${({ background }) => (background ? background : "")};
    }
  }
`;


/**
 * A styled container component that applies a zoom effect on hover.
 * @param radius - The border radius of the container.
 */
export const ZoomContainer = styled.div<{
  radius: string;
}>`
  display: inline-block;
  border-radius: ${({ radius }) => (radius ? radius : "")};
`;
export const ZoomChild = styled.div`
  transition: 0.1s all linear;
`;

/**
 * A styled component that applies a trail effect on cursor movment .
 * @param radius - adjust the border-radius according to children.
 * @param TrailColor - The background color of trail.
 */

export const BoundingContainer = styled.div<{
  radius: string;
}>`
  display: inline-block;
  overflow: hidden;
  border-radius: ${({ radius }) => (radius ? radius : "")};
`;
export const BoundingChild = styled.div`
  transition: 0.1s all linear;
`;


export const TrailContainer = styled.div`
  position: relative;
`;
/**
 * A styled component that applies a trail effect on cursor movment .
 * @param width - adjust the width according to your requirement default is 24.
 * @param TrailColor - The background color of trail.
 */
export const TrailDot = styled.div<{
  $TrailColor: string;
  width: number;
}>`
  width: ${({ width }) => `${width}px`};
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${({ $TrailColor }) => $TrailColor};
  position: fixed;
  pointer-events: none;
  z-index: 999999;
`;
