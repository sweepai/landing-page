import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features', () => {
  test('renders Features component', () => {
    render(<Features />);
    
    // Check for the presence of any text
    expect(screen.getByText(/./)).toBeInTheDocument();
  });
});