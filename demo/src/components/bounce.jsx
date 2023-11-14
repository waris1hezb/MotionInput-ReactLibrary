import React from "react";
import { BounceEffect } from "effects-library";

/**
 * Renders a button that bounces when clicked.
 * @returns {JSX.Element}
 */
const Bounce = () => {
  return (
    <>
      <BounceEffect>
        <button>Click me for a bounce!</button>
      </BounceEffect>
      <br />
      <br />

      <br />
    </>
  );
};

export default Bounce;
