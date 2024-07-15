import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the heading with correct text', () => {
    render(<CallToAction />);
    const heading = screen.getByText(/Sweep:/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading with correct text', () => {
    render(<CallToAction />);
    const subheading = screen.getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toBeInTheDocument();
  });

  it('renders the "Get started - free" button', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the "Book a demo" button', () => {
    render(<CallToAction />);
    const bookDemoButton = screen.getByText('Book a demo');
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the video element', () => {
    render(<CallToAction />);
    const videoElement = screen.getByRole('presentation', { name: /demo video/i });
    expect(videoElement).toBeInTheDocument();
    expect(videoElement.tagName).toBe('VIDEO');
    expect(videoElement).toHaveAttribute('src', expect.stringContaining('demo.mp4'));
    expect(videoElement).toHaveAttribute('autoplay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });
});