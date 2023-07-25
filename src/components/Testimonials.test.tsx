import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
    const testimonialsElement = screen.getByText(/What our users are saying/i);
    expect(testimonialsElement).toBeInTheDocument();
  });

  test('renders the correct number of Testimonial components', () => {
    render(<Testimonials />);
    const testimonialElements = screen.getAllByText(/Co-founder/i);
    expect(testimonialElements.length).toBe(3);
  });
});
