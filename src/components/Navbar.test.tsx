import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('updates state on window resize', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('navbar')).toHaveClass('large');
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    expect(getByTestId('navbar')).toHaveClass('small');
  });

  it('navigates on nav item click', () => {
    const { getByText } = render(<Navbar />);
    fireEvent.click(getByText('About'));
    expect(window.location.pathname).toBe('/about');
  });
});
