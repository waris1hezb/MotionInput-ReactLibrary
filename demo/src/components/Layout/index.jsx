/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable prettier/prettier */
import React from "react";
import Header from "../Header";

/**
 * Renders the layout of the application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} - The JSX element representing the layout.
 */
const Layout = ({ children }) => (
  <>
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  </>
);
export default Layout;
