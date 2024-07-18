import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders two orange buttons', () => {
    render(<CallToAction />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    buttons.forEach(button => {
      expect(button).toHaveStyle('background-color: var(--chakra-colors-orange-400)');
    });
  });

  it('renders "Get started - free" button with correct color', () => {
    render(<CallToAction />);
    const startButton = screen.getByText('Get started - free');
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveStyle('background-color: var(--chakra-colors-orange-400)');
  });

  it('renders "Book a demo" button with correct color', () => {
    render(<CallToAction />);
    const demoButton = screen.getByText('Book a demo');
    expect(demoButton).toBeInTheDocument();
    expect(demoButton).toHaveStyle('background-color: var(--chakra-colors-orange-400)');
  });
});
