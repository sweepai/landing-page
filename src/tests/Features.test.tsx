import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
  });

  test('renders correct content', () => {
    render(<Features />);
    // Add assertions to check if the correct text or elements are rendered
    // For example:
    // expect(screen.getByText('Features text')).toBeInTheDocument();
  });
});
