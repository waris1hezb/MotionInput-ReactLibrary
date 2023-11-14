/* eslint-disable prettier/prettier */
import styled from "styled-components/macro";

/**
 * Defines the styles for the Footer component.
 * 
 * @typedef {Object} FooterStyles
 * @property {string} backgroundColor - The background color of the footer.
 */
export const Footer = styled.footer`
  background-color: var(--dark-blue);
`;

/**
 * Defines the styles for the LogoSection component in Footer.
 * @typedef {Object} LogoSection
 * @property {string} display - Determines the display type of the component.
 * @property {string} justifyContent - Determines the horizontal alignment of the component.
 * @property {string} alignItems - Determines the vertical alignment of the component.
 * @property {string} marginBottom - Determines the margin bottom of the component.
 * @property {Object} media - Determines the media query for the component.
 * @property {string} media.screen - Determines the screen size for the media query.
 * @property {string} media.maxWidth - Determines the maximum width for the media query.
 */
export const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

/**
 * Styles for the LogoHolder component.
 * @typedef {Object} LogoHolder
 * @property {Object} img - The image element.
 * @property {string} img.width - The width of the image.
 * @property {string} img.height - The height of the image.
 * @property {Object} @media - The media query for responsive design.
 * @property {string} @media.screen - The screen size.
 * @property {string} @media.screen.width - The maximum width of the screen.
 * @property {string} @media.screen.height - The maximum height of the screen.
 * @property {Object} @media.screen.width - The media query for responsive design.
 * @property {string} @media.screen.width - The maximum width of the screen.
 * @property {string} margin-bottom - The margin bottom of the component.
 */
export const LogoHolder = styled.div`
  img {
    width: 138px;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 80px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

/**
 * Styles for the LinkSection component in Footer.
 * @typedef {Object} LinkSectionStyles
 * @property {string} display - Specifies the display behavior.
 * @property {string} justifyContent - Specifies the horizontal alignment.
 * @property {string} alignItems - Specifies the vertical alignment.
 * @property {string} gap - Specifies the gap between child elements.
 * @property {string} padding - Specifies the padding around the component.
 * @property {Object} media - Specifies the media query for responsive design.
 * @property {string} media.screen - Specifies the screen size for the media query.
 * @property {number} media.maxWidth - Specifies the maximum width for the media query.
 * @property {Object} media.display - Specifies the display behavior for the media query.
 * @property {string} media.display.display - Specifies the display behavior for the media query.
 * @property {string} media.display.lineHeight - Specifies the line height for the media query.
 */
export const LinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 5px;
  @media screen and (max-width: 768px) {
    display: block;
    line-height: 30px;
  }
`;

/**
 * Styles for the LinkHolder component.
 * @typedef {Object} LinkHolder
 * @property {boolean} underline - Whether to underline the first link or not.
 */
export const LinkHolder = styled.div`
  @media screen and (max-width: 768px) {
    a:nth-child(1) {
      text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
    }
  }
`;

/**
 * Styles for the SolutionHolder component.
 * @typedef {Object} SolutionHolderStyles
 * @property {string} display - Specifies the display behavior.
 * @property {string} flexDirection - Specifies the direction of the flex container.
 * @property {Object} a - Styles for the anchor tag.
 * @property {string} a.textDecoration - Specifies the text decoration for the anchor tag.
 */
export const SolutionHolder = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none !important;
  }
`;

/**
 * Styles for the AddressHolder component.
 * @typedef {Object} AddressHolder
 * @property {string} marginBottom - The margin bottom value.
 */
export const AddressHolder = styled.div`
  margin-bottom: 30px;
