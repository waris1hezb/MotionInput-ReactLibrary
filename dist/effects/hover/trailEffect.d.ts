import React from "react";
interface TrailEffectProps {
    children: React.ReactNode;
    appendChild: any;
    color: [];
    trailLength: number;
    width: number;
    draggedChildCoords: {
        x: number;
        y: number;
    };
}
declare const trailEffect: React.FC<TrailEffectProps>;
export default trailEffect;
