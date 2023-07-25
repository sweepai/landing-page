import React from 'react';
import { render, screen } from '@testing-library/react';
import Examples from './Examples';

describe('Examples component', () => {
  test('renders without crashing', () => {
    render(<Examples />);
    const examplesElement = screen.getByText(/Example tickets handled by Sweep/i);
    expect(examplesElement).toBeInTheDocument();
  });

  test('renders the correct number of Example components', () => {
    render(<Examples />);
    const exampleElements = screen.getAllByText(/@edreisMD, I have started working on this PR. My plan is to:/i);
    expect(exampleElements.length).toBe(3);
  });
});
