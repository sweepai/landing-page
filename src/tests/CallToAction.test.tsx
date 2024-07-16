import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

jest.mock('../assets/demo.mp4', () => 'mocked-demo-video-path');
jest.mock('../assets/icon.png', () => 'mocked-icon-path');

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders the heading with correct text', () => {
    render(<CallToAction />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/^Sweep:/);
  });

  it('renders the subheading with correct text', () => {
    render(<CallToAction />);
    const subheading = screen.getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toBeInTheDocument();
  });

  it('renders the "Get started - free" button with correct styles', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByRole('button', { name: 'Get started - free' });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(getStartedButton).toHaveStyle('color: white');
  });

  it('renders the "Book a demo" button with correct styles', () => {
    render(<CallToAction />);
    const bookDemoButton = screen.getByRole('button', { name: 'Book a demo' });
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('color: white');
  });

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

  it('renders the logo image with correct attributes', () => {
    render(<CallToAction />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'mocked-icon-path');
    expect(logoImage).toHaveStyle('width: 100px');
    expect(logoImage).toHaveStyle('border-radius: 50%');
  });

  it('renders the TypeAnimation component with correct props', () => {
    render(<CallToAction />);
    const typeAnimation = screen.getByText(/Fix the date formatting bug in our CRM/);
    expect(typeAnimation).toBeInTheDocument();
    expect(typeAnimation.parentElement).toHaveTextContent(/^Sweep:/);
  });

  it('opens GitHub app page when "Get started - free" button is clicked', () => {
    const openMock = jest.fn();
    window.open = openMock;
    render(<CallToAction />);
    const getStartedButton = screen.getByRole('button', { name: 'Get started - free' });
    fireEvent.click(getStartedButton);
    expect(openMock).toHaveBeenCalledWith('https://github.com/apps/sweep-ai');
  });

  it('opens Typeform when "Book a demo" button is clicked', () => {
    const openMock = jest.fn();
    window.open = openMock;
    render(<CallToAction />);
    const bookDemoButton = screen.getByRole('button', { name: 'Book a demo' });
    fireEvent.click(bookDemoButton);
    expect(openMock).toHaveBeenCalledWith('https://form.typeform.com/to/wliuvyWE');
  });

  it('toggles logo animation on click', () => {
    render(<CallToAction />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toHaveStyle('animation: bob 0.75s ease-in-out infinite alternate');
    fireEvent.click(logoImage);
    expect(logoImage).toHaveStyle('animation: spin 0.5s linear');
  });
});
