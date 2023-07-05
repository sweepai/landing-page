import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
  });

  // Add more tests as necessary...
});
