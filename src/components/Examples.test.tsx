import React from 'react';
import { render, screen } from '@testing-library/react';
import Examples from './Examples';

describe('Examples', () => {
  test('renders Examples component', () => {
    render(<Examples />);
    
    // Check for the presence of any text
    expect(screen.getByText(/./)).toBeInTheDocument();
  });
});