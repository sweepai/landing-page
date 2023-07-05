import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from '../components/Testimonials';

describe('Testimonials component', () => {
  test('renders without crashing', () => {
    render(<Testimonials />);
    expect(screen.getByText('What our users are saying')).toBeInTheDocument();
  });

  // Add more tests as necessary...
});
