/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Defines the styles for the Header component.
 * @typedef {Object} HeaderStyles
 * @property {string} position - The position of the Header.
 * @property {string} padding - The padding of the Header.
 * @property {Object} header-holder - The styles for the header-holder class.
 * @property {string} header-holder.display - The display property of the header-holder class.
 * @property {string} header-holder.align-items - The align-items property of the header-holder class.
 * @property {string} header-holder.max-width - The max-width property of the header-holder class.
 * @property {string} header-holder.padding - The padding property of the header-holder class.
 * @property {string} header-holder.margin - The margin property of the header-holder class.
 */
export const Header = styled.div`
  position: relative;
  padding: 15px 0;

  .header-holder {
    display: flex;
    align-items: center;
    max-width: 1030px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;
/**
 * Styles for the Header component logo.
 * @typedef {Object} Logo
 * @property {string} width - The width of the logo.
 * @property {string} fontSize - The font size of the logo.
 * @property {string} lineHeight - The line height of the logo.
 * @property {Object} a - The anchor tag styles.
 * @property {string} a.color - The color of the anchor tag.
 */
export const Logo = styled.div`
  width: 118px;
  font-size: 28px;
  line-height: 32px;

  a {
    color: var(--white);
  }
`;
