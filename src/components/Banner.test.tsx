import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  test('renders Banner component', () => {
    render(<Banner />);
    
    // Check for the presence of any text
    expect(screen.getByText(/./)).toBeInTheDocument();
    
    // Check for the presence of any image
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});