/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Styles for the ButtonBlock component.
 * @file This file defines the styles for the ButtonBlock component.
 * @typedef {Object} BtnWrap
 * @property {string} position - The position of the button block.
 * @property {string} width - The width of the button block.
 * @property {string} padding - The padding of the button block.
 * @property {Object} holder - The holder object of the button block.
 * @property {string} holder.width - The width of the holder object.
 * @property {string} holder.display - The display property of the holder object.
 * @property {string} holder.flex-direction - The flex-direction property of the holder object.
 * @property {string} holder.gap - The gap property of the holder object.
 */
export const BtnWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 30px;

  .holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
/**
 * Styles for Button component.
 * @typedef {Object} ButtonStyles
 * @property {string} width - The width of the button.
 * @property {string} borderRadius - The border radius of the button.
 * @property {string} border - The border of the button.
 * @property {string} background - The background color of the button.
 * @property {string} minWidth - The minimum width of the button.
 * @property {string} padding - The padding of the button.
 * @property {string} textAlign - The text alignment of the button.
 * @property {string} color - The text color of the button.
 * @property {string} fontSize - The font size of the button.
 * @property {string} fontStyle - The font style of the button.
 * @property {string} fontWeight - The font weight of the button.
 * @property {string} lineHeight - The line height of the button.
 * @property {string} margin - The margin of the button.
 */
export const Button = styled.button`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.44);
  background: #361566;
  min-width: 150px;
  padding: 15px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 0 15px;
`;

/**
 * Defines a styled grid container with two columns and a gap of 15px.
 * @typedef {import('styled-components').StyledComponent<'div', any, {}, never>} Grid
 */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
