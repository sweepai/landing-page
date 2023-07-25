import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features component', () => {
  test('renders without crashing', () => {
    render(<Features />);
    const featuresElement = screen.getByText(/Clean up your tech debt, automatically/i);
    expect(featuresElement).toBeInTheDocument();
  });

  test('renders the correct text and links', () => {
    render(<Features />);
    const textElement = screen.getByText(/Sweep generates repository-level code at your command./i);
    expect(textElement).toBeInTheDocument();
    const linkElement = screen.getByText(/Download on Slack/i);
    expect(linkElement).toBeInTheDocument();
  });
});
