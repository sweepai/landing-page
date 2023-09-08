import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correct JSX based on state', () => {
    const { getByText } = render(<Navbar />);
    // Assuming "Home" is a text in the Navbar
    expect(getByText('Home')).toBeInTheDocument();
  });

  test('updates state on breakpoint change', () => {
    const { getByTestId, rerender } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    // Simulate a change in the breakpoint value
    window.innerWidth = 500;
    fireEvent.resize(window);
    // Re-render the component with the new breakpoint value
    rerender(<Navbar />);
    // Check that the state has been updated correctly
    // This will depend on how the state change affects the rendered output
    expect(navbar).toHaveClass('mobile');
  });
});
