import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders CallToAction component with green buttons', () => {
    const { getByText } = render(<CallToAction />);
    const getStartedButton = getByText(/Get started - free/i);
    const bookDemoButton = getByText(/Book a demo/i);

    expect(getStartedButton).toBeInTheDocument();
    expect(bookDemoButton).toBeInTheDocument();

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders both buttons with the same background color', () => {
    const { getByText } = render(<CallToAction />);
    const getStartedButton = getByText(/Get started - free/i);
    const bookDemoButton = getByText(/Book a demo/i);
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(getStartedButton).toHaveStyle(bookDemoButton.style);
  });

  it('renders the subheading with correct font size and color', () => {
    const { getByText } = render(<CallToAction />);
    const subheading = getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toHaveStyle('font-size: 1.5rem');
    expect(subheading).toHaveStyle('color: var(--chakra-colors-gray-500)');
  });

  it('renders the video element with correct dimensions', () => {
    const { getByTitle } = render(<CallToAction />);
    const videoElement = getByTitle('YouTube video player');
    expect(videoElement).toHaveStyle('width: 100%');
    expect(videoElement).toHaveStyle('max-width: 800px');
  });
});
