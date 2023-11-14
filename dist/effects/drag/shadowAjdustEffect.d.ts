import React from "react";
interface ShadowTrailEffectProps {
    children: React.ReactNode;
    radius: string;
    width: number;
    height: number;
    trailLength: number;
}
declare const shadowAjdustEffect: React.FC<ShadowTrailEffectProps>;
export default shadowAjdustEffect;
