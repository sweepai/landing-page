import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('navigates to About page when About link is clicked', () => {
    const { getByText } = render(<Navbar />);
    fireEvent.click(getByText('About'));
    expect(getByText('About Us')).toBeInTheDocument();
  });

  // Add more tests as necessary...
});
