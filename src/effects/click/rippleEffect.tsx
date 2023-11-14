/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */

// Import necessary modules from React
import React, { useEffect, useState, useRef } from "react";

// Import the styled component for the RippleButton
import { RippleButton } from "./styles";

/**
 * Props for the RippleEffect component.
 */
interface RippleEffectProps {
  /** The children to render. */
  children: React.ReactNode;
  /** The function to append a child element to the DOM. */
  appendChild: any;
  /** The function to call when the button is clicked. */
  onClick: any;
}

/**
 * A React component that adds a ripple effect to a button when clicked.
 * @param children The child elements to render inside the button.
 */
const rippleEffect: React.FC<RippleEffectProps> = ({
  children,
  onClick = () => { },
}) => {
  // State to keep track of the position of the click
  const [position, setPosition] = useState({ x: -1, y: -1 });
  // State to keep track of whether the ripple effect should be shown
  const [ripple, setRipple] = useState(false);
  // Reference to the RippleButton component
  const rippleButtonRef = useRef(null);

  // Effect to show the ripple effect when the position changes
  useEffect(() => {
    if (position.x !== -1 && position.y !== -1) {
      setRipple(true);
      setTimeout(() => {
        setRipple(false);
        document.getElementById("ripple").remove();
      }, 500);
    } else {
      setRipple(false);
    }
  }, [position]);

  // Effect to reset the position when the ripple effect is finished
  useEffect(() => {
    if (!ripple) {
      setPosition({
        x: -1,
        y: -1,
      });
    }
  }, [ripple]);

  // Function to handle the click event
  function handelClick(e: any) {
    // Call the onClick function passed in as a prop
    onClick();
    // Get the position of the click relative to the button
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    // Set the position state to the click position
    setPosition({
      x: offsetX,
      y: offsetY,
    });

    // Add the ripple effect to the button
    if (rippleButtonRef.current.hasChildNodes()) {
      let children = rippleButtonRef.current.childNodes;

      for (const node of children) {
        if (node.id == "ripple") return;
        const newChild = document.createElement("span");
        newChild.id = "ripple";
        node.appendChild(newChild);
      }
    }
  }

  // Render the RippleButton component with the appropriate props
  return (
    <RippleButton
      ref={rippleButtonRef}
      onClick={handelClick}
      $left={position.x}
      $top={position.y}
      $ripple={ripple}
    >
      {children}
    </RippleButton>
  );
};

// Export the rippleEffect component as the default export
export default rippleEffect;

