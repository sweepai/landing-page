import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Examples from './components/Examples';
import Testimonials from './components/Testimonials';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByText(/Sweep AI/i);
  expect(appElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByText(/Sweep AI/i);
  expect(navbarElement).toBeInTheDocument();
});

test('renders Features component', () => {
  render(<Features />);
  const featuresElement = screen.getByText(/Clean up your tech debt, automatically/i);
  expect(featuresElement).toBeInTheDocument();
});

test('renders Examples component', () => {
  render(<Examples />);
  const examplesElement = screen.getByText(/Example tickets handled by Sweep/i);
  expect(examplesElement).toBeInTheDocument();
});

test('renders Testimonials component', () => {
  render(<Testimonials />);
  const testimonialsElement = screen.getByText(/What our users are saying/i);
  expect(testimonialsElement).toBeInTheDocument();
});

