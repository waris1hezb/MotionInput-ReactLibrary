# Glow Effect for Hover

## Description
The Glow Effect enriches user interactions by providing a visual glow feedback during hover interactions. It's fully customizable to fit various design needs.

## Usage
```javascript
// import { GlowEffect } from 'effects-library/effects/hover'; OR 
import { GlowEffect } from 'effects-library';

<GlowEffect glowColor="#3498db">
  <button>Hover me for a glow!</button>
</GlowEffect>
```

## Props
- **glowColor**: Specifies the color of the glow. Default is `#f39c12`.
------
# Enlarge Effect for Hover

## Description
The Enlarge Effect enlarges the visual representation of an element when hovered over. It provides a dynamic feedback indicating active areas for user interaction.

## Usage
```javascript
// import { EnlargeEffect } from 'effects-library/effects/hover'; OR 
import { EnlargeEffect } from 'effects-library';

<EnlargeEffect scale="1.2">
  <button>Hover me to enlarge!</button>
</EnlargeEffect>
```

## Props

| Prop Name    | Description                                          | Type          | Default Value | Required |
|--------------|------------------------------------------------------|---------------|---------------|----------|
| `children`   | The content or elements to which the effect is applied| `ReactNode` | -             | Yes      |
| `className`  | Custom styles using className                         | `string`     | -             | No       |
| `scale`      | Scale factor for the enlarge effect                  | `string`     | "1"           | No       |

-----
# Color Change Effect for Hover

## Description
The Color Change Effect dynamically alters the color of an element upon hover. This can be utilized to guide user attention or provide feedback on possible interactions.

## Usage
```javascript
// import { ColorChangeEffect } from 'effects-library/effects/hover'; OR 
import { ColorChangeEffect } from 'effects-library';

<ColorChangeEffect color="#ff0000" background="#00ff00">
  <button>Hover me to see color shift!</button>
</ColorChangeEffect>
```

## Props

| Prop Name     | Description                                           | Type          | Default Value | Required |
|---------------|-------------------------------------------------------|---------------|---------------|----------|
| `children`    | The content or elements to which the effect is applied | `ReactNode` | -             | Yes      |
| `className`   | Custom styles using className                          | `string`     | -             | No       |
| `color`       | Text color to apply on hover                           | `string`     | -             | No       |
| `background`  | Background color to apply on hover                     | `string`     | -             | No       |


------
#smooth Zoom Effect on Mouse movment

## Description
The Zomm Effect zoom the element when cursor hovered on element.

## Usage
```javascript
// import { SmoothZoom } from 'effects-library/effects/zoom'; OR 
import { SmoothZoom } from 'effects-library';

<SmoothZoom radius="12px" zoom={2}>
  <div>Hover me to see smooth zoom</div>
</SmoothZoom>
```

## Props

| Prop Name    | Description                                                                                  | Type          | Default Value | Required |
|--------------|----------------------------------------------------------------------------------------------|---------------|---------------|----------|
| `children`   | The content or elements to which the effect is applied                                       | `ReactNode`   | -             | Yes      |
| `radius`     | radius for the element and it will same radius like children                                 | `string`      | "0px"         | No       |
| `zoom`       | ajdust the zoom according to your riqurements                                                | `Number`      | "2"           | No       |


------
# Bounding Box Effect on Mouse movment

## Description
The Bounding Box Effect zoom the element when cursor hovered on element and it will not overflow the parent div.

## Usage
```javascript
// import { BoundingBoxZoom } from 'effects-library/effects/zoom'; OR 
import { BoundingBoxZoom } from 'effects-library';

<BoundingBoxZoom radius="12px" zoom={2}>
  <div>Hover me to see zoom effect in boundung box</div>
</BoundingBoxZoom>
```

## Props

| Prop Name    | Description                                                                                  | Type          | Default Value | Required |
|--------------|----------------------------------------------------------------------------------------------|---------------|---------------|----------|
| `children`   | The content or elements to which the effect is applied                                       | `ReactNode`   | -             | Yes      |
| `radius`     | radius for the element and it will same radius like children                                 | `string`      | "0px"         | No       |
| `zoom`       | ajdust the zoom according to your riqurements                                                | `Number`      | "2"           | No       |

-----