/// <reference types="react" />
/**
 * A styled div component that applies a bounce animation when clicked.
 */
interface BounceProps {
    $bounce?: boolean;
}
/**
 * A styled component that applies a bounce effect to its child elements when the `bounce` prop is true.
 */
export declare const BounceEffectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BounceProps>>;
interface RippleProps {
    $top?: any;
    $left?: any;
    $ripple?: boolean;
}
/**
 * Styled component for a button with a ripple effect on click.
 * @param $top - The top position of the ripple effect.
 * @param $left - The left position of the ripple effect.
 * @param $ripple - Whether to show the ripple effect or not.
 */
export declare const RippleButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RippleProps>>;
interface PulseProps {
    $scale: number;
    $pulsing: boolean;
}
/**
 * A styled component that applies a pulse effect when $pulsing prop is true.
 */
export declare const PulseEffectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PulseProps>>;
export {};
