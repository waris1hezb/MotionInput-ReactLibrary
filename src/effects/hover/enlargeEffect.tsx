import React from "react";
import { EnlargeEffectStyle } from "./styles";
interface EnlargeEffectProps {
  children: React.ReactNode;
  className: string;
  scale: string;
}
/**
 * Renders a component that applies a glow effect to its children.
 * @param {React.ReactNode} children - The children to apply the glow effect to.
 * @param {string} scale - To add Enlarge Effect on child Default value is "1" .
 * @param {string} className - to add custom styles using className.
 * @return {*}  {React.FC<GlowEffectProps>} - The GlowEffect component.
 */
const enlargeEffect: React.FC<EnlargeEffectProps> = ({
  children,
  className,
  scale,
}) => {
  return (
    <EnlargeEffectStyle scale={scale} className={className}>
      {children}
    </EnlargeEffectStyle>
  );
};

export default enlargeEffect;
