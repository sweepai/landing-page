import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';

describe('Testimonials component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
  });

  test('renders correct content', () => {
    render(<Testimonials />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
    // expect(screen.getByText('Testimonial text')).toBeInTheDocument();
  });
});

