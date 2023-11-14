/* eslint-disable prettier/prettier */
import { createGlobalStyle, css } from "styled-components/macro";
// import { normalize } from "polished";
import Variables from "./css/variables.css";
// import Fonts from "./Fonts";
// import Icons from './css/custom-icons.css';

const Styling = css`
  /* theme css variables */
  ${Variables}

  /* Fonts  */
  /* ${Fonts} */

  /* custom icons */ 
  

  /* (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css) */
  /* ${normalize()} */

  /* Other Reset that aren't define in normalize.css*/
  html {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .btn-notice {
    position: fixed !important;
    right: 20px;
    bottom: 90px;
    z-index: 99;
    transition: 0.4s;
    animation: shadow-pulse 1s infinite;
  }

  @keyframes shadow-pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(239, 70, 111, 0.5);
    }

    100% {
      box-shadow: 0 0 0 20px rgba(239, 70, 111, 0);
    }
  }

  .react-tabs__tab-list {
    display: flex !important;
    max-width: 347px;
    border-radius: 50px;
    overflow: hidden;
    border: 1px solid #693fa8 !important;
    margin: 0 0 30px !important;
    padding: 0 !important;

    .react-tabs__tab {
      display: block !important;
      border-width: 0 0 0 1px !important;
      border-style: solid !important;
      border-color: #6d46a9 !important;
      bottom: 0 !important;
      padding: 8px 20px !important;
      border-radius: 0 !important;

      &.react-tabs__tab--selected {
        color: #fff !important;
        background: #6d46a9;
      }
    }
  }

  body {
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base) / var(--line-height-base)
      var(--base-font-family);
    font-weight: 500;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.nav-active {
      @media (max-width: 575px) {
        overflow: hidden;
      }
    }

    &.panel-active {
      overflow: hidden;
      &:before {
        display: block;
      }
    }

    &:before {
      display: none;
      content: "";
      position: absolute;
      top: 0;
      bottom: -10%;
      left: 0;
      right: 0;
      backdrop-filter: blur(4px);
      background: rgba(50, 59, 75, 0.3);
      z-index: 9;
    }
  }

  .wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  a,
  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.25rem;
  }

  p {
    margin: 0;
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) #eceaf9;
  }

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: #eceaf9;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--primary);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }

  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
`;

const HelperClasses = css`
  .hidden {
    display: none;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .text-center {
    text-align: center;
  }
  .font-bold {
    font-weight: bold;
  }
  .font-medium {
    font-weight: 500;
  }

  .fontwight-400 {
    font-weight: 400 !important;
  }
  .desktop-hide {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .mobile-hide {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .wrapper {
    position: relative;
    overflow: hidden;
    max-width: 2600px;
    margin: 0 auto;
  }
  .text-dark {
    color: var(--secondary-text-color);
  }
  .text-primary {
    color: var(--primary-text-color);
  }
  .bg-primary {
    background: var(--primary);
  }
  .truncate-sm {
    @media (max-width: 575px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .truncate-md {
    @media (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .mb-20 {
    margin-bottom: 20px;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Styling}
  ${HelperClasses}
`;

export default GlobalStyles;
