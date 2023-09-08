import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(/some text/i)).toBeInTheDocument();
  });

  test('state updates as expected', () => {
    const { getByTestId, rerender } = render(<Navbar />);
    const button = getByTestId('some-button');
    fireEvent.click(button);
    rerender(<Navbar />);
    expect(getByTestId('some-state').textContent).toBe('expected state');
  });
});
