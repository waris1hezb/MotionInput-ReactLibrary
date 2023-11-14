import React from "react";
import { RippleEffect } from "effects-library";
import { DoubleRippleEffect } from "effects-library";
import styled from "styled-components";

export const ButtonStyles = styled.button`
  min-width: 150px;
  height: 50px;
  background: purple;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #fff;
`;
export const Bstyles = styled.div`
  min-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  padding: 25px;
  font-size: 16px;
  line-height: 19px;
  border-radius: 28px;
  background: #7e4cca;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;
/**
 * A button component with ripple effect.
 *
 * @returns {JSX.Element} The Button component.
 */
const Button = () => {
  return (
    <>
      <DoubleRippleEffect>
        <ButtonStyles> Double click me</ButtonStyles>
      </DoubleRippleEffect>
      <br />
      <br />
      <RippleEffect>
        <ButtonStyles>click me</ButtonStyles>
      </RippleEffect>
    </>
  );
};

export default Button;
