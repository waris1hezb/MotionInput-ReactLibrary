/// <reference types="react" />
interface FlipProps {
    $flipped: boolean;
}
/**
 * A styled component that applies a flip effect when the $flipped prop is true.
 * @param $flipped - A boolean indicating whether the component should be flipped or not.
 */
export declare const FlipEffectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlipProps>>;
interface RotateProps {
    $rotated: boolean;
}
/**
 * A styled component that applies a rotate effect when $rotated prop is true.
 * @param $rotated - A boolean prop that determines whether to apply the rotate effect or not.
 */
export declare const RotateEffectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, RotateProps>>;
interface BlinkProps {
    $blinking: boolean;
}
/**
 * Component for creating a blinking effect.
 * @param $blinking - Determines whether the component should blink or not.
 */
export declare const BlinkEffectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BlinkProps>>;
export {};
