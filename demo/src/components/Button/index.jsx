/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyledButton,
  IconHolder,
  BtnLoader,
  LoaderWrap,
  BadgeHolder,
} from "./Button.styles";

/**
 * A customizable button component.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {boolean} props.loading - Whether the button is in a loading state.
 * @param {React.ReactNode} props.prefix - The icon or text to display before the button content.
 * @param {React.ReactNode} props.suffix - The icon or text to display after the button content.
 * @param {string} props.htmlType - The type of the button (e.g. "submit", "reset", "button").
 * @param {string} props.type - The visual style of the button (e.g. "primary", "secondary", "danger").
 * @param {string} props.shape - The shape of the button (e.g. "round", "square").
 * @param {string} props.size - The size of the button (e.g. "small", "medium", "large").
 * @param {boolean} props.unStyled - Whether the button should have no default styles.
 * @param {React.ReactNode} props.iconMobile - The icon to display on mobile devices.
 * @param {boolean} props.rounded - Whether the button should have rounded corners.
 * @param {boolean} props.sm - Whether the button should be small.
 * @param {string} props.width - The width of the button.
 * @param {string} props.color - The color of the button.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {React.ReactNode} props.badge - The badge to display on the button.
 * @param {React.ReactNode} props.newBadge - The new badge to display on the button.
 * @param {React.ReactNode} props.contestBadge - The contest badge to display on the button.
 * @param {Object} rest - Any additional props to pass to the button element.
 * @param {React.Ref} ref - The ref object.
 * @returns {JSX.Element} - The button component.
 */
const Button = React.forwardRef(
  (
    {
      children,
      loading,
      prefix,
      suffix,
      htmlType,
      type,
      shape,
      size,
      unStyled,
      iconMobile,
      rounded,
      sm,
      width,
      color,
      disabled,
      badge,
      newBadge,
      contestBadge,
      ...rest
    },
    ref
  ) => (
    <StyledButton
      $prefix={prefix}
      $suffix={suffix}
      type={htmlType}
      $type={type}
      $shape={shape}
      $size={size}
      $unStyled={unStyled}
      $iconMobile={iconMobile}
      $rounded={rounded}
      $width={width}
      $sm={sm}
      $color={color}
      disabled={disabled || loading}
      ref={ref}
      $loading={loading}
      badge={badge}
      {...rest}
    >
      {!loading ? (
        <>
          {prefix && <IconHolder>{prefix}</IconHolder>} {children}{" "}
          {suffix && <IconHolder>{suffix}</IconHolder>}{" "}
          {badge && <BadgeHolder>{badge}</BadgeHolder>}
          {contestBadge && (
            <BadgeHolder $contestBadge={contestBadge}>
              {contestBadge}
            </BadgeHolder>
          )}
        </>
      ) : (
        <LoaderWrap>
          <BtnLoader $width={width}>
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="loading"
              width="1em"
              height="1em"
              fill="#1C1A42"
              aria-hidden="true"
            >
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
            </svg>
          </BtnLoader>
          {(width > 115 || !width) && "loading..."}
        </LoaderWrap>
      )}
    </StyledButton>
  )
);

Button.defaultProps = {
  htmlType: "button",
};

export default Button;
