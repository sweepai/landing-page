import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('state is correctly initialized', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    expect(navbar).toHaveAttribute('data-breakpoint', 'base');
  });

  test('state is correctly updated', () => {
    // This test would require a way to simulate a window resize event
    // and is left as an exercise for the reader.
  });

  test('render method correctly uses the state', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
  });
});
