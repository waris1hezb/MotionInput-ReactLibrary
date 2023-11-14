# Drag Fade Effect

## Description
The Drag Fade Effect adds a fading animation to an element when it is dragged. This effect provides visual feedback indicating the drag operation.

## Usage
```javascript
// import { FadeEffect } from 'effects-library/effects/drag'; OR 
import { FadeEffect } from 'effects-library';

<FadeEffect>
  <div>Drag me to see the fade effect!</div>
</FadeEffect>
```

## Props

| Prop Name    | Description                                          | Type      | Default Value | Required |
|--------------|------------------------------------------------------|-----------|---------------|----------|
| `children` | The content or elements to apply the fade effect to  | `ReactNode` | -             | Yes      |
-------
# Drag Resize Effect

## Description
The Drag Resize Effect adds a horizontal resizing interaction to an element when it is dragged horizontally. This effect allows users to change the width of an element by dragging.

## Usage
```javascript
// import { ResizeEffect } from 'effects-library/effects/drag'; OR 
import { ResizeEffect } from 'effects-library';

<ResizeEffect>
  <div>Drag me horizontally to resize!</div>
</ResizeEffect>
```

## Props

| Prop Name    | Description                                          | Type      | Default Value | Required |
|--------------|------------------------------------------------------|-----------|---------------|----------|
| `children` | The content or elements to apply the resize effect to | `ReactNode` | -             | Yes      |
------
# Drag Effect

## Description
The Drag Effect allows you to create a trail of dragged items. It enables a draggable interaction for child elements, leaving behind a trail as they are moved around the screen.

## Usage
```javascript
// Import the DragEffect component
import { DragEffect } from 'effects-library';

<DragEffect radius="15px" trailLength={5}>
  <div>Drag me to see the trail effect!</div>
</DragEffect>
```

## Props

| Prop Name    | Description                                          | Type      | Default Value | Required |
|--------------|------------------------------------------------------|-----------|---------------|----------|
| `children`   | The content or elements to apply the drag effect to | `ReactNode` | -             | Yes      |
| `radius`     | The radius of the dragged child elements           | `string`  | "15px"        | No       |
| `trailLength`| The length of the trail                             | `number`  | 5             | No       |
