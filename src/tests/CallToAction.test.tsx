import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CallToAction from '../components/CallToAction';
import { tsParticles } from 'tsparticles';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

jest.mock('../assets/demo.mp4', () => 'mocked-demo-video-path');
jest.mock('tsparticles', () => ({
  tsParticles: {
    load: jest.fn(),
  },
}));
jest.mock('tsparticles-preset-confetti', () => ({
  loadConfettiPreset: jest.fn(),
}));

describe('CallToAction component', () => {
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

  it('renders the "Get started - free" button', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByRole('button', { name: 'Get started - free' });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
  });

  it('renders the "Book a demo" button', () => {
    render(<CallToAction />);
    const bookDemoButton = screen.getByRole('button', { name: 'Book a demo' });
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
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

  it('renders buttons with green color scheme and correct hover styles', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByRole('button', { name: 'Get started - free' });
    const bookDemoButton = screen.getByRole('button', { name: 'Book a demo' });

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');

    expect(getStartedButton).toHaveAttribute('data-hover', 'true');
    expect(bookDemoButton).toHaveAttribute('data-hover', 'true');

    expect(getStartedButton).toHaveStyleRule('background-color', 'var(--chakra-colors-green-600)', {
      modifier: ':hover',
    });
    expect(bookDemoButton).toHaveStyleRule('background-color', 'var(--chakra-colors-green-600)', {
      modifier: ':hover',
    });
  });

  it('renders the logo and handles click interaction', async () => {
    render(<CallToAction />);
    const logo = screen.getByAltText('Logo');
    
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle('width: 100px');
    expect(logo).toHaveStyle('animation: bob 0.75s ease-in-out infinite alternate');
    
    fireEvent.click(logo);
    
    expect(logo).toHaveStyle('animation: spin 0.5s linear');
    expect(loadConfettiPreset).toHaveBeenCalledWith(tsParticles);
    expect(tsParticles.load).toHaveBeenCalledWith('tsparticles', {
      preset: 'confetti',
      particles: {
        color: {
          value: ['#800080', '#FFFFFF'],
        },
      },
    });
  });
});