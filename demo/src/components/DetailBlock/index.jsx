/* eslint-disable prettier/prettier */
import React from "react";
import img01 from "../../../public/img01.png";
import { ContentWrap } from "./DetailBlock.styles";
import { BoundingBoxZoom } from "effects-library";
import { Link } from "react-router-dom";
import arrow from "../../styles/backarraowSvg.svg";
import { Container } from "../ButtonBlock";

/**
 * Renders a detail block component.
 * @returns {JSX.Element} DetailBlock component.
 */
const DetailBlock = () => (
  <Container>
    <ContentWrap>
      <div className="holder">
        <h1 className="h3">
          Building a Quantum Computer: From Theory to Practice
        </h1>
        <div className="text-area">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="img-holder">
            <BoundingBoxZoom zoom="2" radius="20px">
              <img src={img01} alt="img" />
            </BoundingBoxZoom>
          </div>
        </div>
      </div>
    </ContentWrap>
    <Link to="/course">
      <div className="roundBtn">
        <img src={arrow} alt="arraow" />
      </div>
    </Link>
  </Container>
);

export default DetailBlock;
