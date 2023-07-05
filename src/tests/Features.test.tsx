import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
    expect(screen.getByText(/Clean up your tech debt, automatically/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
