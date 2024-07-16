import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders green call to action buttons', () => {
    render(<CallToAction />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveStyle('background-color: var(--chakra-colors-green-400)');
    });
  });
});
