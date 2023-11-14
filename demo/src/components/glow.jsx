import React from "react";
import { GlowEffect } from "effects-library";

/**
 * A component that adds a glow effect to its child element on hover.
 * @returns {JSX.Element} The rendered component.
 */
const Glow = () => {
  return (
    <GlowEffect glowColor="#3498db">
      <button>Hover me for a glow!</button>
    </GlowEffect>
  );
};

export default Glow;
