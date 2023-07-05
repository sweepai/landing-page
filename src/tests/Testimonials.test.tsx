import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';

describe('Testimonials component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
  });

  test('renders correct content', () => {
    render(<Testimonials />);
    // Add assertions to check if the correct text or elements are rendered
    // For example:
    // expect(screen.getByText('Testimonial text')).toBeInTheDocument();
  });
});
