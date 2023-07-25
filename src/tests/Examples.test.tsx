import React from 'react';
import { render, screen } from '@testing-library/react';
import Examples from '../components/Examples';

describe('Examples component', () => {
  test('renders without crashing', () => {
    render(<Examples />);
  });

  test('renders correct content', () => {
    expect(screen.getByText('Expected text')).toBeInTheDocument();
    expect(screen.getByText('Example text')).toBeInTheDocument();
  });
});

