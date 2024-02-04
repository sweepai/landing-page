import React from 'react';
import { render } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
    it('has a button with the correct color properties', () => {
    const { getByRole } = render(<CallToAction />);
    const buttonElement = getByRole('button', { name: /install sweep/i });
    expect(buttonElement).toHaveStyle({
      colorScheme: 'green',
      bg: 'green.400',
      _hover: { bg: 'green.600' }
    });
  });
});
});
