import React from "react";
interface DragEffectProps {
    children: React.ReactNode;
    radius: string;
    width: number;
    height: number;
    trailLength: number;
}
/**
 * Renders a component that creates a trail of dragged items.
 * @param {React.ReactNode} children - The children to apply the drag effect to.
 * @param {string} radius - The radius of the dragged child elements. Default is "15px".
 * @param {number} trailLength - The length of the trail. Default is 5.
 * @return {React.FC<DragEffectProps>} - The DragEffect component.
 */
declare const DragEffect: React.FC<DragEffectProps>;
export default DragEffect;
