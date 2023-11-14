import React, { StrictMode } from "react";


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles.styles";
import ButtonBlock from "../components/ButtonBlock";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/">
          <ButtonBlock />
        </Route>     
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<App />);
