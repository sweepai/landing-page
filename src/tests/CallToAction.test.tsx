import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the demo video', () => {
    render(<CallToAction />);
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', expect.stringContaining('demo.mp4'));
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
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

  it('renders the correct heading and subheading', () => {
    render(<CallToAction />);
    const heading = screen.getByText(/Sweep:/i);
    expect(heading).toBeInTheDocument();
    
    const subheading = screen.getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<CallToAction />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveStyle('width: 100px');
  });
});