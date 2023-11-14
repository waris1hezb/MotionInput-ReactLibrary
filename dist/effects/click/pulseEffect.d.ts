import React from "react";
/**
 * Props for the PulseEffect component.
 */
interface PulseEffectProps {
    /** The children to render. */
    children: React.ReactNode;
    /** The scale factor for the pulse effect. */
    scale?: number;
}
/**
 * A React component that adds a pulse effect to an element when clicked.
 * @param {PulseEffectProps} props - The props for the PulseEffect component.
 */
declare const PulseEffect: React.FC<PulseEffectProps>;
export default PulseEffect;
