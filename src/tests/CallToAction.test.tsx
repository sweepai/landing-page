import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  beforeEach(() => {
    render(<CallToAction />);
  });

  it('renders the heading with correct text', () => {
    const heading = screen.getByText(/Sweep:/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading with correct text', () => {
    const subheading = screen.getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toBeInTheDocument();
  });

  it('renders the "Get started - free" button', () => {
    const getStartedButton = screen.getByText('Get started - free');
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the "Book a demo" button', () => {
    const bookDemoButton = screen.getByText('Book a demo');
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the video element', () => {
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', expect.stringContaining('demo.mp4'));
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });

  it('renders the logo image', () => {
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveStyle('width: 100px');
  });
});