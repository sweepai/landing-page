import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
  });

  test('renders correct content', () => {
    render(<Features />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
    // expect(screen.getByText('Features text')).toBeInTheDocument();
  });
});

