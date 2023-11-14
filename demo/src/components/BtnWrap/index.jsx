/**
 * Renders a container component with max-width of 1020px, centered horizontally with margin: 0 auto, and padding of 0 10px.
 * Contains a button holder with four buttons, each with a different effect from the effects-library package.
 * @returns {JSX.Element} The rendered component.
 */
/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BtnHolder } from "./BtnWrap.styles";
import styled from "styled-components";
import Button from "../Button/index";
import {
  RippleEffect,
  BlinkEffect,
  TrailEffect,
  FlipEffect,
} from "effects-library";
/**
 * A styled container component with max-width of 1020px, centered horizontally with margin: 0 auto, and padding of 0 10px.
 */
export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 10px;
`;

/**
 * Renders a container with buttons for different interests.
 * @returns {JSX.Element}
 */

const BtnWrap = () => (
  <Container>
    <BtnHolder>
      <div className="holder">
        <h1 className="h3">I am interested in...</h1>
        <Link to="/btns">
          <Button type="outline">Catalog</Button>
        </Link>
        <Link to="/course">
          <Button type="outline">Learning</Button>
        </Link>
        <TrailEffect>
          <RippleEffect>
            <Button type="outline">Teaching</Button>
          </RippleEffect>
        </TrailEffect>
        <FlipEffect>
          <BlinkEffect>
            <RippleEffect>
              <Button type="outline">Demo</Button>
            </RippleEffect>
          </BlinkEffect>
        </FlipEffect>
      </div>
    </BtnHolder>
  </Container>
);

export default BtnWrap;
