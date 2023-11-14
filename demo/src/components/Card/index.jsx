/* eslint-disable prettier/prettier */
import React from "react";
import icoImg from "../../styles/school-cap.svg";
import userImg from "../../styles/icon-user.svg";
import { CardBlock, Header, IconBox, TextHolder, Footer } from "./Card.styles";

/**
 * Card component.
 *
 * @returns {JSX.Element} JSX.Element
 */
const Card = () => (
  <CardBlock>
    <Header>
      <IconBox>
        <img src={icoImg} width="16" height="16" alt="img description" />
      </IconBox>
      <ul className="list">
        <li>5 lessons</li>
        <li>4 quizes</li>
      </ul>
    </Header>
    <TextHolder>
      <span className="title">Constructing a Quantum Machine</span>
      <p>Building a Quantum Computer: From Theory to Practice</p>
    </TextHolder>
    <Footer>
      <div className="user-img">
        <img src={userImg} width="16" height="16" alt="img description" />
      </div>
      <span>Faidra Antoniadou</span>
    </Footer>
  </CardBlock>
);

export default Card;
