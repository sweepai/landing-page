import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders two call-to-action buttons with green color scheme', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toBeInTheDocument();
    expect(bookDemoButton).toBeInTheDocument();

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');

    expect(getStartedButton).toHaveStyle('color: white');
    expect(bookDemoButton).toHaveStyle('color: white');
  });

  it('applies correct hover styles to call-to-action buttons', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toHaveStyle('_hover: { background-color: var(--chakra-colors-green-600) }');
    expect(bookDemoButton).toHaveStyle('_hover: { background-color: var(--chakra-colors-green-600) }');
  });

  it('renders buttons with correct text content', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toHaveTextContent('Get started - free');
    expect(bookDemoButton).toHaveTextContent('Book a demo');
  });

  it('renders buttons with correct size and padding', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    const bookDemoButton = screen.getByText('Book a demo');

    expect(getStartedButton).toHaveStyle('padding: var(--chakra-space-6)');
    expect(bookDemoButton).toHaveStyle('padding: var(--chakra-space-6)');

    expect(getStartedButton).toHaveStyle('font-size: var(--chakra-fontSizes-xl)');
    expect(bookDemoButton).toHaveStyle('font-size: var(--chakra-fontSizes-xl)');
  });
});
