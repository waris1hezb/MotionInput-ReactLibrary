import { css } from "styled-components";

// import PlusJakartaSansBold from '../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2';
// import PlusJakartaSansMedium from '../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2';
// import PlusJakartaSansRegular from '../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2';
// import Ocra from '../assets/fonts/ocra/OCRA.ttf';

/**
 * CSS for defining custom font faces.
 * @type {Object}
 */
const Fonts = css`
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansBold}) format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(${PlusJakartaSansRegular}) format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "OCRA";
    src: url(${Ocra}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

export default Fonts;
