# Getting Started with Effects Library

This guide will walk you through the basic steps to integrate the Effects Library into your React application once it has been deployed.

## Installation

To get started, install the library via npm:

```bash
npm install effects-library
```

## Implementing Effects

### Click Effects

```jsx
import { BounceEffect, RippleEffect, PulseEffect } from "effects-library";

function MyButton() {
  return (
    <BounceEffect>
      <button>Click Me</button>
    </BounceEffect>
  );
}
```

### Hover Effects

```jsx
import { EnlargeEffect } from "effects-library";

function MyComponent() {
  return (
    <EnlargeEffect>
      <div>Hover Over Me</div>
    </EnlargeEffect>
  );
}
```

### Drag Effects

```jsx
import { FadeEffect } from "effects-library";

function MyDraggable() {
  return (
    <FadeEffect>
      <div>Drag Me</div>
    </FadeEffect>
  );
}
```

### Double Click Effects

```jsx
import { FlipEffect } from "effects-library";

function MyFlipCard() {
  return (
    <FlipEffect>
      <div>Double Click Me</div>
    </FlipEffect>
  );
}
```

Follow these simple steps to start using the Effects Library and enhance your user interfaces with beautiful interaction effects.
