import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Sweep AI')).toBeInTheDocument();
  });

  test('changes display mode on window resize', () => {
    const { getByLabelText } = render(<Navbar />);
    expect(getByLabelText('Options')).not.toBeVisible();

    fireEvent(window, new Event('resize'));
    window.innerWidth = 500;

    expect(getByLabelText('Options')).toBeVisible();
  });
});
