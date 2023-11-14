/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

/**
 * Styles for the Card component.
 * @typedef {Object} CardStyles
 * @property {import('styled-components').StyledComponent<'div', any, {}, never>} CardBlock - The styled div for the Card component.
 */
export const CardBlock = styled.div`
  /* min-width: 300px; */
  position: relative;
  padding: 25px;
  font-size: 16px;
  line-height: 19px;
  border-radius: 28px;
  background: #7e4cca;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 8px;
    font-size: 14px;
    line-height: 17px;
  }
`;

/**
 * Defines the styles for the Header component of the Card.
 * @typedef {Object} Header
 * @property {string} display - Specifies the display behavior of the Header.
 * @property {string} alignItems - Specifies the alignment of the Header items along the cross-axis.
 * @property {string} justifyContent - Specifies the alignment of the Header items along the main-axis.
 * @property {string} margin - Specifies the margin of the Header.
 */
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
`;
/**
 * Styles for the IconBox component.
 * @typedef {Object} IconBoxStyles
 * @property {string} display - Specifies the display behavior of the element.
 * @property {string} alignItems - Specifies the alignment for items inside a flexible container.
 * @property {string} justifyContent - Specifies the alignment for items inside a flexible container.
 * @property {string} borderRadius - Specifies the radius of the element's corners.
 * @property {string} flexShrink - Specifies how much the item will shrink relative to the rest of the flexible items inside the same container.
 * @property {string} width - Specifies the width of the element.
 * @property {string} height - Specifies the height of the element.
 * @property {string} background - Specifies the background color of the element.
 */
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  background: #431b81;
`;
/**
 * Defines the styles for the TextHolder component.
 * @typedef {Object} TextHolder
 * @property {string} width - The width of the component.
 * @property {Object} title - The styles for the title element.
 * @property {string} title.display - The display property of the title element.
 * @property {string} title.fontSize - The font size of the title element.
 * @property {string} title.lineHeight - The line height of the title element.
 * @property {string} title.margin - The margin of the title element.
 */
export const TextHolder = styled.div`
  width: 100%;

  .title {
    display: block;
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 10px;
  }
`;
/**
 * Styles for the Footer component of the Card.
 * @typedef {Object} Footer
 * @property {string} width - The width of the component.
 * @property {string} display - The display property of the component.
 * @property {string} alignItems - The align-items property of the component.
 * @property {string} gap - The gap property of the component.
 * @property {string} paddingTop - The padding-top property of the component.
 * @property {string} fontSize - The font-size property of the component.
 * @property {string} lineHeight - The line-height property of the component.
 * @property {Object} user-img - The styles for the user image.
 * @property {string} user-img.width - The width of the user image.
 * @property {Object} user-img img - The styles for the user image's img tag.
 * @property {string} user-img img.display - The display property of the user image's img tag.
 * @property {string} user-img img.maxWidth - The max-width property of the user image's img tag.
 * @property {string} user-img img.height - The height property of the user image's img tag.
 */
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 15px;
  font-size: 12px;
  line-height: 15px;

  .user-img {
    width: 16px;

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
