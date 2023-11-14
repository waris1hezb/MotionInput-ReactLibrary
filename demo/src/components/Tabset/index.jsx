/* eslint-disable prettier/prettier */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  RippleEffect,
  GlowEffect,
  EnlargeEffect,
  ColorChangeEffect,
  BounceEffect,
  TrailEffect,
  FadeEffect,
  FlipEffect,
} from "effects-library";
import Card from "../Card";
import { FlexWrap } from "./Tabset.styles";
import { Container } from "../ButtonBlock";
import arrow from "../../styles/backarraowSvg.svg";
import { Link } from "react-router-dom";

/**
 * Renders a tabset component with different effects.
 *
 * @returns {JSX.Element} The Tabset component.
 */
const Tabset = () => (
  <Tabs>
    <Container>
      <h1 className="h3">Course Catalogue</h1>
      <TabList>
        <Tab>Beginner</Tab>
        <Tab>Intermediate</Tab>
        <Tab>Advanced</Tab>
      </TabList>

      <TabPanel>
        <FlexWrap>
          <Link to="/detail">
            <RippleEffect>
              <Card />
            </RippleEffect>
          </Link>
          <RippleEffect>
            <Card />
          </RippleEffect>
          <GlowEffect glowColor="#a679e9">
            <Card />
          </GlowEffect>
          <EnlargeEffect scale="1.08">
            <Card />
          </EnlargeEffect>

          <ColorChangeEffect background="#ddd" color="#000">
            <Card />
          </ColorChangeEffect>
          <BounceEffect>
            <Card />
          </BounceEffect>
        </FlexWrap>
      </TabPanel>
      <TabPanel>
        <FlexWrap>
          <BounceEffect>
            <Card />
          </BounceEffect>
          <TrailEffect trailLength={0}>
            <Card />
          </TrailEffect>
          <FadeEffect>
            <Card />
          </FadeEffect>
          <ColorChangeEffect background="#6481b6" color="#ece3e3">
            <Card />
          </ColorChangeEffect>
        </FlexWrap>
      </TabPanel>
      <TabPanel>
        <FlexWrap>
          <FlipEffect>
            <Card />
          </FlipEffect>
          <ColorChangeEffect background="#6481b6" color="#ece3e3">
            <Card />
          </ColorChangeEffect>
          <TrailEffect trailLength={7}>
            <Card />
          </TrailEffect>
        </FlexWrap>
      </TabPanel>
      <Link to="/">
        <div className="roundBtn">
          <img src={arrow} alt="arraow" />
        </div>
      </Link>
    </Container>
  </Tabs>
);

export default Tabset;
