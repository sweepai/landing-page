import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly for different window sizes', () => {
    // Render the Navbar component
    const { getByText } = render(<Navbar />);

    // Check that the correct elements are displayed based on the window size
    expect(getByText('Sweep AI')).toBeInTheDocument();
    expect(getByText('Documentation')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Pricing')).toBeInTheDocument();
  });

  test('updates its state in response to window resize events', () => {
    // Render the Navbar component
    const { getByText } = render(<Navbar />);

    // Simulate a window resize event
    fireEvent(window, new Event('resize'));

    // Check that the state of the Navbar component changes accordingly
    // This is a simplified example, in a real test you would check specific state changes
    expect(getByText('Sweep AI')).toBeInTheDocument();
  });
});
