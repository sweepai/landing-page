import React from 'react';
import { render, screen } from '@testing-library/react';
import Examples from '../components/Examples';

describe('Examples component', () => {
  test('renders without crashing', () => {
    render(<Examples />);
    expect(screen.getByText(/Example tickets handled by Sweep/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
