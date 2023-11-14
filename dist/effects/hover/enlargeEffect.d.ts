import React from "react";
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
declare const enlargeEffect: React.FC<EnlargeEffectProps>;
export default enlargeEffect;
