import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('initializes with the correct breakpoint value', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    expect(navbar.state.breakpoint).toBe('base');
  });

  it('updates the breakpoint value correctly', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    fireEvent.resize(window, { target: { innerWidth: 800 } });
    expect(navbar.state.breakpoint).toBe('md');
  });

  it('behaves correctly at different breakpoints', () => {
    const { getByTestId, rerender } = render(<Navbar />);
    const navbar = getByTestId('navbar');
    fireEvent.resize(window, { target: { innerWidth: 800 } });
    rerender(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });
});
