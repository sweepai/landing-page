import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CallToAction from '../components/CallToAction';
import { tsParticles } from 'tsparticles';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

jest.mock('tsparticles', () => ({
  tsParticles: {
    load: jest.fn(),
  },
}));
jest.mock('tsparticles-preset-confetti', () => ({
  loadConfettiPreset: jest.fn(),
}));

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
