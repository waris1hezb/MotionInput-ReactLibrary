# Bounce Effect for Click

## Description
The Bounce Effect provides a bouncing visual feedback upon clicking an element. It enhances user interactions making them more dynamic.

## Usage
```javascript
// import { BounceEffect } from 'effects-library/effects/click'; OR 
import { BounceEffect } from 'effects-library';

<BounceEffect>
  <button>Click me for a bounce!</button>
</BounceEffect>
```

## Props
No additional props required.

-----------

# Ripple Effect for Click

## Description
The Ripple Effect produces a visual ripple feedback upon clicking an element. This effect imitates the physical reaction that might occur when interacting with a tactile interface, offering an intuitive and aesthetically pleasing user experience.

## Usage
```javascript
// import { RippleEffect } from 'effects-library/effects/click'; OR 
import { RippleEffect } from 'effects-library';

<RippleEffect>
  <button>Click me for a ripple!</button>
</RippleEffect>
```

## Props

| Prop Name    | Description                                              | Type           | Default Value | Required |
|--------------|----------------------------------------------------------|----------------|---------------|----------|
| `children`   | The content or elements rendered inside the ripple effect| `ReactNode`    | -             | Yes      |
| `appendChild`| Function to append a child element to the DOM            | `Function`     | -             | No       |


## Notes
- The ripple animation's duration is set to 1 second, after which the ripple effect disappears.
- The effect is optimized to ensure that multiple ripple animations don't overlap, providing a smooth user experience.
------
# Click Pulse Effect

## Description
The Click Pulse Effect adds a pulsing animation to an element when it is clicked. It provides a dynamic visual feedback to indicate the click interaction.

## Usage
```javascript
// import { PulseEffect } from 'effects-library/effects/click'; OR 
import { PulseEffect } from 'effects-library';

<PulseEffect scale={1.2}>
  <button>Click me to pulse!</button>
</PulseEffect>
```

## Props

| Prop Name    | Description                                          | Type      | Default Value | Required |
|--------------|------------------------------------------------------|-----------|---------------|----------|
| `children` | The content or elements to apply the effect to     | `ReactNode` | -             | Yes      |
| `scale`    | The scale factor for the pulse effect               | `number` | 1.2           | No       |
