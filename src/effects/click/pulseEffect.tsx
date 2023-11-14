// pulseEffect.tsx

import React, { useState, useEffect } from "react";
import { PulseEffectStyle } from "./styles";

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
const PulseEffect: React.FC<PulseEffectProps> = ({ children, scale = 1.2 }) => {
    const [pulsing, setPulsing] = useState(false);

    /**
     * Handles the click event for the pulse effect.
     * Sets the `pulsing` state to `true` and then sets it back to `false` after a specified duration.
     */
    const handlePulseClick = () => {
        setPulsing(true);

        setTimeout(() => {
            setPulsing(false);
        }, 1000); // Adjust the duration as needed
    };

    return (
        <PulseEffectStyle
            id="pulse-element"
            $scale={scale}
            $pulsing={pulsing}
            onClick={handlePulseClick}
        >
            {children}
        </PulseEffectStyle>
    );
};

export default PulseEffect;
