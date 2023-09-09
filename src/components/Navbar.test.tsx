import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly based on state', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    expect(navbar).toHaveClass('navbar');
  });

  it('updates state when breakpoint changes', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    fireEvent.resize(window, { target: { innerWidth: 500 } });
    expect(navbar).toHaveClass('navbar-mobile');
  });
});
