import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Features from '../components/Features';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
    expect(screen.getByText('Clean up your tech debt, automatically')).toBeInTheDocument();
  });

  // Add more tests as necessary...
});
