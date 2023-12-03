# Usage Guide for Effects Library

This usage guide provides detailed information on how to customize and utilize the various effects within the React Library.

## Customizing Click Effects

### Pulse Effect

```jsx
<PulseEffect scale={1.1}>
  <button>Click Me</button>
</PulseEffect>
```

Adjust the `scale` prop to control the pulsing intensity.

## Customizing Hover Effects

### Color Change Effect

```jsx
<ColorChangeEffect color="#3498db" backgroundColor="#9b59b6">
  <div>Hover Over Me</div>
</ColorChangeEffect>
```

Use `color` and `backgroundColor` props to set the text and background colors.

## Customizing Drag Effects

### Trail Effect

```jsx
<TrailEffect trailLength={50} radius={5}>
  <div>Drag Me</div>
</TrailEffect>
```

Modify `trailLength` and `radius` for custom trail appearances.

## Customizing Double Click Effects

Customization details for double click effects can be added based on the available props or configuration options in the library.

By following the examples and adjusting the properties as needed, you can create a tailored experience for your React applications using the MotionInput React Library.
