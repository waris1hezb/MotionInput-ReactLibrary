import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { ColorChangeEffect } from '../dist';

afterEach(cleanup);
describe('ColorChangeEffect', () => {
  
  it('should render children', () => {
    render(<ColorChangeEffect className="test-class">Test Child</ColorChangeEffect>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    render(<ColorChangeEffect className="test-class">Test Child</ColorChangeEffect>);
    expect(screen.getByText('Test Child').closest('div')).toHaveClass('test-class');
  });

  // it('should change color on hover', () => {
  //   render(<ColorChangeEffect color="red">Test Child</ColorChangeEffect>);
  //   const child = screen.getByText('Test Child');
  //   userEvent.hover(child);
  //   expect(child).toHaveStyle('color: red');
  // });

  // it('should change background color on hover', () => {
  //   render(<ColorChangeEffect background="yellow">Test Child</ColorChangeEffect>);
  //   const child = screen.getByText('Test Child');
  //   userEvent.hover(child);
  //   expect(child).toHaveStyle('background: yellow');
  // });

  it('should not change color or background if they are not provided', () => {
    render(<ColorChangeEffect>Test Child</ColorChangeEffect>);
    const child = screen.getByText('Test Child');
    userEvent.hover(child);
    expect(child).not.toHaveStyle('color: red');
    expect(child).not.toHaveStyle('background: yellow');
  });

});

