import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly for different window sizes', () => {
    // Mock window size to be large
    window.innerWidth = 1024;
    render(<Navbar />);
    expect(screen.getByText('Sweep AI')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.queryByLabelText('Options')).not.toBeInTheDocument();

    // Mock window size to be small
    window.innerWidth = 768;
    fireEvent(window, new Event('resize'));
    expect(screen.getByLabelText('Options')).toBeInTheDocument();
  });
});
