import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByText(/Sweep AI/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
