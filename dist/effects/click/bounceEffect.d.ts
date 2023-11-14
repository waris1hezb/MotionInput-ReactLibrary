import React from "react";
interface BounceEffectProps {
    children: React.ReactNode;
}
/**
 * Bounce effect component that wraps its children with a styled component.
 * @param children The children to be wrapped with the bounce effect.
 * @returns A React functional component that applies a bounce effect to its children.
 */
declare const BounceEffect: React.FC<BounceEffectProps>;
export default BounceEffect;
