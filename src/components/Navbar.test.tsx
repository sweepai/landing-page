import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    const navbarElement = screen.getByText(/Sweep AI/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders the correct links', () => {
    render(<Navbar />);
    const twitterLink = screen.getByLabelText(/Twitter/i);
    expect(twitterLink).toBeInTheDocument();
    const githubLink = screen.getByLabelText(/Github/i);
    expect(githubLink).toBeInTheDocument();
    const discordLink = screen.getByLabelText(/Discord/i);
    expect(discordLink).toBeInTheDocument();
    const docsLink = screen.getByLabelText(/Docs/i);
    expect(docsLink).toBeInTheDocument();
  });
});
