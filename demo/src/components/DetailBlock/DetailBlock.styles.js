/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Styles for DetailBlock component.
 * @typedef {Object} DetailBlockStyles
 * @property {Object} ContentWrap - Wrapper for the content.
 * @property {string} ContentWrap.position - Position of the wrapper.
 * @property {string} ContentWrap.width - Width of the wrapper.
 * @property {string} ContentWrap.padding - Padding of the wrapper.
 * @property {Object} ContentWrap.text-area - Text area inside the wrapper.
 * @property {string} ContentWrap.text-area.width - Width of the text area.
 * @property {string} ContentWrap.text-area.padding - Padding of the text area.
 * @property {string} ContentWrap.text-area.color - Color of the text area.
 * @property {string} ContentWrap.text-area.border-radius - Border radius of the text area.
 * @property {string} ContentWrap.text-area.background - Background color of the text area.
 * @property {Object} ContentWrap.img-holder - Image holder inside the wrapper.
 * @property {string} ContentWrap.img-holder.width - Width of the image holder.
 * @property {string} ContentWrap.img-holder.margin - Margin of the image holder.
 */
export const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 0;

  .text-area {
    width: 100%;
    padding: 20px;
    color: #000;
    border-radius: 20px;
    background: #fafafa;
  }

  .img-holder {
    width: 300px;
    margin: 0 auto;
  }
`;
