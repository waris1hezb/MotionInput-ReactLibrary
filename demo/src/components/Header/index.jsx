/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from "react";
import { Header, Logo } from "./Header.styles";

/**
 * Renders the page header component.
 * @returns {JSX.Element}
 */
const PageHeader = () => (
  <Header>
    <div className="header-holder">
      <Logo>
        <a to="/">IBM</a>
      </Logo>
    </div>
  </Header>
);

export default PageHeader;
