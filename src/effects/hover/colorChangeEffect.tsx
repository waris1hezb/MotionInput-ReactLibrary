import React from "react";
import { ColorChangeEffectStyle } from "./styles";
interface EnlargeEffectProps {
  children: React.ReactNode;
  className: string;
  background?: string;
  color?: string;
}
/**
 * Renders a component that applies a glow effect to its children.
 * @param {React.ReactNode} children - The children to apply the glow effect to.
 * @param {string} className - to add custom styles using className.
 * @return {*}  {React.FC<GlowEffectProps>} - The GlowEffect component.
 */
const colorChangeEffect: React.FC<EnlargeEffectProps> = ({
  children,
  className,
  color,
  background,
}) => {
  return (
    <ColorChangeEffectStyle
      color={color}
      background={background}
      className={className}
    >
      {children}
    </ColorChangeEffectStyle>
  );
};

export default colorChangeEffect;
