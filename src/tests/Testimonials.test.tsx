import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';

describe('Testimonials component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
    expect(screen.getByText(/What our users are saying/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});
