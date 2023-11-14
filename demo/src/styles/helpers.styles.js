/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components/macro";

/**
 * Defines a styled container component with a maximum width of 1030px and centered horizontally.
 * @typedef {Object} Container
 * @property {string} width - The width of the container.
 * @property {string} max-width - The maximum width of the container.
 * @property {string} margin - The margin of the container.
 * @property {string} padding - The padding of the container.
 */
export const Container = styled.div`
  width: 100%;
  max-width: 1030px;
  margin: 0 auto;
  padding: 0 15px;
`;

/**
 * A styled component that provides flexible layout options.
 * @typedef {Object} Flex
 * @property {boolean} nowrap - If true, flex items will not wrap.
 * @property {string} direction - The direction of the flex container. Can be "column" or "columnReverse".
 * @property {string} justify - The horizontal alignment of the flex items. Can be "center", "space-between", or "end".
 * @property {string} align - The vertical alignment of the flex items. Can be "top", "middle", or "bottom".
 */
export const Flex = styled.div`
  display: flex;
  flex-wrap: ${({ nowrap }) => !nowrap && "wrap"};

  ${({ direction }) =>
    direction === "column" &&
    css`
      flex-direction: column;
    `}

  ${({ direction }) =>
    direction === "columnReverse" &&
    css`
      flex-direction: column;
    `}

  ${({ justify }) =>
    justify === "center" &&
    css`
      justify-content: center;
    `}

  ${({ justify }) =>
    justify === "space-between" &&
    css`
      justify-content: space-between;
    `}

  ${({ justify }) =>
    justify === "end" &&
    css`
      justify-content: flex-end;
    `}

  ${({ align }) =>
    align === "top" &&
    css`
      align-items: flex-start;
    `}

  ${({ align }) =>
    align === "middle" &&
    css`
      align-items: center;
    `}

    ${({ align }) =>
    align === "bottom" &&
    css`
      align-items: flex-end;
    `}
`;

/**
 * CSS helper for centering an element horizontally and vertically.
 * @type {import('styled-components').CSSObject}
 */
export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Styled form group component with optional props.
 * @param {boolean} $invalid - Whether the form group is invalid.
 * @param {boolean} noMargin - Whether to remove the margin from the form group.
 * @param {boolean} uploadFormGroup - Whether the form group is for uploading files.
 * @returns {JSX.Element} - The styled form group component.
 */
export const StyledFormGroup = styled.div`
  margin-bottom: ${({ $invalid, noMargin }) =>
    $invalid || noMargin ? "0px" : "26px"};
  ${({ uploadFormGroup }) =>
    uploadFormGroup &&
    css`
      width: 100%;
      max-width: 9.6875rem;
    `}
`;
