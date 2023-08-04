import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  test('renders CallToAction component', () => {
    render(<CallToAction />);
    
    // Check for the presence of any text
    expect(screen.getByText(/./)).toBeInTheDocument();
    
    // Check for the presence of any button
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});