import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
  });

  test('renders correct content', () => {
    render(<Navbar />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
    // expect(screen.getByText('Navbar text')).toBeInTheDocument();
  });
});

