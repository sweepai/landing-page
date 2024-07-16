import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../components/CallToAction';

describe('CallToAction component', () => {
  it('renders the correct YouTube video link', () => {
    const { getByTitle } = render(<CallToAction />);
    const iframeElement = getByTitle('YouTube video player');
    expect(iframeElement.getAttribute('src')).toBe('https://www.youtube.com/embed/GVEkDZmWw8E?autoplay=1&mute=1&loop=1&vq=hd1080&modestbranding=1&controls=0');
  });

  it('renders two buttons with green color scheme', () => {
    render(<CallToAction />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    buttons.forEach(button => {
      expect(button).toHaveStyle('background-color: var(--chakra-colors-green-400)');
      expect(button).toHaveStyle('color: white');
    });
  });

  it('renders "Get started - free" button with correct attributes', () => {
    render(<CallToAction />);
    const getStartedButton = screen.getByText('Get started - free');
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveAttribute('onClick');
  });

  it('renders "Book a demo" button with correct attributes', () => {
    render(<CallToAction />);
    const bookDemoButton = screen.getByText('Book a demo');
    expect(bookDemoButton).toBeInTheDocument();
    expect(bookDemoButton).toHaveAttribute('onClick');
  });
});
