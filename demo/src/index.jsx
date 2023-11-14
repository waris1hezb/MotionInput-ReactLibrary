import React, { StrictMode } from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.styles";
import PageHeader from "./components/Header";
import BtnWrap from "./components/BtnWrap";
import ButtonBlock from "./components/ButtonBlock";
import Tabset from "./components/Tabset";
import DetailBlock from "./components/DetailBlock";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      {/* 
        <DraggableComponent>
          <Drag id="draggable">
            <DragText>drag me</DragText>
          </Drag>
        </DraggableComponent> 
      */}
      {/* Renders the page header */}
      <PageHeader />
      <Router>
        {/* Applies global styles */}
        <GlobalStyles />
        {/* Defines the routes */}
        <Routes>
          {/* Renders the button wrap component */}
          <Route path="/" element={<BtnWrap />}></Route>
          {/* Renders the button block component */}
          <Route path="/btns" element={<ButtonBlock />}></Route>
          {/* Renders the tabset component */}
          <Route path="/course" element={<Tabset />}></Route>
          {/* Renders the detail block component */}
          <Route path="/detail" element={<DetailBlock />}></Route>
        </Routes>
      </Router>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
