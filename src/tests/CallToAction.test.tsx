import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders both buttons with correct text', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toBeInTheDocument();
    expect(bookDemoButton).toBeInTheDocument();
  });

  it('applies correct color scheme and background color to buttons', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('applies correct hover color to buttons', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toHaveStyle('--chakra-colors-green-600: #2F855A');
    expect(bookDemoButton).toHaveStyle('--chakra-colors-green-600: #2F855A');
  });
});
