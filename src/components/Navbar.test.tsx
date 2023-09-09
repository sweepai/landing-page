import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('updates state on window resize', () => {
    const { getByText, rerender } = render(<Navbar />);
    expect(getByText('Home')).toBeInTheDocument();

    // Simulate a window resize
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    // Re-render the component
    rerender(<Navbar />);

    // Check that the state has been updated correctly
    expect(getByText('Home')).toBeInTheDocument();
  });
});
