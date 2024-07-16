import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders CallToAction component with green buttons and white text', () => {
    const { getByText } = render(<CallToAction />);
    const getStartedButton = getByText(/Get started - free/i);
    const bookDemoButton = getByText(/Book a demo/i);

    expect(getStartedButton).toBeInTheDocument();
    expect(bookDemoButton).toBeInTheDocument();

    expect(getStartedButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(getStartedButton).toHaveStyle('color: white');
    expect(bookDemoButton).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    expect(bookDemoButton).toHaveStyle('color: white');
  });

  it('renders the TypeAnimation component', () => {
    const { getByTestId } = render(<CallToAction />);
    const typeAnimation = getByTestId('type-animation');
    expect(typeAnimation).toBeInTheDocument();
  });

  it('renders the logo image and handles click event', () => {
    const { getByAltText } = render(<CallToAction />);
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle('animation: bob 0.75s ease-in-out infinite alternate');

    fireEvent.click(logo);
    expect(logo).toHaveStyle('animation: spin 0.5s linear');
  });

  it('handles button click events', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const { getByRole } = render(<CallToAction />);

    const getStartedButton = getByRole('button', { name: 'Get started - free' });
    fireEvent.click(getStartedButton);
    expect(openSpy).toHaveBeenCalledWith('https://github.com/apps/sweep-ai');

    const bookDemoButton = getByRole('button', { name: 'Book a demo' });
    fireEvent.click(bookDemoButton);
    expect(openSpy).toHaveBeenCalledWith('https://form.typeform.com/to/wliuvyWE');

    openSpy.mockRestore();
  });

  it('triggers confetti effect when logo is clicked', async () => {
    const { getByAltText } = render(<CallToAction />);
    const logo = getByAltText('Logo');

    fireEvent.click(logo);

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
