import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct video element', () => {
    render(<CallToAction />);
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', expect.stringContaining('demo.mp4'));
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('muted');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
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

  it('renders the correct heading and typewriter animation', () => {
    render(<CallToAction />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Sweep:');

    const typewriterElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'span' && content.includes('Fix the date formatting bug in our CRM');
    });
    expect(typewriterElement).toBeInTheDocument();
  });

  it('renders the subheading text', () => {
    render(<CallToAction />);

    const subheading = screen.getByText('AI Junior Developer that maintains your legacy codebase');
    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveStyle('color: var(--chakra-colors-purple-400)');
  });
});
