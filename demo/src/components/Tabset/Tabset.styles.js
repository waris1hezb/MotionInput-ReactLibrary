/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Defines a styled component for a flex container with a grid layout.
 * @typedef {Object} FlexWrap
 * @property {string} display - The display property set to "grid".
 * @property {string} grid-template-columns - The grid-template-columns property set to "repeat(3, 1fr)".
 * @property {string} gap - The gap property set to "40px".
 * @property {string} padding-left - The padding-left property set to "40px".
 */
export const FlexWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding-left: 40px;
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
