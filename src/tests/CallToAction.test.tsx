import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders CallToAction component with green buttons', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText(/Get started - free/i);
    const bookDemoButton = screen.getByText(/Book a demo/i);

    expect(getStartedButton).toBeInTheDocument();
    expect(bookDemoButton).toBeInTheDocument();

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders buttons with correct text and color scheme', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText(/Get started - free/i);
    const bookDemoButton = screen.getByText(/Book a demo/i);

    expect(getStartedButton).toHaveAttribute('color', 'white');
    expect(bookDemoButton).toHaveAttribute('color', 'white');

    expect(getStartedButton).toHaveAttribute('colorscheme', 'green');
    expect(bookDemoButton).toHaveAttribute('colorscheme', 'green');
  });

  it('renders buttons with correct hover styles', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText(/Get started - free/i);
    const bookDemoButton = screen.getByText(/Book a demo/i);

    expect(getStartedButton).toHaveStyle('_hover: { background-color: var(--chakra-colors-green-600) }');
    expect(bookDemoButton).toHaveStyle('_hover: { background-color: var(--chakra-colors-green-600) }');
  });
});
