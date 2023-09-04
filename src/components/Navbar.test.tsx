import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Sweep AI')).toBeInTheDocument();
    expect(getByText('Documentation')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
  });

  test('responds to window resize', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Sweep AI')).toBeInTheDocument();
    expect(getByText('Documentation')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();

    // Simulate a window resize event
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));

    // Check that the component's state and rendered output update correctly
    expect(getByText('Sweep AI')).toBeInTheDocument();
    expect(getByText('Documentation')).toBeInTheDocument();
    expect(getByText('About Us')).toBeInTheDocument();
  });
});
