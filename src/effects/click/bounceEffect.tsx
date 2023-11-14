import React, { useState } from "react";
import { BounceEffectStyle } from "./styles";

interface BounceEffectProps {
  children: React.ReactNode;
}

/**
 * Bounce effect component that wraps its children with a styled component.
 * @param children The children to be wrapped with the bounce effect.
 * @returns A React functional component that applies a bounce effect to its children.
 */
const BounceEffect: React.FC<BounceEffectProps> = ({ children }) => {
  const [bounce, setBounce] = useState(false);

  /**
   * Handles the bouncing effect on click.
   * Sets the bounce state to true and then sets it back to false after 1 second.
   */
  function handelBounce() {
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 1000);
  }

  return (
    <BounceEffectStyle $bounce={bounce} onClick={handelBounce}>
      {children}
    </BounceEffectStyle>
  );
};

export default BounceEffect;
