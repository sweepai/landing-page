import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game component', () => {
  test('renders without crashing', () => {
    render(<Game />);
    const gameElement = screen.getByTestId('game');
    expect(gameElement).toBeInTheDocument();
  });

  // Add more tests as needed
});