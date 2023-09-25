import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component without crashing', () => {
    render(<Navbar />);
  });

  test('renders correct elements based on state', () => {
    const { getByText } = render(<Navbar />);
    
    // Check for the 'Documentation' button
    expect(getByText('Documentation')).toBeInTheDocument();
  
    // Check for the 'About Us' button
    expect(getByText('About Us')).toBeInTheDocument();
  
    // Check for the 'Pricing' button
    expect(getByText('Pricing')).toBeInTheDocument();
  
    // Check for the 'Sweep AI' text
    expect(getByText('Sweep AI')).toBeInTheDocument();
  });
});
