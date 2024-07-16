import React from 'react';
import { render } from '@testing-library/react';
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

  it('renders the logo with correct attributes', () => {
    const { getByAltText } = render(<CallToAction />);
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mocked-logo-path');
    expect(logo).toHaveStyle('width: 100px');
    expect(logo).toHaveStyle('border-radius: 50%');
  });

  it('renders TypeAnimation component with correct props', () => {
    const { getByText } = render(<CallToAction />);
    const typeAnimation = getByText(/Fix the date formatting bug in our CRM/);
    expect(typeAnimation).toBeInTheDocument();
  });
});

jest.mock('../assets/icon.png', () => 'mocked-logo-path');