`;
/**
 * Styles for the Footer component.
 * @typedef {Object} FooterStyles
 * @property {Object} TextHolder - Styles for the text holder div.
 * @property {string} TextHolder.padding - Padding for the text holder div.
 * @property {string} TextHolder.border-bottom - Border bottom for the text holder div.
 * @property {string} TextHolder.color - Color for the text holder div.
 * @property {string} TextHolder.font-size - Font size for the text holder div.
 * @property {string} TextHolder.line-height - Line height for the text holder div.
 * @property {Object} TextHolder.phone - Styles for the phone element.
 * @property {string} TextHolder.phone.display - Display property for the phone element.
 * @property {Object} TextHolder.span:nth-child(1) - Styles for the first span element.
 * @property {string} TextHolder.span:nth-child(1).display - Display property for the first span element.
 * @property {Object} TextHolder@media screen and (max-width: 768px) - Styles for the text holder div at a specific media query.
 * @property {Object} TextHolder@media screen and (max-width: 768px) br - Styles for the br element at a specific media query.
 * @property {string} TextHolder@media screen and (max-width: 768px) br.display - Display property for the br element at a specific media query.
 * @property {Object} TextHolder@media screen and (max-width: 768px) span - Styles for the span element at a specific media query.
 * @property {string} TextHolder@media screen and (max-width: 768px) span.display - Display property for the span element at a specific media query.
 */
export const TextHolder = styled.div`
  padding: 14px 5px;
  border-bottom: 2px solid var(--dark-gray);
  color: var(--light);
  font-size: 12px;
  line-height: 19px;

  .phone {
    display: block;
  }
  span:nth-child(1) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    br {
      display: none;
    }
    span {
      display: block;
    }
  }
`;
/**
 * Styles for the Footer component.
 * @typedef {Object} FooterStyles
 * @property {Object} TermsHolder - Styles for the terms holder div.
 * @property {string} TermsHolder.display - Specifies the display behavior of the terms holder.
 * @property {string} TermsHolder.justify-content - Specifies the horizontal alignment of the terms holder.
 * @property {string} TermsHolder.align-items - Specifies the vertical alignment of the terms holder.
 * @property {string} TermsHolder.gap - Specifies the gap between the child elements of the terms holder.
 * @property {string} TermsHolder.padding - Specifies the padding of the terms holder.
 * @property {Object} TermsHolder .copyright - Styles for the copyright.
 * @property {string} TermsHolder .copyright.display - 
 * Specifies the display behavior of the copyright.
 * @property {string} TermsHolder .copyright.color -
 * Specifies the color of the copyright.
 * @property {string} TermsHolder .copyright.font-size -
 * Specifies the font size of the copyright.
 */
export const TermsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 14px 5px;
  .copyright {
    display: block;
    color: var(--light);
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

/**
 * Styles for the CaptchaHolder component.
 * @typedef {Object} CaptchaHolderStyles
 * @property {string} display - Specifies the display behavior.
 * @property {string} alignItems - Specifies the alignment of the items along the cross-axis.
 * @property {string} gap - Specifies the gap between the items.
 * @property {string} marginBottom - Specifies the margin at the bottom.
 * @property {Object} imgHolder - Specifies the styles for the image holder.
 * @property {string} imgHolder.display - Specifies the display behavior for the image holder.
 * @property {string} imgHolder.padding - Specifies the padding for the image holder.
 * @property {Object} img - Specifies the styles for the image.
 * @property {string} img.display - Specifies the display behavior for the image.
 * @property {string} img.width - Specifies the width of the image.
 * @property {string} img.height - Specifies the height of the image.
 * @property {Object} textHolder - Specifies the styles for the text holder.
 * @property {string} textHolder.flexGrow - Specifies the flex grow value for the text holder.
 * @property {string} textHolder.color - Specifies the color of the text.
 * @property {string} textHolder.fontSize - Specifies the font size of the text.
 * @property {string} textHolder.lineHeight - Specifies the line height of the text.
 * @property {Object} media - Specifies the styles for the media query.
 * @property {string} media.screen - Specifies the screen size for the media query.
 * @property {string} media.maxWidth - Specifies the maximum width for the media query.
 */
export const CaptchaHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
  .img-holder {
    display: block;
    padding: 10px 0px;
    img {
      display: block;
      width: 70px;
      height: auto;
    }
  }
  .text-holder {
    flex-grow: 1;
    color: var(--light);
    font-size: 12px;
    line-height: 18px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
