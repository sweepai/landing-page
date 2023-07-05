import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Examples from '../components/Examples';

describe('Examples component', () => {
  test('renders without crashing', () => {
    render(<Examples />);
    expect(screen.getByText('Example tickets handled by Sweep')).toBeInTheDocument();
  });

  // Add more tests as necessary...
});
