import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });

  it('responds to different screen sizes', () => {
    window.innerWidth = 1024;
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
    window.innerWidth = 800;
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
  });
});
