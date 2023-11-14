import React from "react";
interface zoomEffectProps {
    children: React.ReactNode;
    x: any;
    y: any;
    radius: string;
    zoom: number;
}
/**
 * @param zoom - adjust the zoom according to your requirements .
 */
declare const smoothZoomEffect: React.FC<zoomEffectProps>;
export default smoothZoomEffect;
