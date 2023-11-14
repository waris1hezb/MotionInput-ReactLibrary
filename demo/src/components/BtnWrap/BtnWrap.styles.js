/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Styles for the BtnWrap component.
 * @typedef {Object} BtnWrapStyles
 * @property {Object} BtnHolder - Wrapper for the button.
 * @property {string} BtnHolder.position - Position of the wrapper.
 * @property {string} BtnHolder.maxWidth - Maximum width of the wrapper.
 * @property {string} BtnHolder.margin - Margin of the wrapper.
 * @property {string} BtnHolder.padding - Padding of the wrapper.
 * @property {string} BtnHolder.minHeight - Minimum height of the wrapper.
 * @property {string} BtnHolder.display - Display property of the wrapper.
 * @property {Object} BtnHolder.button - Button element.
 * @property {string} BtnHolder.button.width - Width of the button.
 * @property {Object} BtnHolder.holder - Holder element.
 * @property {string} BtnHolder.holder.width - Width of the holder.
 * @property {string} BtnHolder.holder.display - Display property of the holder.
 * @property {string} BtnHolder.holder.flexDirection - Flex direction of the holder.
 * @property {string} BtnHolder.holder.gap - Gap between elements in the holder.
 * @property {string} BtnHolder.holder.marginBottom - Margin bottom of the holder.
 */
export const BtnHolder = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 15px 0 25px;
  min-height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    width: 500px;
  }
  .holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
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
