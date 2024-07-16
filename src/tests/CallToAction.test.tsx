import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('renders the correct heading and subheading', () => {
    render(<CallToAction />);
    const heading = screen.getByText(/Sweep:/i);
    const subheading = screen.getByText(/AI Junior Developer that maintains your legacy codebase/i);

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it('renders TypeAnimation component', () => {
    render(<CallToAction />);
    const typeAnimation = screen.getByText(/Fix the date formatting bug in our CRM/i);
    expect(typeAnimation).toBeInTheDocument();
  });

  it('opens correct URLs when buttons are clicked', () => {
    const openMock = jest.fn();
    window.open = openMock;
    render(<CallToAction />);

    const getStartedButton = screen.getByText(/Get started - free/i);
    fireEvent.click(getStartedButton);
    expect(openMock).toHaveBeenCalledWith('https://github.com/apps/sweep-ai');

    const bookDemoButton = screen.getByText(/Book a demo/i);
    fireEvent.click(bookDemoButton);
    expect(openMock).toHaveBeenCalledWith('https://form.typeform.com/to/wliuvyWE');
  });

  it('renders a video element', () => {
    render(<CallToAction />);
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src');
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
  });
});
