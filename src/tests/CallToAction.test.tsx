import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

jest.mock('../assets/demo.mp4', () => 'mocked-demo-video-path');

describe('CallToAction component', () => {
  it('renders the logo image', () => {
    render(<CallToAction />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveStyle('width: 100px');
  });

  it('renders the correct heading text', () => {
    render(<CallToAction />);
    const heading = screen.getByText(/Sweep:/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the TypeAnimation component', () => {
    render(<CallToAction />);
    const typeAnimation = screen.getByText('Fix the date formatting bug in our CRM');
    expect(typeAnimation).toBeInTheDocument();
  });

  it('renders the correct subheading text', () => {
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
    const videoElement = screen.getByRole('presentation');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement.tagName).toBe('VIDEO');
    expect(videoElement).toHaveAttribute('src', 'mocked-demo-video-path');
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });
});