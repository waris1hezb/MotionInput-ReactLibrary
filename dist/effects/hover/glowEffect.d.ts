import React from 'react';
interface GlowEffectProps {
    children: React.ReactNode;
    glowColor?: string;
    className?: string;
}
/**
 * Renders a component that applies a glow effect to its children.
 * @param {React.ReactNode} children - The children to apply the glow effect to.
 * @param {string} glowColor - The color of the glow effect. Defaults to white.
 * @param {string} className - to add custom styles using className.
 * @return {*}  {React.FC<GlowEffectProps>} - The GlowEffect component.
 */
declare const GlowEffect: React.FC<GlowEffectProps>;
export default GlowEffect;
