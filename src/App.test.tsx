import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Example tickets handled by Sweep/i)).toBeInTheDocument();
    expect(screen.getByText(/What our users are saying/i)).toBeInTheDocument();
    expect(screen.getByText(/Clean up your tech debt, automatically/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});

