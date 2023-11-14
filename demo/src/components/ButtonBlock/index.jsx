/**
 * Renders a component that displays a list of buttons with various effects applied to them.
 * @returns {JSX.Element} The rendered component.
 */
/* eslint-disable prettier/prettier */
import {
  RippleEffect,
  GlowEffect,
  EnlargeEffect,
  ColorChangeEffect,
  BounceEffect,
  FlipEffect,
  RotateEffect,
  BlinkEffect,
  FadeEffect,
  ResizeEffect,
  TrailEffect,
  PulseEffect,
  SmoothZoom,
  BoundingBoxZoom,
} from "effects-library";
import img1 from "../../styles/zoomimg.jpg";
import React from "react";
import { BtnWrap, Grid } from "./ButtonBlock.styles";
import styled from "styled-components";
import Button from "../Button/index";
import { Link } from "react-router-dom";
import arrow from "../../styles/backarraowSvg.svg";
/**
 * Styled container for a block of buttons.
 * @typedef {Object} Container
 * @property {string} max-width - The maximum width of the container.
 * @property {string} margin - The margin of the container.
 * @property {string} padding - The padding of the container.
 * @property {Object} roundBtn - The style for the round button.
 * @property {string} roundBtn.width - The width of the round button.
 * @property {string} roundBtn.aspect-ratio - The aspect ratio of the round button.
 * @property {string} roundBtn.border-radius - The border radius of the round button.
 * @property {string} roundBtn.display - The display property of the round button.
 * @property {string} roundBtn.align-items - The align items property of the round button.
 * @property {string} roundBtn.justify-content - The justify content property of the round button.
 * @property {string} roundBtn.transition - The transition property of the round button.
 * @property {Object} roundBtn:hover - The style for the round button on hover.
 * @property {string} roundBtn:hover.background - The background color of the round button on hover.
 */
export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  .roundBtn {
    width: 50px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease;
    &:hover {
      background: #603a98;
    }
  }
`;

/**
 * Renders a block of buttons with various effects.
 * @returns {JSX.Element} The ButtonBlock component.
 */
const ButtonBlock = () => (
  <Container>
    <BtnWrap>
      <div className="holder">
        <h1 className="h3">I am interested in...</h1>
        <Grid>
          {/* import {RippleEffect} from "effects-library" */}
          {/* Wrapp the RippleEffect over the component for ripple effect */}
          <RippleEffect>
            <Button type="outline">(Click) Ripple Effect</Button>
          </RippleEffect>
          {/* import {BounceEffect} from "effects-library" */}
          {/* Wrapp the BounceEffect over the component for bounce effect*/}
          <BounceEffect>
            <Button type="outline">(Click) Bounce Effect</Button>
          </BounceEffect>
          {/* import {PulseEffect} from "effects-library" */}
          {/* Wrapp the PulseEffect over the component for pulse effect default value is 1. To change the value of pulse use scale={value in number }*/}
          <PulseEffect scale={1.2}>
            <Button type="outline">(Click) Pulse Effect</Button>
          </PulseEffect>
          {/* import {GlowEffect} from "effects-library" */}
          {/* Wrapp the GlowEffect over the component for Glow effect default color is transparent . To change the value of pulse use glowColor="color in string"*/}
          <GlowEffect>
            <Button type="outline">(Hover) Glow Effect</Button>
          </GlowEffect>
          {/* import {EnlargeEffect} from "effects-library" */}
          {/* Wrapp the EnlargeEffect over the component for Enlarge effect default value is 1. To change the value of Effect use scale={value in number }*/}
          <EnlargeEffect scale="1.5">
            <Button type="outline">(Hover) Enlarge Effect</Button>
          </EnlargeEffect>
          {/* import {ColorChangeEffect} from "effects-library" */}
          {/* Wrapp the ColorChangeEffect over the component for Color change effect . To change the colors of Effect use  background={color in string} for background color and for color use color="color in string"*/}
          <ColorChangeEffect background="#ff0" color="#000">
            <Button type="outline">(Hover) Color Change Effect</Button>
          </ColorChangeEffect>
          {/* import {FlipEffect} from "effects-library" */}
          {/* Wrapp the Flip Effect over the component to see the Flip effect on double click.*/}
          <FlipEffect>
            <Button type="outline">(Double Click) Flip Effect</Button>
          </FlipEffect>
          {/* import {RotateEffect} from "effects-library" */}
          {/* Wrapp the Rotate Effect over the component to see the Rotate effect on double click.*/}
          <RotateEffect>
            <Button type="outline">(Double Click) Rotate Effect</Button>
          </RotateEffect>
          {/* import {BlinkEffect} from "effects-library" */}
          {/* Wrapp the Blink Effect over the component to see the Blink effect on double click.*/}
          <BlinkEffect>
            <Button type="outline">(Double Click) Blink Effect</Button>
          </BlinkEffect>
          {/* import {FadeEffect} from "effects-library" */}
          {/* Wrapp the Fade Effect over the component to see the fade effect on mouse down.*/}
          <FadeEffect>
            <Button type="outline">(Drag) Fade Effect</Button>
          </FadeEffect>
          {/* import {ResizeEffect} from "effects-library" */}
          {/* Wrapp the Resize Effect over the component to see the Resize effect on mouse down.*/}
          <ResizeEffect>
            <Button type="outline">(Drag) Resize Effect</Button>
          </ResizeEffect>
          {/* import {TrailEffect} from "effects-library" */}
          {/* Wrapp the Trail Effect over the component to see the trail effect while dragging the component. trailLength to set trail items while dragging value must be between 1 to 10 trailLength={4} default value is 5 */}
          <TrailEffect trailLength={3}>
            <Button type="outline">(Drag) Trails Effect</Button>
          </TrailEffect>
          <div>
            <h2>(hover) Smooth Zoom Effect</h2>
            {/* import {SmoothZoom} from "effects-library" */}
            {/* Wrapp the SmoothZoom Effect over the component to see the zoom effect on hover. default zoom value is 2 adjust the zoom using zoom="3" */}
            <SmoothZoom zoom="2" radius="20px">
              <div style={{ maxWidth: "200px", height: "auto" }}>
                <img src={img1} alt="img" />
              </div>
            </SmoothZoom>
          </div>
          <div>
            <h2>(hover) Bounding Box Effect</h2>
            {/* import {BoundingBoxZoom} from "effects-library" */}
            {/* Wrapp the BoundingBoxZoom Effect over the component to see the bounding box zoom effect on hover. default zoom value is 2 adjust the zoom using zoom="5" */}
            <BoundingBoxZoom zoom="12" radius="20px">
              <div style={{ maxWidth: "200px", height: "auto" }}>
                <img src={img1} alt="img" />
              </div>
            </BoundingBoxZoom>
          </div>
        </Grid>
      </div>
    </BtnWrap>
    <Link to="/">
      <div className="roundBtn">
        <img src={arrow} alt="arraow" />
      </div>
    </Link>
  </Container>
);

export default ButtonBlock;
