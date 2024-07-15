import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

jest.mock('../assets/demo.mp4', () => 'mocked-demo-video-path');

describe('CallToAction component', () => {
  it('renders the video element with correct attributes', () => {
    render(<CallToAction />);
    const videoElement = screen.getByRole('presentation');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', 'mocked-demo-video-path');
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });

  it('renders the correct heading and subheading', () => {
    render(<CallToAction />);
    expect(screen.getByText(/Sweep:/)).toBeInTheDocument();
    expect(screen.getByText('AI Junior Developer that maintains your legacy codebase')).toBeInTheDocument();
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

  it('does not render the "Book a call" link', () => {
    render(<CallToAction />);
    expect(screen.queryByText('Book a call')).not.toBeInTheDocument();
  });
});