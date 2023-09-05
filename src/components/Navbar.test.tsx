import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  let utils;

  beforeEach(() => {
    utils = render(<Navbar />);
  });

  test('renders without crashing', () => {
    expect(utils.container).not.toBeNull();
  });

  test('displays list when window width >= 1024', () => {
    window.innerWidth = 1024;
    fireEvent(window, new Event('resize'));
    expect(utils.getByTestId('navbar').state).toEqual({ listDisplay: "flex", menuDisplay: "none" });
  });

  test('displays menu when window width < 1024', () => {
    window.innerWidth = 1023;
    fireEvent(window, new Event('resize'));
    expect(utils.getByTestId('navbar').state).toEqual({ listDisplay: "none", menuDisplay: "flex" });
  });
});
