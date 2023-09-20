import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders without crashing', () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });

  test('displays list items and hides menu when window width is >= 1024', () => {
    window.innerWidth = 1024;
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /Twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Github/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Discord/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Email/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Options/i })).not.toBeInTheDocument();
  });

  test('hides list items and displays menu when window width is < 1024', () => {
    window.innerWidth = 1023;
    render(<Navbar />);
    expect(screen.queryByRole('button', { name: /Twitter/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Github/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Discord/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Email/i })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Options/i })).toBeInTheDocument();
  });

  test('renders navItems correctly', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /Twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Github/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Discord/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Email/i })).toBeInTheDocument();
  });
});
