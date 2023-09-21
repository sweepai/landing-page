import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
  });

  test('changes state on window resize', () => {
    render(<Navbar />);
    fireEvent(window, new Event('resize'));
    // Add assertions to check if the state of the component has been updated correctly
  });
});
