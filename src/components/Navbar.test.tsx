import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly for different window sizes', () => {
    // Render the Navbar component
    const { getByTestId } = render(<Navbar />);

    // Check that the correct elements are rendered based on the window size
    expect(getByTestId('navbar')).toBeInTheDocument();
  });

  test('updates its state in response to window resize events', () => {
    // Render the Navbar component
    const { getByTestId } = render(<Navbar />);

    // Simulate a window resize event
    fireEvent(window, new Event('resize'));

    // Check that the state of the Navbar component is updated correctly
    expect(getByTestId('navbar')).toHaveAttribute('state');
  });
});
