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

  it('renders "Get started - free" button', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-orange-400)');
  });

  it('renders "Book a demo" button', () => {
    render(<CallToAction />);
    const bookDemoButton = screen.getByText('Book a demo');
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-orange-400)');
  });
});
